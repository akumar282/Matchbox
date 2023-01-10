import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./LandingPopup.css";

export default function LandingPopupLogin(props) {
  const [name, setName] = React.useState("");
  const [pName, setPName] = React.useState("");
  const rip = "sheesh";
  function handleClose() {
    setName("");
    setPName("");
    props.setTrigger(false);
  }
  function handleSubmit() {
    props.setTrigger(false);
    console.log("Name: " + name + " Password: " + pName);
  }
  return props.trigger ? (
    // this is the main container for the popup consider this like divs  dad
    <Dialog open={props.trigger} maxWidth="sm" fullWidth="true">
      {/* as it said Dialog has its own form of objects 
            you are going to have to search up the documentation for them*/}
      <DialogTitle
        id="dialog-title"
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
        <form className="LoginForm">
          <TextField
            label="Username/Email"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            value={pName}
            onChange={(e) => setPName(e.target.value)}
            required
          />
        </form>
        <div className="popupControls">
          <Button
            sx={{
              width: "10px",
              height: "40px",
            }}
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            component={Link}
            to="/create-profile"
            sx={{
              width: "10px",
              height: "40px",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    ""
  );
}
