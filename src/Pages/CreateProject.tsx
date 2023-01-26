import React from "react";
import "./CSS/CreateProject.css";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { color } from "@mui/system";

const tags = [
  "Java",
  "C++",
  "Python",
  "C#",
  "JavaScript",
  "PHP",
  "Ruby",
  "HTML",
  "CSS",
  "Swift",
  "Go",
  "Rust",
  "Kotlin",
  "Dart",
  "Scala",
  "TypeScript",
  "SQL",
];
const tags2 = [
  "React",
  "React Native",
  "Angular",
  "Vue",
  "Node",
  "Express",
  "WebSocketIO",
  "Django",
  "Flask",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Azure",
  "Heroku",
];
const tags3 = ["small", "medium", "large"];
const arrTags = [tags, tags2, tags3];

export default function CreateProject() {
  const [isSelected, setIsSelected] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [Image, setImage] = React.useState("");
  const [selectedLang, setSelectedLang] = React.useState([]);
  const [selectedFrame, setSelectedFrame] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState([]);

  function handleLang(event: any, value: any | null) {
    setSelectedLang(value.map((item: any) => item));
  }
  function handleFrame(event: any, value: any | null) {
    setSelectedFrame(value.map((item: any) => item));
  }
  function handleSize(event: any, value: any | null) {
    setSelectedSize(value.map((item: any) => item));
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
  });

  const formik = useFormik({
    initialValues: {
      ShortDesc: "",
      GithubLink: "",
      ProjectTitle: "",
      LongDesc: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //Link to preferences page
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="CreateProjectPage">
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: "4rem",
          mt: "1rem",
          color: "#403f41c0",
          fontFamily: "PT Serif",
        }}
      >
        Create Project
      </Typography>
      <div className="Holder">
        <div className="TopHolder">
          <div className="Uploadimg">
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                backgroundColor: "#6259b9",
                color: "white",
                fontFamily: "PT Serif",
                "&:hover": {
                  backgroundColor: "#716ab4",
                },
              }}
              onClick={handleClick}
            >
              Upload a file
            </Button>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <img className="imagePrev" id="Image" src={Image} alt={""} />
          </div>

          <div className="ShortDesc">
            <Typography
              sx={{
                fontFamily: "PT Serif",
                fontSize: "1.5rem",
              }}
            >
              {" "}
              Short Description
            </Typography>
            <TextField
              multiline
              rows={6}
              sx={{
                width: "90%",
              }}
              inputProps={{
                style: { fontFamily: "PT Serif" },
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
                fontFamily: "PT Serif",
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
                style: { fontFamily: "PT Serif" },
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
              freeSolo
              sx={{
                width: "90%",
              }}
              multiple
              limitTags={3}
              id="language"
              options={tags}
              getOptionLabel={(option) => option}
              defaultValue={[tags[0]]}
              filterSelectedOptions
              value={selectedLang}
              onChange={handleLang}
              renderInput={(params) => (
                <TextField {...params} label="Languages" />
              )}
            />
            <Autocomplete
              freeSolo
              sx={{
                width: "90%",
              }}
              multiple
              limitTags={3}
              id="framework"
              options={tags2}
              getOptionLabel={(option) => option}
              defaultValue={[tags2[0]]}
              filterSelectedOptions
              value={selectedFrame}
              onChange={handleFrame}
              renderInput={(params) => (
                <TextField {...params} label="Frameworks" />
              )}
            />
            <Autocomplete
              freeSolo
              sx={{
                width: "90%",
              }}
              multiple
              limitTags={3}
              id="size"
              options={tags3}
              getOptionLabel={(option) => option}
              defaultValue={[tags3[0]]}
              filterSelectedOptions
              value={selectedSize}
              onChange={handleSize}
              renderInput={(params) => <TextField {...params} label="Size" />}
            />
          </div>
        </div>
        <div className="BottomHolder">
          <Typography
            sx={{
              fontFamily: "PT Serif",
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
              style: { fontFamily: "PT Serif", fontSize: "1.5rem" },
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
              fontFamily: "PT Serif",
              fontSize: "1.5rem",
            }}
          >
            {" "}
            Long Description
          </Typography>
          <TextField
            multiline
            rows={6}
            sx={{
              width: "90%",
            }}
            inputProps={{
              style: { fontFamily: "PT Serif", fontSize: "1.5rem" },
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
          width: "20%",
          height: "5rem",
          mt: "2rem",
          mb: "2rem",
          backgroundColor: "#6259b9",
          color: "white",
          fontFamily: "PT Serif",
          fontSize: "1.5rem",
          "&:hover": {
            backgroundColor: "#716ab4",
          },
        }}
        onClick={() => formik.handleSubmit()}
      >
        Create Project
      </Button>
    </div>
  );
}
