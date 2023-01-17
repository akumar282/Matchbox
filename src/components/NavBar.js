import { React, useState } from 'react';
//import LogoImg from '../img/Logo.svg';
import InvertLogoImg from '../img/InvertLogo.svg';
// nav
import { Link } from 'react-router-dom';

// MUI 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { ThemeProvider, createTheme } from '@mui/material/styles';

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


function NavBar(){
    return(
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
    );
}
export default NavBar;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function NavBar() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };



//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
