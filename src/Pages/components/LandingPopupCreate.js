import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import React, { useState } from "react";
  import "./LandingCreatePopup.css";
  import HighlightOffIcon from '@mui/icons-material/HighlightOff';
  
  export default function LandingPopupCreate(props) {
    const [Fname, SetFname] = React.useState(""); //FirstName
    const [Lname, SetLname] = React.useState(""); //LastName
    const [Uname, SetUname] = React.useState(""); //Username
    const [Pname, SetPname] = React.useState(""); //password
    const [Ename, SetEname] = React.useState(""); //email

  function handleClose() {
    SetFname("");
    SetPname("");
    props.setTrigger(false);
  }
  function handleSubmit() {
    props.setTrigger(false);
    console.log(" Password: " + Pname);
  }
  return props.trigger ? (
    // this is the main container for the popup consider this like divs  dad
    <Dialog open={props.trigger} maxWidth="md" fullWidth="true">
      {/* as it said Dialog has its own form of objects 
              you are going to have to search up the documentation for them*/}
               <IconButton 
              sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifySelf: "right",
                alignSelf: "right",
                marginLeft: "auto",
                marginRight: "1%",
                marginTop: "1%",
              }}
              variant="contained"
              onClick={handleClose}
            >
              <HighlightOffIcon fontSize="large"/>
            </IconButton>
        <DialogTitle
          id="dialog-create"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {"Register Your Account"}
        </DialogTitle>
        {/* consider this a div */}
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form className="CreateForm">
          <TextField
            className="Fname"
            label="First Name"
            variant="outlined"
            value={Fname}
            onChange={(e) => SetFname(e.target.value)}
            required
          />
          <TextField
            className="Lname"
            label="Last Name"
            variant="outlined"
            value={Lname}
            onChange={(e) => SetLname(e.target.value)}
            required
          />
          <TextField
            className="Uname"
            label="Username"
            variant="outlined"
            value={Uname}
            onChange={(e) => SetUname(e.target.value)}
            required
          />
          <TextField
            className="Ename"
            label="Email"
            variant="outlined"
            value={Ename}
            onChange={(e) => SetEname(e.target.value)}
            required
          />
          <TextField
            className="Pname"
            label="Password"
            variant="outlined"
            value={Pname}
            onChange={(e) => SetPname(e.target.value)}
            required
          />
          <TextField
            className="Gitlink"
            label="Github"
            variant="outlined"
            value={Gitlink}
            onChange={(e) => SetGitlink(e.target.value)}

          />
          </form>
          <div className="popupControls">
            <Button
              component={Link}
              to="/create-prefrences"
              sx={{
                width: "10px",
                height: "40px",
              }}
              variant="contained"
              onClick={handleSubmit}
            > Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    ) : (
      ""
    );
  }
  