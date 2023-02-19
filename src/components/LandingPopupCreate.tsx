import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./LandingCreatePopup.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFormik } from "formik";
import * as yup from "yup";
import awsconfig from '../aws-exports'
import {Amplify} from 'aws-amplify'
import { createUser } from "../backend/mutations/userMutations";
import { CreateUsersPayload } from "../backend/types";
Amplify.configure(awsconfig)


const finalload: CreateUsersPayload = {
  input: {
    user_name: '',
    email: '',
    first_name: '',
    last_name: '',
    password: ''
  }
}



export default function LandingPopupCreate(props: { setTrigger: (arg0: boolean) => void; trigger: boolean; }) {

  const navigate = useNavigate();
  async function sendToDatabase(props: { first_name: any; last_name: any; email: any; user_name: any; password: any; }) {
    finalload.input = props
    await createUser(finalload)
  }
  
  function handleClose() {
    formik.resetForm();
    props.setTrigger(false);
  }
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, "First name should be of minimum 2 characters")
      .max(20, "First name should be of maximum 20 characters")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(2, "Last name should be of minimum 2 characters")
      .max(20, "Last name should be of maximum 20 characters")
      .required("Last name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    username: yup
      .string()
      .min(3, "Username should be of minimum 2 characters")
      .max(20, "Username should be of maximum 20 characters")
      .required("Username is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      user_name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //Link to preferences page
      // alert(JSON.stringify(values, null, 2));
      sendToDatabase(values)
      navigate("/create-preferences")
    },
  });
  return props.trigger ? (
    // this is the main container for the popup consider this like divs  dad
    <Dialog open={props.trigger} maxWidth="md" fullWidth={true}>
      {/* as it said Dialog has its own form of objects you are going to have to search up the documentation for them*/}
      <IconButton
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifySelf: "right",
          alignSelf: "right",
          marginLeft: "auto",
          marginRight: "1%",
          marginTop: "1%"
        }}
        onClick={() => handleClose()}
      >
        <HighlightOffIcon fontSize="large" />
      </IconButton>
      <DialogTitle
        id="dialog-create"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        {"Create Account"}
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
        {/* textField slot*/}
        <div className="Form">
          <form onSubmit={formik.handleSubmit}>
            <div className="Name">
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="firstName"
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="lasatName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </div>
            <div className="Name">
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                value={formik.values.user_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.user_name && Boolean(formik.errors.user_name)
                }
                helperText={formik.touched.user_name && formik.errors.user_name}
              />
            </div>
            <div className="Name">
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </div>
          </form>
        </div>
        <div className="popupControls">
          <Button
            disabled={formik.isSubmitting}
            sx={{
              backgroundColor: "#6259b9",
              ":hover": {
                backgroundColor: "#3f51b5",
                color: "white",
              },
            }}
            variant="contained"
            onClick={() => formik.handleSubmit()}
            type="submit"
          >
            Create Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    
  ) : (
    <React.Fragment>
    </React.Fragment>
    
  )
}
