import React from "react";
import Navbar from "../components/NavBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Button } from "@mui/material";
import { Link, useHref, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext, DispatchContext } from '../App';
import { useEffect, useState } from "react";
import "./CSS/HomePage.css";
import { getPostsByUser } from "../backend/queries/postQueries";
import { ListPostsModelsQueryVariables, ModelIDInput } from "../API";
import { Auth } from 'aws-amplify';
import { getImage } from "../backend/storage/s3";

async function getProjects(uuid: string): Promise<any[]> {
  const fil: ListPostsModelsQueryVariables = {
    filter: {
      userID: {
        eq: uuid
      }
    }
  }
  const result = await getPostsByUser(fil)
  return result.data.listPostsModels.items.filter(x => x._deleted !== true)
}

const projectsAll = await getProjects(localStorage.getItem('uuid')!)

export default function HomePage() {
  const Authstate = useContext(AuthContext);
  const Authdispatch = useContext(DispatchContext);
  const useGlobalState = () => [
    Authstate,
    Authdispatch
  ];
  const [State, Dispatch] = useGlobalState();
  const navigate = useNavigate();
  function handleCreate() {
    navigate("/create-project");
  }

  return (
    <div className="HomePage">
      <Navbar />
      <div className="HomeMain">
        <div className="CreateProject" onClick={() =>  handleCreate()}>
          <AddCircleOutlineIcon fontSize="large" className="Creaticon" />
          <h1 className="CreateText">Create Project</h1>
        </div>
        {projectsAll.map((tag) => (
          <CustomSavedProjects user={tag} key={tag.post_title} />
        ))}
        
      </div>
    </div>
  );
}

const CustomSavedProjects = (props: any) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(props.user.image_link);
      setImageSrc(src);
    };

    fetchImage();
  }, [props.user.image_link]);

  return (
    <div className="HomeSavedProjects">
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
