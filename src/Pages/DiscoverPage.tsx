import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./CSS/DiscoverPage.css";

import { motion, AnimatePresence } from "framer-motion";
// MUI imports
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getPostsByUser } from '../../src/backend/queries/postQueries';
import { ModelIDInput } from "../API";
// keep these functions here for top level backend connection
function handleBackendRemove() {
  console.log("removing project");
  // TODO make backend connection here
}

function handleBackendSave() {
  console.log("saving project");
  // TODO make backend connection here
}

async function getProjects(uuid: string): Promise<any[]> {
  const result = await getPostsByUser({ userID: uuid as ModelIDInput })
  return result.data.listPostsModels.items.filter(x => x._deleted !== true)
}

const projectsAll = await getProjects(localStorage.getItem('uuid')!)

export default function DiscoverPage() {
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

function DiscoverComponent(props: any) {
  // remake objects
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
                    src={props.projects.image_link}
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
                <p>{props.projects.description}</p>
              </div>
            </div>
            <IconButton sx={{}} onClick={handleNext}>
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <div />
  );
}
