import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./CSS/DiscoverPage.css";

import { motion, AnimatePresence } from "framer-motion";
// MUI imports
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from '@mui/icons-material/Send';
import { getPostsByUser } from '../../src/backend/queries/postQueries';
import { getAllComments } from '../../src/backend/queries/commentQueries';
import { createComment } from '../../src/backend/mutations/commentMutations';
import { updateUser } from '../../src/backend/mutations/userMutations';
import { getImage } from "../backend/storage/s3";
import { TextField, Typography } from "@mui/material";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import { getUserById } from "../backend/queries/userQueries";
// keep these functions here for top level backend connection

export default function DiscoverPage() {

  const [projectsAll, setProjectsAll] = useState<any[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getPostsByUser({
        filter: {
          userID: {
            ne: localStorage.getItem('uuid')!
          }
        }
      });
      
      const filteredProjects = result.data.listPostsModels.items.filter(x => x._deleted !== true);
      setProjectsAll(filteredProjects);
    };
    fetchProjects();
  }, []);
  // set up state to keep track of which project is currently visible
  const [currentProjectIndex, setCurrentProjectIndex] = useState(parseInt(localStorage.getItem('currentProjectindex')!));
  // define a function to handle clicking either save or remove project buttona
  const handleNextProject = () => {
    if (currentProjectIndex === projectsAll.length - 1) { 
      setCurrentProjectIndex(0);
      localStorage.setItem('currentProjectindex', '0');
    } else {
    setCurrentProjectIndex((currentProjectIndex + 1) % projectsAll.length);
    localStorage.setItem('currentProjectindex', ((currentProjectIndex + 1) % projectsAll.length).toString());
    }
  };
  const handleBackProject = () => {
    if (currentProjectIndex === 0) {
      setCurrentProjectIndex(projectsAll.length - 1);
      localStorage.setItem('currentProjectindex', (projectsAll.length - 1).toString());
    } else {
    setCurrentProjectIndex((currentProjectIndex - 1) % projectsAll.length);
    localStorage.setItem('currentProjectindex', ((currentProjectIndex - 1) % projectsAll.length).toString());
    }
    
  };
  return (
    <div className="DiscoverPage">
      <Navbar />
      {(projectsAll).map((project, index) => (
        <DiscoverComponent
          projects={project}
          key={project.title}
          isVisible={index === currentProjectIndex}
          onNextProject={handleNextProject}
          onBackProject={handleBackProject}
        />
      ))}
    </div>
  );
}

function CommentSection(props: any) {

  function sort (array: any[]) {
    return array.sort((a: any, b: any) => {
      return new Date(b.comment_date).getTime() - new Date(a.comment_date).getTime();
    }
    );
  }
  let sortedComments = sort(props.comments);
  console.log(sortedComments);
  return (
    <div className="CommentSection">
      <h2>Comments</h2>
      <CreateComment projectInfo = {props.project}/>
      {sortedComments.map((comment) => (
        <Comments CommentInfo = {comment}/>
      ))}
    </div>
  );
}
function CreateComment(props: any) {
  async function postComment(props: {
    comment: string;
    postID: string;
  }): Promise<void> {
    const result = await createComment({
      input:
      {
        comment: props.comment,
        userID: localStorage.getItem('uuid')!,
        postID: props.postID,
        user_name: localStorage.getItem('username')!,
        profile_image: localStorage.getItem('profileImage')!,
        comment_date: new Date().toISOString()
      }
    })
    console.log(result)
    window.location.reload();
  }
  const validationSchema = yup.object({
    comment : yup
      .string()
      .required("Required")
      .max(1000, "Must be 1000 characters or less")
  });
  
  const formik = useFormik({
    initialValues: {
      comment: "",
      postID: props.projectInfo
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postComment(values)
    },
  });
  return (
    <div className="CreateComment">
      <TextField
        id="comment"
        name="comment"
        placeholder="Write a comment..."
        multiline
        hiddenLabel
        fullWidth
        maxRows={10}
        rows={4}
        sx = {{
          color: "#FFFFFF",
        }}
        value = {formik.values.comment}
        onChange = {formik.handleChange}
        error = {formik.touched.comment && Boolean(formik.errors.comment)}
        helperText = {(formik.touched.comment && formik.errors.comment) || " "}
      />
      <Button 
      sx={{
        width: "100%",
        height: "2.5rem",
        backgroundColor: "#6259b9",
        color: "white",
        "&:hover": {
          backgroundColor: "#716ab4",
        },
      }} 
      onClick={() => formik.handleSubmit()}>
      Post Comment
      </Button>
      
    </div>
  );
  }


function formatIsoTimestamp(isoTimestamp: string): string {
  const date = new Date(isoTimestamp);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: 'numeric' });
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });

  return `${month} ${day}, ${year}, ${time}`;
}

function Comments(props: any) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(props.CommentInfo.profile_image);
      setImageSrc(src);
    };

    fetchImage()

  }, []);

  let commentdate = formatIsoTimestamp(props.CommentInfo.comment_date)
  return (
    <div className="Comment">
      <div className="CommentHeader">
        <img src={imageSrc} alt="User Avatar" className="Avatar" />
        <h3 className="Username">{props.CommentInfo.user_name}</h3>
        <p className="DateTime">{commentdate}</p>
        </div>
      <p className="CommentBody">{props.CommentInfo.comment}</p>
    </div>
      );
}


function DiscoverComponent(props: any) {
  // remake objects
  const [commentsAll, setCommentsAll] = useState<any[]>([]);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(props.projects.image_link);
      setImageSrc(src);
    };

    fetchImage();
   
    const fetchComments = async () => {
      const rawComments = await getAllComments({
      filter: {
        postID: {
          eq: props.projects.id
        }
      }
    })
      const filteredComments = rawComments.data.listCommentModels.items.filter(x => x._deleted !== true);
      setCommentsAll(filteredComments);
    }
    fetchComments();
    
  }, []);
  const { projects, isVisible, onNextProject, onBackProject } = props;

  // framer motion -- use for exit, later implementation
  const slideRight = {
    x: 1000,
    opacity: 2,
    transition: {
      duration: 1000,
    },
  };

  const handleSave = async () => {
    console.log("saving project");
    const oldsaved = await getUserById(localStorage.getItem('uuid')!)
    const oldVersion = oldsaved.data.getUsersModel._version
    console.log(oldVersion)
    const newsaved: any[] = oldsaved.data.getUsersModel.saved_posts
    if (!newsaved.includes(props.projects.id)) {
      newsaved.push(props.projects.id)
      const result = await updateUser({
        input: {
          id: localStorage.getItem('uuid')!,
          saved_posts: newsaved,
          _version: oldVersion
        }
      })
      console.log(result)
    } else {
      console.log('already saved')
    }


  };

  const handleRemove = () => {
    
  };
  const handleNext = () => {
    onNextProject();
  };
  const handleBack = () => {
    onBackProject();
  };
  // implement using project id to pull and store array of comments
  const testComment = {
    username: "John Doe",
    comment: "This is a sample comment.",
  }
  const comment = [ testComment, testComment, testComment]
  return isVisible ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 2 }}
      >
        <div className="DiscoverHolder">
          <div className="DHolder">
            <IconButton sx={{}} onClick={handleBack}>
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
            <div className="DiscoverMain">
              <div className="topRowDiscover">
                <div className="DiscoverimgBox">
                  <img
                    className="DiscoverImg"
                    src={imageSrc}
                    alt="project image"
                  />
                  {/* remove project button */}
                  <IconButton
                    color="primary"
                    aria-label="remove project"
                    component="label"
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      zIndex: 30,
                      color: "black",
                    }}
                    onClick={handleRemove}
                  >
                    <CancelIcon fontSize="large" sx={{ }} />
                  </IconButton>
                  {/* save project button */}
                  <IconButton
                    color="primary"
                    aria-label="save project"
                    component="label"
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      zIndex: 30,
                      color: "black",
                    }}
                    onClick={handleSave}
                  >
                    <BookmarkBorderIcon
                      fontSize="large"
                      sx={{ }}
                    />
                  </IconButton>
                </div>
                <div className="ShortTagBoxDiscover">
                  <div className="ShortDescDiscover">
                    <Typography 
                    variant="h3"
                    sx = {{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                      {props.projects.post_title}
                    </Typography>
                    <Typography>{props.projects.description}</Typography>
                    </div>
                    <div className="TagBoxDiscover">
                    {[
                      ...props.projects.lang_tag?.map((tag) => ({ tag })),
                      ...props.projects.framework_tag?.map((tag) => ({ tag })),
                      ...props.projects.size_tag?.map((tag) => ({ tag })),
                    ].map(({ tag}) => (
                      <div className="TagDiscover">
                        <Chip label={tag} sx={{ minWidth: 70 }} />
                      </div>
                    ))}
                  </div>
                    <div className="ProjectLinksDiscover">
                      <Button
                        color="primary"
                        aria-label="github link"
                        href={props.projects.project_link}
                        sx = {{
                          color: "black",
                          fontSize: "large",
                          gap: "10px",
                          width: "10rem",
                          m: "auto",
                        }}>
                        <GitHubIcon />
                        <Typography sx = {{
                          fontSize: "large",
                          border: "none",
                        }}>
                          Go To Github
                        </Typography>
                      </Button>
                      <IconButton 
                        color="primary"
                        aria-label="website link"
                        component="label"
                        sx = {{
                          color: "black",
                        }}>
                        <LaunchIcon />
                      </IconButton>
                      <Button
                      disableRipple
                      sx={{
                        backgroundColor: "#F68084",
                        width: "30%",
                        m: "auto",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#f59da0",
                          color: "white",
                        },
                      }}>
                      <Typography sx = {{
                          fontSize: "large",
                          color: "white",
                          border: "none",
                        }}>Contact Owner</Typography>
                       </Button>
                    </div>
                    
                  
                  
                </div>
              </div>
              <div className="BottomHolderDiscover">
                <p>{props.projects.long_description}</p>
              </div>
            </div>
            <IconButton sx={{}} onClick={handleNext}>
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <CommentSection comments={commentsAll} project={props.projects.id}/>
      </motion.div>
    </AnimatePresence>
  ) : (
    <div />
  );
}
