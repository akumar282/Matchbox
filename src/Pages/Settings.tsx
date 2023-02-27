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
  InputAdornment,
} from "@mui/material";
import "./CSS/Settings.css";
import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import awsconfig from "../aws-exports";
import { Amplify } from "aws-amplify";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
Amplify.configure(awsconfig);


// temporary lists for choices to user
const select_lang = [
  { value: "Java", label: "Java" },
  { value: "C++", label: "C++" },
  { value: "Python", label: "Python" },
  { value: "C#", label: "C#" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "PHP", label: "PHP" },
  { value: "Ruby", label: "Ruby" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Swift", label: "Swift" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Dart", label: "Dart" },
  { value: "Scala", label: "Scala" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "SQL", label: "SQL" },
];
const select_frame = [
  { value: "React", label: "React" },
  { value: "React Native", label: "React Native" },
  { value: "Angular", label: "Angular" },
  { value: "Vue", label: "Vue" },
  { value: "Node", label: "Node" },
  { value: "Express", label: "Express" },
  { value: "WebSocketIO", label: "WebSocketIO" },
  { value: "Django", label: "Django" },
  { value: "Flask", label: "Flask" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "MySQL", label: "MySQL" },
  { value: "PostgreSQL", label: "PostgreSQL" },
  { value: "Firebase", label: "Firebase" },
  { value: "AWS", label: "AWS" },
  { value: "Azure", label: "Azure" },
  { value: "Heroku", label: "Heroku" },
];

const select_size = ["small", "medium", "large"];


import Navbar from "../components/NavBar";
export default function Settings() {
  const [selectedLang, setSelectedLang] = React.useState([]);
  const [selectedFrame, setSelectedFrame] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState([]);
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  function handleLang(event: any, value: any | null) {
    setSelectedLang(value.map((item: any) => item));
    formikFilters.setFieldValue("language", value);
  }
  function handleFrame(event: any, value: any | null) {
    setSelectedFrame(value.map((item: any) => item));
    formikFilters.setFieldValue("framework", value);
  }
  function handleSize(event: any, value: any | null) {
    setSelectedSize(value.map((item: any) => item));
    formikFilters.setFieldValue("size", value);
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
  });
  const validationSchemaPassword = yup.object({
    oldPassword: yup
      .string() 
      .oneOf(["password"], "Passwords must match") //change password to db password
      .required("Password is required"),
    newPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const validationSchemaFilter = yup.object({
    language: yup
      .array()
      .min(1, "Please select atleast one language")
      .required("Language is required"),
    framework: yup
      .array()
      .min(1, "Please select atleast one framework")
      .required("Framework is required"),
    size: yup
      .array()
      .min(1, "Please select atleast one size")
      .required("Size is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "", //pull from db
      lastName: "", //pull from db
      email: "", //pull from db
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Link to preferences page
      // alert(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
    },
  });
  const formikPassword = useFormik({
    initialValues: {
      oldPassword: "", //pull from db
      newPassword: "", //pull from db
      confirmPassword: "", //pull from db
    },
    validationSchema: validationSchemaPassword,
    onSubmit: (values) => {
      // Link to preferences page
      // alert(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
    },
  });
  const formikFilters = useFormik({
    initialValues: {
      language: [], //pull from db
      framework: [], //pull from db
      size: [], //pull from db
    },
    validationSchema: validationSchemaFilter,
    onSubmit: (values) => {
      // Link to preferences page
      // alert(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="SettingPage">
      <Navbar />
      <div className="SettingsContainer">
        <div className="SettingsCard">
            <div className="TopPartSetting">
              <h4> Edit Account</h4>
              <div className="TopNameSetting">
                
                <TextField
                  sx={{
                    width: "25rem",
                  }}
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={formik.values.firstName} //Todo is set inital value to the backend pull this will be done in formik
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />

                <TextField
                  sx={{
                    width: "25rem",
                  }}
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={formik.values.lastName} //Todo is set inital value to the backend pull this will be done in formik
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </div>
              <div className="TopNameSetting">
                
                <TextField
                  sx={{
                    width: "51rem",
                  }}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={formik.values.email} //Todo is set inital value to the backend pull this will be done in formik
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
              <Button
          disabled={formik.isSubmitting}
          sx={{
            backgroundColor: "#6259b9",
            width: "7rem",
            height: "3rem",
            fontSize: "1rem",
            color: "white",
            ":hover": {
              backgroundColor: "#716ab4",
            },
          }}
          variant="contained"
          onClick={() => formik.handleSubmit()}
          type="submit"
        >
          Save
        </Button>
            </div>
            <div className="BottomPartSetting">
              <div className="SettingsPassword">
                <h4>Change Password</h4>
                <div className="SettingFilters">
                <TextField
                    sx={{
                      width: "25rem",
                      fullWidth: "true",
                      
                    }}
                    InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowOldPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showOldPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Old Password"
                    type= {showOldPassword ? "text" : "password"}
                    variant="outlined"
                    value={formikPassword.values.oldPassword}
                    onChange={formikPassword.handleChange}
                    error={
                      formikPassword.touched.oldPassword && Boolean(formikPassword.errors.oldPassword)
                    }
                    helperText={
                      formikPassword.touched.oldPassword && formikPassword.errors.oldPassword
                    }
                  />
                  <TextField
                    sx={{
                      width: "25rem",
                      fullWidth: "true",
                      
                    }}
                    InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                    id="password"
                    name="newPassword"
                    placeholder="New Password"
                    type= {showNewPassword ? "text" : "password"}
                    variant="outlined"
                    value={formikPassword.values.newPassword}
                    onChange={formikPassword.handleChange}
                    error={
                      formikPassword.touched.newPassword && Boolean(formikPassword.errors.newPassword)
                    }
                    helperText={
                      formikPassword.touched.newPassword && formikPassword.errors.newPassword
                    }
                  />
                 
                    <TextField
                      sx={{
                        width: "25rem",
                      }}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      type= {showConfirmPassword ? "text" : "password"}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      value={formikPassword.values.confirmPassword}
                      onChange={formikPassword.handleChange}
                      error={
                        formikPassword.touched.confirmPassword &&
                        Boolean(formikPassword.errors.confirmPassword)
                      }
                      helperText={
                        formikPassword.touched.confirmPassword &&
                        formikPassword.errors.confirmPassword
                      }
                    />
                  
                  
                </div>
                <Button
          disabled={formikPassword.isSubmitting}
          sx={{
            backgroundColor: "#6259b9",
            mt: "1rem",
            width: "7rem",
            height: "3rem",
            fontSize: "1rem",
            alignSelf: "center",
            
            color: "white",
            ":hover": {
              backgroundColor: "#716ab4",
            },
          }}
          variant="contained"
          onClick={() => formikPassword.handleSubmit()}
          type="submit"
        >
          Save
        </Button>
              </div>
              <div className="SettingsPassword">
                <h4>Filter Settings</h4>

                <div className="SettingFilters">
                  <Autocomplete
                    sx={{
                      width: "25rem",
                    }}
                    multiple
                    limitTags={3}
                    id="language"
                    options={select_lang}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[select_lang[0]]}
                    filterSelectedOptions
                    value={selectedLang}
                    onChange={handleLang}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Languages"
                        value={formikFilters.values.language}
                        error={
                          formikFilters.touched.language &&
                          Boolean(formikFilters.errors.language)
                        }
                        helperText={
                          formikFilters.touched.language && formikFilters.errors.language
                        }
                      />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      width: "25rem",
                    }}
                    multiple
                    limitTags={3}
                    id="framework"
                    options={select_frame}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[select_frame[0]]}
                    filterSelectedOptions
                    value={selectedFrame}
                    onChange={handleFrame}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Frameworks"
                        value={formikFilters.values.framework}
                        error={
                          formikFilters.touched.framework &&
                          Boolean(formikFilters.errors.framework)
                        }
                        helperText={
                          formikFilters.touched.framework && formikFilters.errors.framework
                        }
                      />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      width: "25rem",
                    }}
                    multiple
                    limitTags={3}
                    id="size"
                    options={select_size}
                    getOptionLabel={(option) => option}
                    defaultValue={[select_size[0]]}
                    filterSelectedOptions
                    value={selectedSize}
                    onChange={handleSize}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Size"
                        error={
                          formikFilters.touched.size && Boolean(formikFilters.errors.size)
                        }
                        helperText={formikFilters.touched.size && formikFilters.errors.size}
                      />
                    )}
                  />
                </div>
                <Button
          disabled={formikFilters.isSubmitting}
          sx={{
            backgroundColor: "#6259b9",
            mt: "1rem",
            width: "7rem",
            height: "3rem",
            fontSize: "1rem",
            color: "white",
            ":hover": {
              backgroundColor: "#716ab4",
            },
          }}
          variant="contained"
          onClick={() => formikFilters.handleSubmit()}
          type="submit"
        >
          Save
        </Button>
              </div>
              
            </div>
          
          
        </div>
      </div>
    </div>
  );
}
