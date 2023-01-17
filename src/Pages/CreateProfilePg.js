import { React, useState } from 'react';
import logImg from '../img/Logo.png';
import InvertLogoImg from '../img/InvertLogo.svg';
// mui IMPORTS
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
//import LogoImg from '../img/Logo.svg';

// navvv
import NavBar from '../components/NavBar'

//import * as mut from '../backend/mutations'

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export let username
export let tags

const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "HTML/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_LIST = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Cloud Computing"}, {dev: "DevOps Engineering"}, {dev: "Security Engineering"}]; 
const INTEREST_LIST = [{inte: "Environmental"}, {inte: "Connectivity"}, {inte: "Communication"}, {inte: "Education"}, {inte: "Entertainment"}];
const SIZE_LIST = [{siz: "100 people >"}, {siz: "50 people >"}, {siz: "25 people >"}, {siz: "10 people>"}, {siz: "< 5 people"}];
//const KEYWORD_PARAMS = [];

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const primTheme = createTheme({
palette: {
    primary: {
    main: '#312C51'
    },
    secondary: {
    main: "#F4D35E"
    }
},
});
  

function CreateProfilePg(){
    
    // unused management for chips
    // const [chipVariant, setChipVariant] = useState("");
    
    // management for lang list
    const [selectedLang, setSelectedLang] = useState([]);   // state management for dropdown "Select Plan" filter
    const [textValue, setTextValue] = useState("");
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
    const handleTextFieldChange = (e) => {
        console.log("pass");
       console.log(`Typed => ${e.target.value}`)
       setTextValue(e.target.value)
    };
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
        console.log(selectedLang); // [] of all tags
        
        username = textValue
        tags = selectedLang

        mut.createUser(username, selectedLang)

    }

    return(
        
        <div>
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
 
 
 
        {/* <ThemeProvider theme={darkTheme}>
        </ThemeProvider> */}

            {/* <AppBar>
                <Toolbar>
                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'cursive;',
                    fontWeight: 700,
                    mr: 2,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}>
                        <img src={logImg} width={80} height={40} alt="passedImg"/>
                    </Typography>
                </Toolbar>
            </AppBar> */}
        <Container xp = {{mr: 2, display: 'flex',flexDirection: 'row', flexWrap: 'wrap', MaxHeight: 50}}>

            <h1>
                Matchbox
                
            </h1>
            <h1>
                Create Profile
            </h1>
            {/* <Typography   variant="h6" noWrap component="a" xp = {{ fontWeight: 'bold',m:10, mb:0,display: { xs: 'none', md: 'flex' } }}>
                Choose a Username 
            </Typography> */}
            <Stack  
                spacing= {2}
                direction = 'column'
                sx={{
                display: 'flex',
            }}>
            <Stack  
            spacing= {2}
            // justifyContent="center"
            direction='row'
            sx={{
            display: 'flex',
            
            }}>
                <TextField id="outlined-basic" label="Username" variant="outlined" value = {textValue} onChange = {handleTextFieldChange} />
                <TextField id="outlined-basic" label="Password" variant="outlined"/>
            </Stack>
           <TextField  id="outlined-basic" label="Github Account" variant="outlined"/>
            </Stack>
            </Container>
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
                    <ThemeProvider theme={primTheme}> 
                        <FormControlLabel  
                            key = {e.lang}
                            control = {<Checkbox
                            color="secondary"
                            sx=
                            {{
                            p:2
                            }}
                            id = {e.lang}
                            onChange = {handleCheckboxChange}
                            />}
                            label={e.lang} >
                        </FormControlLabel>
                    </ThemeProvider>
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
                    <ThemeProvider theme={primTheme}> 
                            <FormControlLabel   
                            key = {e.dev}   
                            control = {<Checkbox
                            sx={{m: 2}}
                            id = {e.dev}
                            color = "secondary"
                            onChange = {handleCheckboxChange}
                            />} 
                            
                            label={e.dev}   
                            />
                         </ThemeProvider>
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
                            <ThemeProvider theme={primTheme}> 
                        <FormControlLabel  
                            key = {e.inte}                 
                            control = {<Checkbox
                            sx={{m: 2}}
                            color="secondary"
                            id = {e.inte}
                            onChange = {handleCheckboxChange}
                        />} 
                        label={e.inte}
                       
                        />
                         </ThemeProvider>
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
                      <ThemeProvider theme={primTheme}> 
                        <FormControlLabel  
                            key = {e.siz}
                            control = {<Checkbox
                            sx={{m: 2}}
                            id = {e.siz}
                            color="secondary"
                            onChange = {handleCheckboxChange}
                            />}
                            label={e.siz} 
                            
                        />
                        </ThemeProvider>
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
                <Button  size="large" style={{
                borderRadius: 25,
                backgroundColor: "#F4D35E",
                fontSize: "18",
                fontWeight: "bold"
                }} 

                component = {Link} to = "../discover"
                color = 'primary'  
                variant="contained"
                onClick={handleSubmit}>
                Submit
                </Button>


            </Box>

            
        </div>
    );
}

export default CreateProfilePg;