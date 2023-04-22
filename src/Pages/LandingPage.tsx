import * as React from "react";
import "./CSS/LandingPage.css";
import illustration from "../img/landing-img.svg";
import awsconfig from "../aws-exports";
import { Amplify } from "aws-amplify";
import { CreateNewsletterEmailModelPayload } from "../backend/types";
import { createNewsletterEmail } from "../../src/backend/mutations/newsletterMutations";
import ConfirmationPopup from "../components/ConfirmationPopup";
import LandingPopupLogin from "../components/LandingPopupLogin";
import LandingPopupConfirm from "../components/LandingPopupConfirm";
import LandingPopupCreate from "../components/LandingPopupCreate";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import * as yup from "yup";
import Aos from "aos";
import "aos/dist/aos.css";
import { about } from "./LandingPageData";
import { Link } from "react-router-dom";
import { useContext } from "react";
Amplify.configure(awsconfig);
const payload: CreateNewsletterEmailModelPayload = {
  input: {
    email: "",
  },
};
const globalAuthState = {
  isAuthenticated: "false",
  username: null,
  email: null,
  token: null,
  uuid: null,
  isLoggedin: "false",
  firstTime: "false",
  currentProjectindex: "0",
};
function setLocalStorage() {
  if (!localStorage.getItem("email")) {
    window.localStorage.setItem("email", globalAuthState.email);
  }
  if (!localStorage.getItem("isAuthenticated")) {
    window.localStorage.setItem("isLoggedin", globalAuthState.isLoggedin);
  }
  if (!localStorage.getItem("firstTime")) {
    window.localStorage.setItem("firstTime", globalAuthState.firstTime);
  }
  if (!localStorage.getItem("uuid")) {
    window.localStorage.setItem("uuid", globalAuthState.uuid);
  }
  if (!localStorage.getItem("token")) {
    window.localStorage.setItem("token", globalAuthState.token);
  }
  if (!localStorage.getItem("username")) {
    window.localStorage.setItem("username", globalAuthState.username);
  }
  if (!localStorage.getItem("currentProjectindex")) {
    window.localStorage.setItem(
      "currentProjectindex",
      globalAuthState.currentProjectindex
    );
  }
}
setLocalStorage();
export default function LandingPage() {
  // email signup textfield handling [leave this here, will be used later]
  // const [userEmail, setUserEmail] = React.useState("");
  // const handleEmailChange = (event : any) => {
  //   setUserEmail(event.target.value);
  // }

  // email signup database mutation
  async function sendToDatabase(values: any) {
    payload.input.email = values.email;
    const request = await createNewsletterEmail(payload).catch((error) =>
      console.log(error)
    );
  }

  // login popup handling
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isCreateOpen, setIsCreateOpen] = React.useState(false);
  const [isAuthOpen, setAuthOpen] = React.useState(false);

  function NoAccount() {
    setIsLoginOpen(false);
    setIsCreateOpen(true);
  }
  function OpenAuth() {
    setAuthOpen(true);
    setIsCreateOpen(false);
  }
  function OpenLogin() {
    setIsLoginOpen(true);
    setAuthOpen(false);
  }
  // function Testing() {
  //   console.log(State);
  //   Dispatch({isAuthenticated: true});
  // }
  // React.useEffect(() => {
  //     console.log(State.isAuthenticated);
  //     console.log(localStorage.getItem('isAuthenticated'));
  //   }, [State.isAuthenticated]);

  // page animations
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  // remake object for about section [leave this here]
  const { title, subtext } = about;

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendToDatabase(values);
      setIsConfirmOpen(true); // trigger confirmation popup
      formik.resetForm();
    },
  });

  return (
    <div className="landing">
      <ConfirmationPopup
        trigger={isAuthOpen}
        setTrigger={setAuthOpen}
        setLoginOpen={OpenLogin}
      />
      <LandingPopupLogin
        trigger={isLoginOpen}
        setTrigger={setIsLoginOpen}
        setCreateOpen={NoAccount}
      />
      <LandingPopupConfirm
        trigger={isConfirmOpen}
        setTrigger={setIsConfirmOpen}
      />
      <LandingPopupCreate
        trigger={isCreateOpen}
        setTrigger={setIsCreateOpen}
        setAuthOpen={OpenAuth}
      />
      <div className="top-container">
        <div className="header-stack">
          <div className="logobox">
            <span className="logo">Matchbox</span>
          </div>
          <Stack className="nav-stack" direction="row">
            {/* TODO link scoll animation here later */}
            {/* <Button
              sx={{
                color: '#000000',
                fontSize: 'max(20px, 10px);',
              }}
            >
              {' '}            
              <Link to="#about" /> 
              About Us
            </Button> */}
            {/* login button */}

            <Button
              sx={{
                color: "#000000",
                fontSize: "max(20px, 10px);",
              }}
              onClick={() => setIsLoginOpen(true)}
            >
              {" "}
              Login
            </Button>
            <Button
              sx={{
                color: "#000000",
                fontSize: "max(20px, 10px);",
              }}
              onClick={() => setIsCreateOpen(true)}
            >
              {" "}
              Get Started
            </Button>
          </Stack>
        </div>
        <div className="landing-container">
          <Stack
            className="text-stack"
            direction="column"
            sx={{
              justifyContent: "center",
              width: "100%",
              ml: "2%",
            }}
          >
            <h1
              className="title-text"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Matchbox: Bridging ideas and execution
            </h1>
            <p className="sub-text" data-aos="fade-down" data-aos-delay="800">
              Matchbox is a project collaboration platform that curates
              countless relevant projects in seconds.
            </p>
          </Stack>
          <img
            className="matchstick"
            src={illustration}
            data-aos="fade-right"
            data-aos-delay="900"
          ></img>
        </div>
        <div className="button-stack"></div>
      </div>

      <div className="about-section">
        <div className="signup-stack">
          <h2 className="signText">
            Sign Up To Get Access To Our Newsletter.
          </h2>
          <div className="signup-entry">
            <div className="TextFieldHolder">
              <TextField
                id="email"
                name="email"
                placeholder="Email"
                variant="standard"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  justifyContent: "center",
                  px: "1rem",
                  backgroundColor: "#FFFFFF",
                  fontSize: "1vh",
                }}
              />
            </div>
            <Button
              onClick={() => formik.handleSubmit()}
              id="submit-btn"
              disabled={formik.isSubmitting}
              sx={{
                backgroundColor: "#F68084",
                width: "15%",
                height: "6vh",
                maxHeight: "4rem",
                fontSize: "max(14px, 5px);",
                "&:hover": {
                  backgroundColor: "#f59da0",
                },
                mx: "10px",
              }}
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* TODO about information to add about section in the future */
}
{
  /* <div className="about-text-container">
        <a href="#about"> </a>

        <p className='about-title-text' 
        data-aos='fade-up'
        data-aos-delay='100'>About us</p>
        <p className='about-sub-text'
        data-aos='fade-up'
        data-aos-delay='200'>
        {subtext} 

        Matchbox is a platform connecting developers to open source projects and connecting project owners and organizations to qualified developers. 
        Our mission is to empower developers and project owners by streamlining the process of finding and collaborating on open source projects. 
        </p>
        </div> */
}
