import React from "react";
import "./CSS/CreateProject.css";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useFormik, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { border, color } from "@mui/system";
import { useNavigate } from "react-router-dom";
import * as TagData from './constants'
import { langBundle, frameworkBundle, sizeBundle } from "./constants";
import { CreatePostsModelPayload } from '../backend/types'
import { createPost } from '../backend/mutations/postMutations'
import { Auth } from 'aws-amplify'
import Navbar from "../components/NavBar";

export default function CreateProject() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [Image, setImage] = React.useState("");
  const [selectedLang, setSelectedLang] = React.useState([]);
  const [selectedFrame, setSelectedFrame] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState([]);

  console.log(Auth.currentAuthenticatedUser());
  
  async function sendProjectToDyanmo(props:{
    ProjectTitle: string;
    ShortDesc: string;
    LongDesc: string;
    GithubLink: string;
    language: langBundle[];
    framework: frameworkBundle[];
    size: sizeBundle[];
  }){
    let dateTime = new Date
    const result = await createPost(
      {
        input: {
          post_title: props.ProjectTitle,
          description: props.LongDesc,
          project_link: props.GithubLink,
          image_link: 'https://github.com/akumar282/Matchbox',
          post_date: dateTime.toISOString(),
          userID: '5',
          lang_tag: props.language.map(x => x.enumMap),
          dev_type_tag: [],
          interest_tag: [],
          size_tag: props.size.map(x => x.enumMap),
          framework_tag: props.framework.map(x => x.enumMap)
        }
      }
    )
    console.log(result)
  }
  const navigate = useNavigate();
  //auto complete handlers
  function handleLang(event: any, value: any | null) {
    setSelectedLang(value.map((item: any) => item));
    formik.setFieldValue("language", value);
    console.log(value);
  }
  function handleFrame(event: any, value: any | null) {
    setSelectedFrame(value.map((item: any) => item));
    formik.setFieldValue("framework", value);
  }
  function handleSize(event: any, value: any | null) {
    setSelectedSize(value.map((item: any) => item));
    formik.setFieldValue("size", value);
  }
  //upload button handler for file input to add better styling
  function handleClick(event) {
    const fileInput = document.getElementById("file");
    fileInput?.click();
  }
  //file input handler
  function handleChange(event) {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }
  const validationSchema = yup.object({
    ShortDesc: yup
      .string()
      .min(2, "Short description should be of minimum 2 characters")
      .max(100, "Short description should be of maximum 100 characters")
      .required("Short description is required"),
    LongDesc: yup
      .string()
      .min(10, "Long description should be of minimum 10 characters")
      .max(1000, "Long description should be of maximum 1000 characters")
      .required("Long description is required"),
    GithubLink: yup
      .string()
      .min(2, "Github link should be of minimum 2 characters")
      .max(100, "Github link should be of maximum 100 characters")
      .required("Github link is required"),
    ProjectTitle: yup
      .string()
      .min(2, "Project title should be of minimum 2 characters")
      .max(100, "Project title should be of maximum 100 characters")
      .required("Project title is required"),
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
      ShortDesc: "",
      GithubLink: "",
      ProjectTitle: "",
      LongDesc: "",
      language: [] as langBundle[],
      framework: [] as frameworkBundle[],
      size: [] as sizeBundle[],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendProjectToDyanmo(values)
      navigate("/preferences");
    },
    validateOnChange: true,
    validateOnBlur: false,
  });

  return (

    <div className="CreateProjectPage">
      <Navbar />
      <div className="CreateProjectHolder">
      <div className="Holder">
        <div className="TopHolder">
          <div className="Uploadimg">
            <IconButton
              sx={{
                position: "absolute",
                backgroundColor: "#6259b9",
                color: "white",
                "&:hover": {
                  backgroundColor: "#716ab4",
                },
              }}
              onClick={handleClick}
            >
              <DownloadIcon fontSize="large" />
            </IconButton>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "none", borderWidth: "0px" }}
            />
            <img className="imagePrev" id="Image" src={Image} alt={""} />
          </div>

          <div className="ShortDesc">
            <div>
            <Typography
              sx={{
                
                fontSize: "1.5rem",
              }}
            >
              {" "}
              Short Description
            </Typography>
            <TextField
              multiline
              maxRows={2}
              sx={{
                width: "90%",
              }}
              inputProps={{
                style: {  },
              }}
              id="ShortDesc"
              name="ShortDesc"
              variant="outlined"
              value={formik.values.ShortDesc}
              onChange={formik.handleChange}
              error={
                formik.touched.ShortDesc && Boolean(formik.errors.ShortDesc)
              }
              helperText={formik.touched.ShortDesc && formik.errors.ShortDesc}
            />
            <Typography
              sx={{
               
                fontSize: "1.5rem",
                mt: "2rem",
              }}
            >
              {" "}
              Github Link
            </Typography>
            <TextField
              sx={{
                width: "90%",
              }}
              id="GithubLink"
              name="GithubLink"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GitHubIcon />
                  </InputAdornment>
                ),
                style: {  },
              }}
              variant="outlined"
              value={formik.values.GithubLink}
              onChange={formik.handleChange}
              error={
                formik.touched.GithubLink && Boolean(formik.errors.GithubLink)
              }
              helperText={formik.touched.GithubLink && formik.errors.GithubLink}
            />
          </div>
          <div className="TagsHolder">
            <Autocomplete
              sx={{
                width: "90%",
              }}
              multiple
              limitTags={2}
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
                  value={formik.values.language}
                  error={
                    formik.touched.language && Boolean(formik.errors.language)
                  }
                  // helperText={formik.touched.language && formik.errors.language}
                />
              )}
            />
            <Autocomplete
              sx={{
                width: "90%",
              }}
              multiple
              limitTags={2}
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
                  value={formik.values.framework}
                  error={
                    formik.touched.framework && Boolean(formik.errors.framework)
                  } 
                  // helperText={
                  //   formik.touched.framework && formik.errors.framework
                  // }
                />
              )}
            />
            <Autocomplete
              sx={{
                width: "90%",
              }}
              multiple
              limitTags={2}
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
                  error={formik.touched.size && Boolean(formik.errors.size)}
                  // helperText={formik.touched.size && formik.errors.size}
                />
              )}
            />
          </div>
        </div>
        </div>
        <div className="BottomHolder">
          <Typography
            sx={{
              
              fontSize: "1.5rem",
            }}
          >
            {" "}
            Project Title
          </Typography>
          <TextField
            sx={{
              width: "90%",
              mb: "2rem",
            }}
            inputProps={{
              style: {  fontSize: "1.5rem" },
            }}
            id="ProjectTitle"
            name="ProjectTitle"
            variant="outlined"
            value={formik.values.ProjectTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.ProjectTitle && Boolean(formik.errors.ProjectTitle)
            }
            helperText={
              formik.touched.ProjectTitle && formik.errors.ProjectTitle
            }
          />
          <Typography
            sx={{
              
              fontSize: "1.5rem",
            }}
          >
            {" "}
            Long Description
          </Typography>
          <TextField
            multiline
            maxRows={4}
            minRows={2}
            sx={{
              width: "90%",
            }}
            inputProps={{
              style: { fontSize: "1rem" },
            }}
            id="LongDesc"
            name="LongDesc"
            variant="outlined"
            value={formik.values.LongDesc}
            onChange={formik.handleChange}
            error={formik.touched.LongDesc && Boolean(formik.errors.LongDesc)}
            helperText={formik.touched.LongDesc && formik.errors.LongDesc}
          />
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          width: "12rem",
          height: "4rem",
          mt: "2rem",
          mb: "2rem",
          backgroundColor: "#6259b9",
          color: "white",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#716ab4",
          },
        }}
        onClick={() => formik.handleSubmit()}
      >
        Create Project
      </Button>
    </div>
    </div>
  );
}
