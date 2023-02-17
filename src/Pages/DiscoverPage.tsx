import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { motion, useScroll } from "framer-motion"
import Projects from "./JsonTestDiscover";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { autocompleteClasses, Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
// import { white } from '@mui/material/colors';
import "./CSS/DiscoverPage.css";

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
  // set up state to keep track of which project is currently visible
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // define a function to handle clicking either save or remove project buttona
  const handleNextProject = () => {
    setCurrentProjectIndex((currentProjectIndex + 1) % Projects.length);
  };

  return (
    <div className="DiscoverPage">
      <Navbar />
      {Projects.map((project, index) => (
        <DiscoverComponent 
          projects={project} 
          key={project.title}
          isVisible={index === currentProjectIndex}
          onNextProject={handleNextProject}
          />
      ))}
    </div>
  );
}

function DiscoverComponent(props: {
  projects: {
    title: string;
    img: string;
    Shortdescription: string;
    Longdescription: string;
    Lang: string[];
    Frame: string[];
    Tools: string[];
    githubLink: string;
  };
  isVisible: boolean;
  onNextProject: () => void;
}) {
  // remake objects
  const { projects, isVisible, onNextProject } = props;

  // framer motion 
  const slideRight = {
    x: 1000,
    opacity: 0,
    transition: {
      duration: 20,
    }
  };

  const handleSave = () => {   
    handleBackendSave();
    onNextProject();
  };

  const handleRemove = () => {   
    handleBackendRemove();
    onNextProject();
  };

  return isVisible ? (
  <motion.div initial={{opacity: 0, x: -1000}} animate={{opacity: 1, x: 0}} exit={slideRight}>
    <div className="DiscoverMain">
      <div className="topRowDiscover">
        <div className="DiscoverimgBox">
          <img
            className="DiscoverImg"
            src={"images/" + props.projects.img}
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
            <CancelIcon fontSize="large" sx={{ color: 'white'}}/>
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
            <BookmarkBorderIcon fontSize="large" sx={{ color: 'white'}}/>
          </IconButton>
        </div>
        <div className="ShortTagBoxDiscover">
          <div className="ShortDescDiscover">
            <h1>{props.projects.title}</h1>
            <p> {props.projects.Shortdescription}</p>
            <div className="ProjectLinksDiscover">
              <IconButton
                color="primary"
                aria-label="github link"
                href={props.projects.githubLink}
              >
                <GitHubIcon/>
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
            <div className="TagDiscover">
              {props.projects.Lang.map((tag) => (
                <Chip label={tag} sx={{minWidth: 80}}/>
              ))}
            </div>
            <div className="TagDiscover">
              {props.projects.Frame.map((tag) => (
                <Chip label={tag} sx={{minWidth: 70}}/>
              ))}
            </div>
            <div className="TagDiscover">
              {props.projects.Tools.map((tag) => (
                <Chip label={tag} sx={{minWidth: 70}}/>
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="BottomHolderDiscover">
        <p>{props.projects.Longdescription}</p>
      </div>
    </div>
   </motion.div>
  ):(<div/>);
}
