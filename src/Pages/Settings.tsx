import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
    Input, 
    Chip, 
    Autocomplete, 
  
  } from "@mui/material";
  import React, { useState } from "react";
  import { useFormik } from "formik";
  import * as yup from "yup";
  import awsconfig from '../aws-exports'
  import {Amplify} from 'aws-amplify'
  import { createUser } from "../backend/mutations/userMutations";
  import { CreateUsersModelInput } from "../API";
  import { CreateUsersPayload } from "../backend/types";
  Amplify.configure(awsconfig)

  

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // temporary lists for choices to user 
  const select_lang = [
    { title: 'C++'},
    { title: 'Java'},
    { title: 'Python' },
  ];
  
  
  const select_frame = [
    { title: 'React'},
    { title: 'Linux'},
    { title: 'Shell' },
  ];
  
  const select_category = [
    { title: 'Cloud'},
    { title: 'Web Programming'},
    { title: 'DevOps' },
  ];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const frontload: CreateUsersModelInput = {
    user_name: '',
    email: '',
    first_name: '',
    last_name: '',
    password: ''
  }
  const finalload: CreateUsersPayload = {
    input: frontload
  }
  
  
import Navbar from "../components/NavBar";
export default function Settings() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // pulled from LandingPopupCreate.tsx file, change later
    async function sendToDatabase(props: { firstName: any; lastName: any; email: any; username: any; password: any; confirmPassword?: string; }) {
        frontload.user_name = props.username
        frontload.email = props.email
        frontload.first_name = props.firstName
        frontload.last_name = props.lastName
        frontload.password = props.password
        const request = await createUser(finalload)
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
        },
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
      });
      return (
        <div>
            <Navbar />
            <h4>Account Settings</h4>
              <form onSubmit={formik.handleSubmit}>
                <h5>First Name</h5>
                <TextField
                    sx={{
                      width: "25rem",
                    }}
                    id="firstName"
                    name="firstName"
                    placeholder="James" //TODO have these update based on GET request from database for default values
                    variant="outlined"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName && Boolean(formik.errors.firstName)
                    }
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                
                <h5>Last Name</h5>
                <TextField
                  sx={{
                      width: "25rem",
                  }}
                  id="lasatName"
                  name="lastName"
                  placeholder="Bond"
                  variant="outlined"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <h5>Email</h5>
                <TextField
                sx={{
                    width: "25rem",
                }}
                id="email"
                name="email"
                placeholder="JamesBond@gmail.com"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />

                <h5>Username</h5>
                <TextField
                  sx={{
                      width: "25rem",
                  }}
                  id="username"
                  name="username"
                  placeholder="JBond007"
                  variant="outlined"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                      formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />

                <h4>Change Password</h4>
                <h5>New Passowrd</h5>
                <TextField
                  sx={{
                    width: "25rem",
                  }}
                  id="password"
                  name="password"
                  placeholder="12345"
                  type="password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                  <h5>Confirm Password</h5>
                  <TextField
                    sx={{
                      width: "25rem",
                    }}
                    id="confirmPassword"
                    name="confirmPassword"
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
              </form>

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
                Save
              </Button>

            <h4>Filter Settings</h4>
            <h5>Show projects from only </h5>
              <Autocomplete
                sx={{
                  width: "25rem",
                }}
                multiple
                limitTags={5}
                id="tags-outlined"
                options={select_lang}
                getOptionLabel={(option) => option.title}
                // defaultValue={[select_lang[0]]} // TODO make default values the one already selected
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Languages"
                  />
                )}
              />
              <Autocomplete
                sx={{
                  width: "25rem",
                }}
                multiple
                limitTags={5}
                id="tags-outlined"
                options={select_frame}
                getOptionLabel={(option) => option.title}
                // defaultValue={[select_frame[0]]} // TODO make default values the one already selected
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Framework"
                  />
                )}
              />
              <Autocomplete
                sx={{
                  width: "25rem",
                }}
                multiple
                limitTags={5}
                id="tags-outlined"
                options={select_category}
                getOptionLabel={(option) => option.title}
                // defaultValue={[select_category[0]]} // TODO make default values the one already selected
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Category"
                  />
                )}
              />
            </div>
      );
}

