import { React } from 'react';
import Box from '@mui/material/Box';
import projImg from '../img/farquad.png';
import logImg from '../img/Logo.png';

import NavBar from '../components/NavBar'

import InvertLogoImg from '../img/InvertLogo.svg';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// MUI imports
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
//import * as query from '../backend/queries'
import { tags } from './CreateProfilePg'

const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "HTML/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_LIST = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Cloud Computing"}, {dev: "DevOps Engineering"}, {dev: "Security Engineering"}]; 
const INTEREST_LIST = [{inte: "Environmental"}, {inte: "Connectivity"}, {inte: "Communication"}, {inte: "Education"}, {inte: "Entertainment"}];
const SIZE_LIST = [{siz: "100 people >"}, {siz: "50 people >"}, {siz: "25 people >"}, {siz: "10 people>"}, {siz: "< 5 people"}];
const DES_TEMP = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex ante, auctor sit amet placerat a, faucibus nec ligula. Donec tincidunt ac ante in dignissim. Suspendisse vitae diam vitae metus tempus imperdiet. Maecenas nec rhoncus felis. Nullam finibus est ut viverra tincidunt. Nulla eu libero vel dolor aliquam dictum ut id urna. Maecenas posuere vestibulum quam sed cursus. Suspendisse molestie convallis dictum. Vivamus maximus molestie nunc, a fringilla augue pharetra a. In nec augue in justo ullamcorper placerat. Integer sagittis dui eget libero laoreet vehicula."
function DiscoverProjectPg(){

    const projects = query.getPostsByTags(tags)

    const handleSubmit = (event) => {

        const next = projects.shift()
        projects.push(next)

        /*
          populate fields from next

          name = next.name etc..

        */

        console.log("button submitted");
        console.log("fdhakfjdakl;fjd");        
    }

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

    return(
        <div>
           <div>
            <Box sx={{ p: 4}} >
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
          </Box>
        </div>
        <Box sx={{ m: 2}} >
            <Stack spacing={2} sx={{display: "flex", flexDirection: 'column'}}>
            <Stack spacing={2} sx={{display: "flex", flexDirection: 'row'}}>
            <Box sx={{ m: 2}} >
              <img src="https://static.javatpoint.com/tutorial/tensorflow/images/tensorflow-tutorial.png" width={500} height={500} alt="passedImg"/>
            </Box>
            <Box align = 'left' sx = {{
                display: 'flex',
                flexDirection: 'column'
                }}>
                {/* add a containter for the image and description */}
                
                <h3 align = "center">Project Info</h3>
                <Box
                spacing={1}
                sx={{
                display: 'flex',
                flexDirection: 'row',
                }}>
                
                <Stack  spacing={1} sx={{p: 1, display: "flex", flexDirection: 'column'}}>
                {LANG_LIST.map((e)=> 
                            <Chip label={e.lang} 
                            variant="outlined" />
                            )}  
                </Stack>
                <Stack spacing={1} sx={{p: 1, display: "flex", flexDirection: 'column'}}>
                {DEV_LIST.map((e)=> 
                            <Chip label={e.dev} 
                            variant="outlined" />
                            )}  
                </Stack>
                <Stack spacing={1} sx={{p: 1, display: "flex", flexDirection: 'column'}}>
                {INTEREST_LIST.map((e)=> 
                            <Chip label={e.inte} 
                            variant="outlined" />
                            )} 
                </Stack>
                <Stack spacing={1} sx={{p: 1, display: "flex", flexDirection: 'column'}}>
                {SIZE_LIST.map((e)=> 
                            <Chip label={e.siz} 
                            variant="outlined" />
                            )} 
                </Stack>
                </Box>
            <Stack spacing={1} sx={{p: 1, display: "flex", flexDirection: 'column'}}>
          
            </Stack>
          </Box>
        </Stack>
            
      </Stack>
      <Stack spacing={2} sx={{ width: '15%', display: "flex", flexDirection: 'column', justifyContent: 'start'}}>
      <Button  size="large" style={{
                    borderRadius: 25,
                    backgroundColor: "#F4D35E",
                    fontSize: "18",
                    fontWeight: "bold"
                }} 
                
                component = {Link} to = "../create-profile"  
                color = 'primary'  
                onClick={handleSubmit}
                variant="contained">Project Github
                </Button>
        </Stack>
        <Stack spacing={2} sx={{ width: '90%', height: '3em', display: "flex", flexDirection: 'column', justifyContent: 'start'}}>
            <h3> Description </h3>
            <TextField
                disabled
                id="outlined-textarea"
                label={DES_TEMP}
                placeholder="Placeholder"
                multiline
                />   
                </Stack>
          </Box>   
        </div>
    );
}

export default DiscoverProjectPg;
