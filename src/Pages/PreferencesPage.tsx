import * as React from "react";
import { useNavigate } from "react-router-dom";

// mui imports
import {
  Paper,
  Card,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";

// style sheet import
import "./CSS/PreferencesPage.css";

// form control imports
import { useFormik } from "formik";
import * as yup from "yup";

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

export default function PreferencesPage() {
  const navigate = useNavigate();

  const [selectedLang, setSelectedLang] = React.useState([]);
  const [selectedFrame, setSelectedFrame] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState([]);


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
      navigate("/home");
    },
  });

  return (
  <div className="preferences-page">
    <h1 className="SiteTitle"> Matchbox </h1>
    <div className="CreatePreferences">
      <div className="card">
        <Paper/>
        <h1 className="card-title"> Project Preferences </h1>
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
          className="continue-btn"
          disabled={formikFilters.isSubmitting}
          style={{marginTop: '1em'}}
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
          Continue
        </Button>
      </div>
    </div>
  </div>
  );
}
