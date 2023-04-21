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
import * as TagData from './constants'
import { langBundle, frameworkBundle, sizeBundle } from "./constants";
import { updateUser } from '../backend/mutations/userMutations'
import { getUserById } from '../backend/queries/userQueries'
import { changeUserPassword } from '../backend/auth/authentication'
import { useFormik } from "formik";
import * as yup from "yup";
import awsconfig from "../aws-exports";
import { Amplify } from "aws-amplify";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
Amplify.configure(awsconfig);


// temporary lists for choices to user



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
  async function updateCurrentUserPreferences(uuid: string, props: {
    language: langBundle[];
    framework: frameworkBundle[];
    size: sizeBundle[];
  }) {
    const version = await getUserById(uuid)
    const result = await updateUser({
      input: {
        id: uuid,
        _version: version.data.getUsersModel._version,
        lang_tag: props.language.map(x => x.enumMap),
        size_tag: props.size.map(x => x.enumMap),
        framework_tag: props.framework.map(x => x.enumMap)
      }
    })
    console.log(result)
  }

  async function updateCurrentUserInformation(uuid: string, props: {
    firstName: string,
    lastName: string,
    email: string
  }) {
    const version = await getUserById(uuid)
    console.log(version)
    const result = await updateUser({
      input: {
        id: uuid,
        _version: version.data.getUsersModel._version,
        email: props.email === '' ? version.data.getUsersModel.email : props.email,
        first_name: props.firstName === '' ? version.data.getUsersModel.firstName : props.firstName,
        last_name: props.lastName === '' ? version.data.getUsersModel.lastName : props.lastName
      }
    })
    console.log(result)
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
      updateCurrentUserInformation(localStorage.getItem('uuid')!, values)
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
      changeUserPassword(values)
    },
  });
  const formikFilters = useFormik({
    initialValues: {
      language: [] as langBundle[],
      framework: [] as frameworkBundle[],
      size: [] as sizeBundle[],
    },
    validationSchema: validationSchemaFilter,
    onSubmit: (values) => {
      // Link to preferences page
      // alert(JSON.stringify(values, null, 2));
      updateCurrentUserPreferences(localStorage.getItem('uuid')!, values)
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
                <div className= "NameField">
                <TextField
                  fullWidth
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
                </div>
                <div className= "NameField">
                <TextField
                  fullWidth
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
              </div>
              <div className="TopNameSetting">
                <div className = "emailField">
                <TextField
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
                  <div className="FilterField">
                <TextField
                  fullWidth
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
                  </div>
                  <div className="FilterField">
                  <TextField
                  fullWidth
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
                  </div>
                  <div className="FilterField">
                    <TextField
                      fullWidth
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
                  <div className="FilterField">
                  <Autocomplete
                    fullWidth
                    multiple
                    limitTags={3}
                    id="language"
                    options={TagData.LanguageTags}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[TagData.LanguageTags[0]]}
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
                  </div>
                  <div className="FilterField">
                  <Autocomplete
                    fullWidth
                    multiple
                    limitTags={3}
                    id="framework"
                    options={TagData.FrameworkTags}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[TagData.FrameworkTags[0]]}
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
                  </div>
                  <div className="FilterField">
                  <Autocomplete
                    fullWidth
                    multiple
                    limitTags={3}
                    id="size"
                    options={TagData.SizeTags}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[TagData.SizeTags[0]]}
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
