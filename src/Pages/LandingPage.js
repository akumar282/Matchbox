import { React, useState, useSyncExternalStore } from "react";
import "./CSS/LandingPage.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import illustration from "./../img/landing-img.svg"; // matchstick illustration
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import LandingPopupLogin from "../components/LandingPopupLogin";
import LandingPopupCreate from "../components/LandingPopupCreate";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor("#F40B27"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
    black: createColor("#000000"),
  },
});

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  
  function NoAccount() {
    setIsLoginOpen(false);
    setIsCreateOpen(true);
  }
  return (
    <div className="Starting">
      <LandingPopupLogin trigger={isLoginOpen} setTrigger={setIsLoginOpen} setCreateOpen = {NoAccount}/>
      <LandingPopupCreate trigger={isCreateOpen} setTrigger={setIsCreateOpen} />
      <div className="navHome">
        {/* logo */}
        <div className="logobox">
          <span className="logo">Matchbox</span>
          {/* about us link */}
        </div>
        <Stack className="LandingStack" direction="row">
          <Button
            sx={{
              color: "black",
              fontSize: "max(20px, 10px);",
            }}
          >
            {" "}
            About Us
          </Button>
          {/* sign up link */}
          <Button
            component={Link}
            to="/create-profile"
            sx={{
              color: "black",
              fontSize: "max(20px, 10px);",
            }}
          >
            {" "}
            Get Started
          </Button>
          {/* login button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6259b9",
              color: "white",
              fontSize: "max(20px, 10px);",
              "&:hover": {
                backgroundColor: "#716ab4",
              },
            }}
            onClick={() => setIsLoginOpen(true)}
          >
            {" "}
            Login
          </Button>
        </Stack>
      </div>
      <div className="BoxStack">
        <Stack
          className="textStack"
          direction="column"
          spacing={1}
          sx={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* landing title & description */}
          <p className="subtext"> Welcome to Matchbox </p>
          <p className="leadingtext"> Discover a project </p>
          <p className="leadingtext"> you'll love.</p>
          <p className="subtext">Get instantly matched with open source projects with a straight-forward process </p>
        </Stack>
        {/* matchstick illustration */}
        <img className="firestick" src={illustration}></img>
      </div>

      <Button onClick={() => setIsCreateOpen(true)}
        sx={{
          backgroundColor: "#6259b9",
          marginLeft: "5%",
          mt: "1%",
          width:"20%",
          height : "6vh",
          fontSize: "max(28px, 10px);",
          "&:hover": {
            backgroundColor: "#716ab4",
          },
        }}
        variant="contained"
      > Get Started </Button>
    </div>
  );
}
