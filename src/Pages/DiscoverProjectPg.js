import { React, useState, useSyncExternalStore } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import projImg from '../img/farquad.png';
import logImg from '../img/Logo.png';

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

const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "HTML/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_LIST = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Cloud Computing"}, {dev: "DevOps Engineering"}, {dev: "Security Engineering"}]; 
const INTEREST_LIST = [{inte: "Enviornmental"}, {inte: "Connectivity"}, {inte: "Communication"}, {inte: "Education"}, {inte: "Entertainment"}];
const SIZE_LIST = [{siz: "100 people >"}, {siz: "50 people >"}, {siz: "25 people >"}, {siz: "10 people>"}, {siz: "< 5 people"}];
const DES_TEMP = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex ante, auctor sit amet placerat a, faucibus nec ligula. Donec tincidunt ac ante in dignissim. Suspendisse vitae diam vitae metus tempus imperdiet. Maecenas nec rhoncus felis. Nullam finibus est ut viverra tincidunt. Nulla eu libero vel dolor aliquam dictum ut id urna. Maecenas posuere vestibulum quam sed cursus. Suspendisse molestie convallis dictum. Vivamus maximus molestie nunc, a fringilla augue pharetra a. In nec augue in justo ullamcorper placerat. Integer sagittis dui eget libero laoreet vehicula."
function DiscoverProjectPg(){
    const handleSubmit = (event) => {
        console.log("button submitted");
        console.log("fdhakfjdakl;fjd");        
    }
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
        Discover
      </Box>
            <AppBar>
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
                    <Box 
                    sx = {{
                    mt:1,
                    }}>
                    Matchbox
                    </Box>
                    </Typography>
                <Stack direction = 'row' spacing = {2}>
                    <Button component = {Link} to = "../saved-project" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'cursive;',fontWeight: 700, mr: 2, mt:1, display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Saved Projects</Button> 
                    <Button component = {Link} to = "../create-project" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'cursive;',fontWeight: 700, mr: 2, mt:1, display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Create Projects</Button>   
            </Stack> 
                </Toolbar>
            </AppBar>
            
            <Stack spacing={2} sx={{display: "flex", flexDirection: 'column',border: 1,}}>
            <Stack spacing={2} sx={{display: "flex", flexDirection: 'row', border: 1,}}>
                
            <Container sx = {{
                display: 'flex',
                flexWrap: 'wrap',
                MaxWidth: 1200, 
                MaxHeight: 800,
                }}>
                {/* add a containter for the image and description */}
                <img src={projImg} width={250} height={250} alt="passedImg"/>
                
                <Box
                spacing={1}
                sx={{
                display: 'flex',
                flexDirection: 'row',
                }}>
                <h2 align = "center">Description</h2>
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
            <Button style={{maxWidth: '100px', maxHeight: '100px', l :30}} align = "justify" variant="contained" onClick={handleSubmit}>Visit Github</Button>
            </Stack>
                </Container>
            </Stack>
            
            </Stack>
            
            <TextField
                disabled
                id="outlined-textarea"
                label={DES_TEMP}
                placeholder="Placeholder"
                multiline
                />     
                 
        </div>
    );
}

export default DiscoverProjectPg;