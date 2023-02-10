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
import { createUser } from "../backend/mutations/userMutations";
import { CreateUsersModelInput } from "../API";
import { CreateUsersPayload } from "../backend/types";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
Amplify.configure(awsconfig);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const frontload: CreateUsersModelInput = {
  user_name: "",
  email: "",
  first_name: "",
  last_name: "",
  password: "",
};
const finalload: CreateUsersPayload = {
  input: frontload,
};

// TODO these requests should only be sent if there is a change
// const frontload: UpdateUsersModelInput = {
//   languages: '',
//   frameworks: '',
//   category: '',

// }

import Navbar from "../components/NavBar";
export default function Settings() {
  const [selectedLang, setSelectedLang] = React.useState([]);
  const [selectedFrame, setSelectedFrame] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  function handleLang(event: any, value: any | null) {
    setSelectedLang(value.map((item: any) => item));
    formik.setFieldValue("language", value);
  }
  function handleFrame(event: any, value: any | null) {
    setSelectedFrame(value.map((item: any) => item));
    formik.setFieldValue("framework", value);
  }
  function handleSize(event: any, value: any | null) {
    setSelectedSize(value.map((item: any) => item));
    formik.setFieldValue("size", value);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // pulled from LandingPopupCreate.tsx file, change later
  // PUT method for updating filter settings
  // async function updateFilter (props: { languages: any; frameworks: any; category: any; }) {
  //   frontload.languages = props.languages
  //   frontload.frameworks = props.frameworks
  //   frontload.category = props.category
  //   const request = await createUser(finalload)
  // }
  // PUT method for updating account settings

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
      .email("Ente`r a valid email")
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
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      language: [],
      framework: [],
      size: [],
    },
    validationSchema: validationSchema,
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
          <form onSubmit={formik.handleSubmit}>
            <div className="TopPartSetting">
              <div className="TopNameSetting">
                <h5>First Name</h5>
                <TextField
                  sx={{
                    width: "25rem",
                  }}
                  id="firstName"
                  name="firstName"
                  placeholder="" //TODO have these update based on GET request from database for default values
                  variant="outlined"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />

                <h5>Last Name</h5>
                <TextField
                  sx={{
                    width: "25rem",
                  }}
                  id="lasatName"
                  name="lastName"
                  placeholder=""
                  variant="outlined"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </div>
              <div className="TopNameSetting">
                <h5>Email</h5>
                <TextField
                  sx={{
                    width: "25rem",
                  }}
                  id="email"
                  name="email"
                  placeholder=""
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
                  placeholder=""
                  variant="outlined"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              </div>
            </div>
            <div className="BottomPartSetting">
              <div className="SettingsPassword">
                <h4>Change Password</h4>
                <div className="SettingPasswords">
                  
                  <h5>New Password</h5>
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                    id="password"
                    name="password"
                    placeholder="12345"
                    type= {showPassword ? "text" : "password"}
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <div  className="SettingPasswords">
                    <h5>Confirm Password</h5>
                    <TextField
                      sx={{
                        width: "25rem",
                      }}
                      id="confirmPassword"
                      name="confirmPassword"
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
                </div>
              </div>
              <div className="SettingsPassword">
                <h4>Filter Settings</h4>
                <h5>Show projects from only </h5>
                <div className="SettingFilters">
                  <Autocomplete
                    sx={{
                      width: "90%",
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
                        value={formik.values.language}
                        error={
                          formik.touched.language &&
                          Boolean(formik.errors.language)
                        }
                        helperText={
                          formik.touched.language && formik.errors.language
                        }
                      />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      width: "90%",
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
                        value={formik.values.framework}
                        error={
                          formik.touched.framework &&
                          Boolean(formik.errors.framework)
                        }
                        helperText={
                          formik.touched.framework && formik.errors.framework
                        }
                      />
                    )}
                  />
                  <Autocomplete
                    sx={{
                      width: "90%",
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
                          formik.touched.size && Boolean(formik.errors.size)
                        }
                        helperText={formik.touched.size && formik.errors.size}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <Button
          disabled={formik.isSubmitting}
          sx={{
            backgroundColor: "#6259b9",
            width: "10rem",
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
    </div>
  );
}
