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
import { getPostsByUser } from '../../src/backend/queries/postQueries';
import { getAllComments } from '../../src/backend/queries/commentQueries';
import { createComment } from '../../src/backend/mutations/commentMutations';
import { ListPostsModelsQueryVariables, ModelIDInput } from "../API";
import { getImage } from "../backend/storage/s3";
import { TextField } from "@mui/material";
import { useFormik, Field } from "formik";
import * as yup from "yup";
// keep these functions here for top level backend connection
function handleBackendRemove() {
  console.log("removing project");
  // TODO make backend connection here
}

function handleBackendSave() {
  console.log("saving project");
  // TODO make backend connection here
}

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
  console.log(projectsAll)
  // set up state to keep track of which project is currently visible
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // define a function to handle clicking either save or remove project buttona
  const handleNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % projectsAll.length);
  };
  const handleBackProject = () => {
    if (currentProjectIndex === 0) {
      setCurrentProjectIndex(projectsAll.length - 1);
    } else
    setCurrentProjectIndex((currentProjectIndex - 1) % projectsAll.length);
    
  };
  console.log(projectsAll)
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
  
  return (
    <div className="CommentSection">
      <h2>Comments</h2>
      <CreateComment projectInfo = {props.project}/>
      {props.comments.map((comment) => (
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
      console.log(src)
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
      console.log(props.projects.id)
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

  const handleSave = () => {
    handleBackendSave();
  };

  const handleRemove = () => {
    handleBackendRemove();
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
                    <h1>{props.projects.post_title}</h1>
                    <p> {props.projects.description}</p>
                    <div className="ProjectLinksDiscover">
                      <IconButton
                        color="primary"
                        aria-label="github link"
                        href={props.projects.project_link}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton 
                        color="primary"
                        aria-label="website link"
                        component="label"
                      >
                        <LaunchIcon />
                      </IconButton>
                    </div>
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
