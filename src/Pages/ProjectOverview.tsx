import { Chip, IconButton, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getImage } from "../backend/storage/s3";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import { getAllComments } from '../../src/backend/queries/commentQueries';
import { createComment } from '../../src/backend/mutations/commentMutations';

export default function ProjectOverview() {
  const [imageSrc, setImageSrc] = useState("");
  const [commentsAll, setCommentsAll] = useState([]);
  const location = useLocation();
  const project = location.state;
  const handleSave = () => {};

  const handleRemove = () => {};
  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(project.image_link);
      setImageSrc(src);
    };

    fetchImage();
    const fetchComments = async () => {
       
        const rawComments = await getAllComments({
        filter: {
          postID: {
            eq: project.id
          }
        }
      })
        const filteredComments = rawComments.data.listCommentModels.items.filter(x => x._deleted !== true);
        setCommentsAll(filteredComments);
      }
      fetchComments();
  }, []);
  return (
    <div className="ProjectOverview">
      <h1>Project Overview</h1>
      <IconButton onClick={() => window.history.back()}>
        <ArrowBackIcon
          fontSize="large"
          sx={{
            position: "absolute",
            left: "-30vw",
          }}
        />
      </IconButton>
      <div className="DiscoverHolder">
        <div className="DHolder">
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
                  <CancelIcon fontSize="large" sx={{}} />
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
                  <BookmarkBorderIcon fontSize="large" sx={{}} />
                </IconButton>
              </div>
              <div className="ShortTagBoxDiscover">
                <div className="ShortDescDiscover">
                  <h1>{project.post_title}</h1>
                  <p> {project.description}</p>
                  <div className="ProjectLinksDiscover">
                    <IconButton
                      color="primary"
                      aria-label="github link"
                      href={project.project_link}
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
                    ...project.lang_tag?.map((tag) => ({ tag })),
                    ...project.framework_tag?.map((tag) => ({ tag })),
                    ...project.size_tag?.map((tag) => ({ tag })),
                  ].map(({ tag }) => (
                    <div className="TagDiscover">
                      <Chip label={tag} sx={{ minWidth: 70 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="BottomHolderDiscover">
              <p>{project.long_description}</p>
            </div>
          </div>
        </div>
      </div>
      <CommentSection comments = {commentsAll} project = {project.id}/>
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
        console.log(props);
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