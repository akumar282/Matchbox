import { React, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logImg from '../img/Logo.png';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//import * as mut from '../backend/mutations'
import { username } from './CreateProfilePg'
import InvertLogoImg from '../img/InvertLogo.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "HTML/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_LIST = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Cloud Computing"}, {dev: "DevOps Engineering"}, {dev: "Security Engineering"}]; 
const INTEREST_LIST = [{inte: "Enviornmental"}, {inte: "Connectivity"}, {inte: "Communication"}, {inte: "Education"}, {inte: "Entertainment"}];
const SIZE_LIST = [{siz: "100 people >"}, {siz: "50 people >"}, {siz: "25 people >"}, {siz: "10 people>"}, {siz: "< 5 people"}];


const primTheme = createTheme({
    palette: {
      primary: {
        main: '#312C51'
      },
      secondary: {
        main: "#FOC38E"
      }
    },
  });

function CreateProjectPg(){

    const handleSubmit= (e) => {
        
        mut.createPost(username, name, desc, gith, image, projectLang)
        
    }
    const [projectLang, setProjectLang] = useState([]);
    const [name, setName] = useState("");
    const [gith, setGithub] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const handleCheckboxChange = (event) => {
        console.log("pass");
        console.log(projectLang);
        if (event.target.checked) {   // Add the new item to the list.
            setProjectLang(oldArray => [...oldArray, event.target.id]);
            console.log(event.target.id);

            //KEYWORD_PARAMS.push(setSelectedLang);
            // TODO add the parameter to the list

        } else {    // Remove the item form the list.
            let langToRemove = event.target.id;
            let updatedList = projectLang.filter(group => group !== langToRemove);
            setProjectLang(updatedList);

        }
        console.log(projectLang);
        
    };
    const nameTextHandle = (e) => {
        console.log("pass");
        console.log(`Typed => ${e.target.value}`)
       setName(e.target.value)
    };
    const gitTextHandle = (e) => {
        console.log("pass");
        console.log(`Typed => ${e.target.value}`)
       setGithub(e.target.value)
    };
    const descTextHandle = (e) => {
        console.log("pass");
        console.log(`Typed => ${e.target.value}`)
        setDesc(e.target.value)
    };
    const imageTexthandle = (e) => {
        console.log("pass");
        console.log(`Typed => ${e.target.value}`)
        setImage(e.target.value)
    };
    return(
        <div>
        <Box
        sx={{
          p:10,
          pb:0,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '2rem',
          fontWeight: '700',
        }}
      >
       </Box>
        <h1>Create Project Post</h1>
        
        <div>
          <ThemeProvider theme={primTheme}> 
              <AppBar color="primary"> 
                <Toolbar>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Arial;',
                      fontWeight: 700,
                      mr: 2,
                      letterSpacing: '.1rem',
                      color: 'inherit',
                      textDecoration: 'none',
                      }}>
                      <img src={InvertLogoImg} width={100} height={66} alt="passedImg"/>
                    </Typography>
                    <Stack direction = 'row' spacing = {2}>
                        <Button component = {Link} to = "../discover" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'Arial', fontWeight: 700, display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Discover</Button> 
                        <Button component = {Link} to = "../saved-project" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'Arial',fontWeight: 700,  display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Saved</Button> 
                        <Button component = {Link} to = "../create-project" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'Arial',fontWeight: 700,  display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Create</Button>   
                    </Stack> 
                </Toolbar>
            </AppBar>
          </ThemeProvider>
        </div>
            
            <Stack spacing={1} sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 5,

                
                }}>
            {/* TODO make the textfield stacked like the figma and make the textboxes longer by default */}
            <TextField
            required
            id="outlined-required"
            label="Project Name"
            variant="outlined"
            value = {name} 
            onChange = {nameTextHandle}
            />
            <TextField
            required
            id="outlined-required"
            label="Github Link"
            variant="outlined"
            value = {gith} 
            onChange = {gitTextHandle}
            />
           
            </Stack>

            {/* optional description box */}
            {/* TODO make the description box default size wider and longer and aligned with the other */}
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            justifyContent: 'center',
            }}>

            <Stack
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                border: 1,
                MaxHeight: 200,
             }}>
                <h2 align="center" >Language</h2>
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
                            sx={{m: 1}}
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
            </Box>
            <Stack
                spacing={1}
                sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 1,
                m: 0,
                mb: 1,
                mr: 5,
                bgcolor: 'background.paper',
                borderRadius: 1,
            
                }}
                >

            <TextField
            required
            id="outlined-required"
            variant="outlined"
            label="Image Link"
            value = {image}
            onChange = {imageTexthandle}
            />
            <TextField
            id="outlined-multiline-flexible"
            label="Description"
            variant="outlined"
            multiline
            value = {desc} 
            onChange = {descTextHandle}
            maxRows={4}/>
                
            </Stack>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 0,
                mb: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                justifyContent: 'center'
                }}
                >
                <Button  size="large" style={{
                borderRadius: 25,
                backgroundColor: "#F4D35E",
                fontSize: "18",
                fontWeight: "bold"
                }} 

                component = {Link} to = "../success"  
                color = 'primary'  
                variant="contained">Create
                </Button>
            {/* <Button color = 'primary'   component = {Link} to = "../sucess" variant="contained" onClick={handleSubmit}>Create</Button> */}
            </Box>
        </div>
    );
}


export default CreateProjectPg;