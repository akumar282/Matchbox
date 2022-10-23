import logImg from '../img/Logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function SavedProjects() {


    return (
        <div>
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
                    <Button component = {Link} to = "../discover" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'cursive;',fontWeight: 700, mr: 2, mt:1, display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Find Projects</Button>
                    <Button component = {Link} to = "../create-project" color = 'inherit'  sx= {{letterSpacing: '.1rem', fontFamily: 'cursive;',fontWeight: 700, mr: 2, mt:1, display: { xs: 'none', md: 'flex' }, fontSize:15, }}> Create Projects</Button>    
            </Stack> 
                </Toolbar>
            </AppBar>
        </div>
    )



}