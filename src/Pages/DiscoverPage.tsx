import React, { useState } from "react";
import Navbar from "../components/NavBar";

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
import "./CSS/DiscoverPage.css";

function handleRemove() {
  console.log("removing project");
  // TODO make backend connection here
}

function handleSave() {
  console.log("saving project");
  // TODO make backend connection here
}


export default function DiscoverPage() {
  return (
    <div className="DiscoverPage">
      <Navbar />
      {Projects.map((project) => (
        <DiscoverComponent projects={project} key={project.title} />
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
}) {
  return (
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
            <CancelIcon fontSize="large" />
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
            <BookmarkBorderIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="ShortTagBoxDiscover">
          <div className="ShortDescDiscover">
            <h1>{props.projects.title}</h1>
            {/* <h4> Short Description</h4> */}
            <p> {props.projects.Shortdescription}</p>
            <div className="ProjectLinksDiscover">
              <IconButton
                color="primary"
                aria-label="github link"
                href={props.projects.githubLink}
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
  );
}
