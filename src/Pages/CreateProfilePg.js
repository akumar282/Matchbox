import { React, useState, useSyncExternalStore } from 'react';

// mui IMPORTS
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "HTML/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_LIST = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Cloud Computing"}, {dev: "DevOps Engineering"}, {dev: "Security Engineering"}]; 
const INTEREST_LIST = [{inte: "Enviornmental"}, {inte: "Connectivity"}, {inte: "Communication"}, {inte: "Education"}, {inte: "Entertainment"}];
const SIZE_LIST = [{siz: "100 people >"}, {siz: "50 people >"}, {siz: "25 people >"}, {siz: "10 people>"}, {siz: "< 5 people"}];
//const KEYWORD_PARAMS = [];
function CreateProfilePg(){
    // unused management for chips
    // const [chipVariant, setChipVariant] = useState("");
    
    // management for lang list
    const [selectedLang, setSelectedLang] = useState([]);   // state management for dropdown "Select Plan" filter
   
    // unused handler for chips TODO convert to chips later
    /*
    const handleChipChange = (event) => {
        if (event.target.checked){
            setChipVariant("filled");
            setSelectedLang(oldArray => [...oldArray, event.target.id]);
        } else {
            let langToRemove = event.target.id;
            let updatedList = selectedLang.filter(group => group !== langToRemove);
            //langToRemove(updatedList);
            setChipVariant("");
        }        
    }*/

    // handler for checkbox
    const handleCheckboxChange = (event) => {
        console.log("pass");
        console.log(selectedLang);
        if (event.target.checked) {   // Add the new item to the list.
            setSelectedLang(oldArray => [...oldArray, event.target.id]);
            console.log(event.target.id);

            //KEYWORD_PARAMS.push(setSelectedLang);
            // TODO add the parameter to the list

        } else {    // Remove the item form the list.
            let langToRemove = event.target.id;
            let updatedList = selectedLang.filter(group => group !== langToRemove);
            setSelectedLang(updatedList);

        }
        console.log(selectedLang);
        
    };

    const handleSubmit = (event) => {
        console.log("button submitted");
        console.log(selectedLang);        
    }

    return(
        <div>
            <h1>
                Matchbox
            </h1>
            <h1>
                Create Profile
            </h1>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            justifyContent: 'center',
            }}
            >

            <Stack
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                border: 1,
                MaxHeight: 200,
             }}
             
            >
                <h2 align="center">Language</h2>
                <FormGroup>
                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    m: 1,
                    bgcolor: 'background.paper',
                    maxWidth: 300,
                    borderRadius: 1,
                    }}
                >
                    {LANG_LIST.map((e)=> 
                    
                        <FormControlLabel  
                            key = {e.lang}
                            control = {<Checkbox
                            sx=
                            {{
                            p:2
                            }}
                            id = {e.lang}
                            onChange = {handleCheckboxChange}
                            />}
                            label={e.lang} 
                        />
                        )}
                        </Box>
                </FormGroup>
            </Stack>
            <Stack     
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                border: 1,
                MaxHeight: 200,
            }}
            >
            <h2 sx={{ borderBottom: 1 }}align = "center">Development Type</h2>
            <FormGroup>
            <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            maxWidth: 500,
            borderRadius: 1,
            }}
      >
                    {DEV_LIST.map((e)=> 
                            <FormControlLabel   
                            key = {e.dev}   
                            control = {<Checkbox
                            sx={{m: 2}}
                            id = {e.dev}
                            onChange = {handleCheckboxChange}
                            />} 
                            
                            label={e.dev}   
                            />
                            )}
                </Box> 
                </FormGroup>
                </Stack>

                <Stack 
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                border: 1,
                pb: 0,
            }}>
                <h2 sx = {{pb: 0,}} align = 'center'>Interest Type</h2>
                <FormGroup>
                <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            maxWidth: 190,
            borderRadius: 1,
            }}>
                    {INTEREST_LIST.map((e)=>{
                        return (
                        <FormControlLabel  
                            key = {e.inte}                 
                            control = {<Checkbox
                            sx={{m: 2}}
                            id = {e.inte}
                            onChange = {handleCheckboxChange}
                        />} 
                        label={e.inte}
                       
                        />
                        )})}
                </Box>
                </FormGroup>
                </Stack>
                <Stack 
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                border: 1,
                
            }}>
               <h2 align="center"> Size of Project</h2>
               <FormGroup>
               <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            maxWidth: 200,
            borderRadius: 1,
            justifiyContent: 'space-evenly',
            }}>
                    {SIZE_LIST.map((e)=> 
                        <FormControlLabel  
                            key = {e.siz}
                            control = {<Checkbox
                            sx={{m: 2}}
                            id = {e.siz}
                            onChange = {handleCheckboxChange}
                            />}
                            label={e.siz} 
                            
                        />
                        )}
                        </Box>
                </FormGroup>
                </Stack>
               {/* /* <Stack direction="row" spacing={1}>
                    <Chip key = "chip1" label="Clickable" onClick={handleChipChange} />
                    <Chip key = "chip2" label="Clickable" variant={chipVariant} onClick={handleChipChange} />
                </Stack> */}
            </Box>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                justifyContent: 'center'
                }}
                >
                <Button variant="contained" onClick={handleSubmit}>Contained</Button>


            </Box>

            
        </div>
    );
}

export default CreateProfilePg;