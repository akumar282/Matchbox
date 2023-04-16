import React from "react";
import Navbar from "../components/NavBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { useEffect, useState } from "react";
import "./CSS/HomePage.css";
import { getPostsByUser, getPostById } from "../backend/queries/postQueries";
import { getUserById } from "../backend/queries/userQueries";
import { getImage } from "../backend/storage/s3";

export default function HomePage() {
  const navigate = useNavigate();
  const [homeState, setHomeState] = useState<any>("Home"); 
  const [HomeActive, setHomeActive] = useState<any>(true);
  const [SavedActive, setSavedActive] = useState<any>(false);
  const [projectsAll, setProjectsAll] = useState<any[]>([]);
  const [savedAll, setSavedAll] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getPostsByUser({
        filter: {
          userID: {
            eq: localStorage.getItem('uuid')!
          }
        }
      });
      const filteredProjects = result.data.listPostsModels.items.filter(x => x._deleted !== true);
      setProjectsAll(filteredProjects);
    };

    const usersSavedProjects = async () => {
      const savedProjects: any[] = [];
      const result = await getUserById(localStorage.getItem('uuid')!);
      if(result.data.getUsersModel.saved_posts) {
        for (const id of result.data.getUsersModel.saved_posts){
          const project = await getPostById(id);
          savedProjects.push(project.data.getPostsModel);
        }
      } else {
        console.log('no saved projects');
      }
      setSavedAll(savedProjects);
    }

    fetchProjects();
    usersSavedProjects();
  }, []);

  function handleCreate() {
    navigate("/create-project");
  }
  const CustomHomePage = (props: any) => {
    if (homeState === "Home") {
    return (
      <>
       <div className="CreateProject" onClick={() => handleCreate()}>
          <AddCircleOutlineIcon fontSize="large" className="Creaticon" />
          <h1 className="CreateText">Create Project</h1>
        </div>
        {projectsAll.map((tag) => (
          <CustomSavedProjects user={tag} key={tag.post_title} State = {homeState}/>
        ))}    
      </>
    );
  } else {
    // add code for saved projects
    if (savedAll.length > 0) {
      return (
        <>
          {savedAll.map((tag) => (
            <CustomSavedProjects user={tag} key={tag.post_title} State = {homeState}/>
          ))}    
        </>
      );
    } else {
    return ( 
      <h1 className="ProjectTitle">No Projects Saved</h1>
    );
    }
  }
}
  const CustomSwtich = (props: any) => {
    function handleHome() {
      setHomeState("Home");
      setHomeActive(true);
      setSavedActive(false);
    }
    function handleSaved() {
      setHomeState("Saved");
      setHomeActive(false);
      setSavedActive(true);
    }
    return (
      <div className="HomeSwitch">
      <button className={HomeActive ? "ActiveHomeButton" : "HomeButton"} onClick={() => handleHome()}>Home</button>
      <button className={SavedActive ? "ActiveHomeButton" : "HomeButton"} onClick={() => handleSaved()}>Saved</button>
     </div>
    );
  }
  return  (
    <div className="HomePage">
      <Navbar />
      <CustomSwtich/>
      <div className="HomeMain">
       <CustomHomePage />
      </div>
    </div>
  );
}

const CustomSavedProjects = (props: any) => {
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(props.user.image_link);
      setImageSrc(src);
    };

    fetchImage();
  }, [props.user.image_link]);
  function projectClick() {
    props.user.state = props.State;
    navigate("/project-overview/" + props.user.post_title, { state: props.user});
  }
  return (
    <div className="HomeSavedProjects" onClick={projectClick}>
      <div className="SavedImgCont">
        <img
          className="SavedImg"
          src={imageSrc}
          alt="Project Image"
        />
      </div>
      <h1 className="ProjectTitle">{props.user.post_title}</h1>
      <div className="SavedProjectInfo">
        <div className="ProjectShow">
          <IconButton href={props.user.project_link}>
            {" "}
            <GitHubIcon />{" "}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
