import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./LandingCreatePopup.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFormik } from "formik";
import * as yup from "yup";
import awsconfig from "../aws-exports";
import { Amplify } from "aws-amplify";
import { createUser } from "../backend/mutations/userMutations";
import { newUserSignUp } from '../backend/auth'
import { v4 as uuidv4 } from 'uuid';
Amplify.configure(awsconfig)


export default function LandingPopupCreate(props: { setTrigger: (arg0: boolean) => void; trigger: boolean; }) {

  const navigate = useNavigate();
  const uuidGen = uuidv4();
  async function sendToDatabase(props: {
    firstName: any;
    lastName: any;
    email: any;
    username: any;
    password: any;
    confirmPassword?: string;
    uuid: string;
  }) {
    // redundatant code. should be fixed to finalload.input = props
    props.uuid = uuidGen
    await newUserSignUp(props.email, props.password, props.email, props.uuid )
    await createUser(
      {
        input: {
          id: props.uuid,
          user_name: props.username,
          email: props.email,
          first_name: props.firstName,
          last_name: props.lastName,
          password: props.password
        }
      } 
    )
  }
  function OpenAuth() {
    props.setAuthOpen();
    props.setTrigger(false);
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
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //Link to preferences page
      // alert(JSON.stringify(values, null, 2));
      sendToDatabase(values)
      // this.props.history.push(
      //   {pathname: '/ConfirmationPopup', state: {username: values.username, email: values.email}}
      //   )
      // OpenAuth();
      process.env.USER = values.email
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
          marginTop: "1%",
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
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                sx={{
                  width: "25rem",
                }}
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
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
    <React.Fragment></React.Fragment>
  );
}
