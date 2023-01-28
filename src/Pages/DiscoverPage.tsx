import React, { useState } from "react";
import Navbar from "../components/NavBar";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Stack } from "@mui/material";
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CancelIcon from '@mui/icons-material/Cancel';
import "./CSS/DiscoverPage.css";

function handleRemove(){
    console.log("removing project");
    // TODO make backend connection here
}

function handleSave(){
    console.log("saving project");
    // TODO make backend connection here
}

function ImgCard() {
    return (
    <Card variant="outlined" sx = {{
        outline: 'auto',
        width: "40rem",
    }}>
      <CardContent>
       image
      </CardContent>
      <CardActions>
        {/* remove project button */}
        <IconButton color="primary" aria-label="remove project" component="label" onClick={handleRemove}>
            <CancelIcon/>
        </IconButton>
        {/* save project button */}
        <IconButton color="primary" aria-label="save project" component="label" onClick={handleSave}>
            <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
    );
}



const DesriptCard = (
  <React.Fragment>
    <CardContent>
        {/* short description */}
        <p>
        (Short description) Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
        </p>
        {/* tags */}
        <Chip label="Python" />
        <Chip label="Java" />
        <Chip label="C++" />
        
    </CardContent>
    <CardActions>
        {/* TODO: potential issue with link routing */}
        {/* project github link */}
        <a href="https://github.com/">    
            <IconButton color="primary" aria-label="github link" component="label">
                <GitHubIcon />
            </IconButton>
        </a>
        {/* prject website link */}
        <a href="https://google.com/">
            <IconButton color="primary" aria-label="website link" component="label">
                <LaunchIcon />
            </IconButton>
        </a>
    </CardActions>
  </React.Fragment>
);



const longDescription = (
    <React.Fragment>
        <h2>Project Name</h2>
        <p>(Detailed Description) Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu</p>
    </React.Fragment>
);

export default function DiscoverPage() {
    return (
        <div className="DiscoverPage">
            <Navbar/>
            <div className="DiscoverMain">
            <span className='logo'>Matchbox</span>
            <Stack direction="row" spacing={3} mb = "1rem">
                <ImgCard/>
                <Box sx={{ maxWidth: 800 }}>
                    <Card variant="outlined">{DesriptCard}</Card>
                </Box>
            </Stack>
            <Box sx={{ maxWidth: 1200 }}>
            <Card variant="outlined">{longDescription}</Card>
            </Box>
         </div>
        </div>
    );
}  