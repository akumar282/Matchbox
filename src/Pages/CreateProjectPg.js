import { React, useState, useSyncExternalStore } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreateProjectPg(){

    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // }

    return(
        <div>
            <h1>
                Matchbox
            </h1>
            <h2>
                Create Project
            </h2>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            {/* TODO make the textfield stacked like the figma and make the textboxes longer by default */}
            <TextField
            required
            id="outlined-required"
            label="Project Name"
            />
            <TextField
            required
            id="outlined-required"
            label="Github Link"
            />
            </Box>

            {/* optional description box */}
            {/* TODO make the description box default size wider and longer and aligned with the other */}
            <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            maxRows={4}

            />


        </div>
    );
}


export default CreateProjectPg;