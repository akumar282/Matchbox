import React, { useState } from "react";

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
        <IconButton color="primary" aria-label="upload picture" component="label">
            {/* <input hidden accept="image/*" type="file" /> */}
            <GitHubIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
            {/* <input hidden accept="image/*" type="file" /> */}
            <LaunchIcon />
        </IconButton>
    </CardActions>
  </React.Fragment>
);

const ImgCard = (
    <React.Fragment>
      <CardContent>
       image
      </CardContent>
      <CardActions>
        <IconButton color="primary" aria-label="upload picture" component="label">
            {/* <input hidden accept="image/*" type="file" /> */}
            <CancelIcon/>
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
            {/* <input hidden accept="image/*" type="file" /> */}
            <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
    </React.Fragment>
  );


export default function DiscoverPage() {
    return (
        <div>
            <span className='logo'>Matchbox</span>
            <Stack direction="row" spacing={3}>
                <Box sx={{ maxWidth: 500}}>
                    <Card variant="outlined">{ImgCard}</Card>
                </Box>
                <Box sx={{ maxWidth: 800 }}>
                    <Card variant="outlined">{DesriptCard}</Card>
                </Box>
            </Stack>
            <h2>Project Name</h2>
            <p>(Detailed Description) Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu</p>
        </div>
    );
}  