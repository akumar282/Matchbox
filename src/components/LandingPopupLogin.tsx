import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./LandingPopup.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFormik } from "formik";
import * as yup from "yup";

export default function LandingPopupLogin(props) {
  function noAccount() {
    props.setTrigger(false);
    props.setCreateOpen();
  }
  function handleClose() {
    formik.resetForm();
    props.setTrigger(false);
  }
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //Link to preferences page
      navigate("/home");
    },
  });
  return props.trigger ? (
    // this is the main container for the popup consider this like divs  dad
    <Dialog open={props.trigger} maxWidth="sm" fullWidth={true}>
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
        onClick={() => handleClose()}
      >
        <HighlightOffIcon fontSize="large" />
      </IconButton>
      <DialogTitle
        id="dialog-title"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        {"Login to your Account"}
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
        <form onSubmit={formik.handleSubmit}>
          <div className="Form">
            <TextField
              sx={{
                width: "25rem",
                mb: "1rem",
              }}
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={{
                width: "25rem",
                mb: "1rem",
              }}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
        </form>
        <div className="popupControls">
          <Button
            disabled={formik.isSubmitting}
            sx={{
              backgroundColor: "#6259b9",
              width: "25rem",
              ":hover": {
                backgroundColor: "#3f51b5",
                color: "white",
              },
            }}
            variant="contained"
            onClick={() => formik.handleSubmit()}
            type="submit"
          >
            Login
          </Button>
        </div>
        <div className="links">
          <Button onClick={noAccount}>Dont Have An Account?</Button>

          <Button to="/forgotpassword" component={Link}>
            Forgot Password?
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <React.Fragment></React.Fragment>
  );
}
