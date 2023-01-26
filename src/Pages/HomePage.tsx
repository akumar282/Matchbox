import React from "react";
import Navbar from "../components/NavBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { Link, useHref, useNavigate } from "react-router-dom";
import "./CSS/HomePage.css";
const project = {
  name: "Project 1",
  image: "/Strom.jpg",
  githubLink: "https://github.com/mohazahid/Tatos/wiki",
};
const project2 = {
  name: "Project 2",
  image: "/Strom.jpg",
  githubLink: "https://github.com/mohazahid/Tatos/wiki",
};
const arr = [
  project,
  project2,
  project,
  project,
  project,
  project,
  project,
  project,
  project,
  project,
];
export default function HomePage() {
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
        </div>
        {arr.map((tag) => (
          <CustomSavedProjects user={tag} key={tag.name} />
        ))}
      </div>
    </div>
  );
}
const CustomSavedProjects = (props: {
  user: { name: string; image: string; githubLink: string };
}) => {
  return (
    <div className="HomeSavedProjects">
      <div className="SavedImgCont">
        <img
          className="SavedImg"
          src={"images/" + props.user.image}
          alt="Project Image"
        />
      </div>
      <h1 className="ProjectTitle">{props.user.name}</h1>
      <div className="SavedProjectInfo">
        <div className="ProjectShow">
          <IconButton href={props.user.githubLink}>
            {" "}
            <GitHubIcon />{" "}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
