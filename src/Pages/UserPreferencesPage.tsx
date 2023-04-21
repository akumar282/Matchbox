import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as TagData from './constants'
import { langBundle, frameworkBundle, sizeBundle } from "./constants";
import {
  Paper,
  Card,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import "./CSS/UserPreferencesPage.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { updateUser } from "../backend/mutations/userMutations";


export default function UserPreferencesPage() {
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
  async function updateUserFunction(idCur: string){
    const log = await updateUser({
      input: {
        id: idCur,
        new_user: false,
        _version: parseInt(localStorage.getItem('userVersion')!),
      }
    })
    console.log(log)
  }

  const validationSchemaFilter = yup.object({
    language: yup
      .array()
      .min(1, "Please select at least one language")
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
      language: [] as unknown as langBundle,
      framework: [] as unknown as frameworkBundle,
      size: [] as unknown as sizeBundle,
    },
    validationSchema: validationSchemaFilter,
    onSubmit: (values) => {
      updateUserFunction(localStorage.getItem('uuid')!)
      
      navigate("/home");
    },
  });

  return (
  <div className="preferences-page">
    <h1 className="SiteTitle"> Matchbox </h1>
    <div className="CreatePreferences">
      <div className="card-box">
        <h1 className="card-title"> Project Preferences </h1>
        <div className="SettingFilters">
          <Autocomplete
            sx={{
            width: "25rem",
            }}
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
          <Autocomplete
            sx={{
            width: "25rem",
            }}
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
          <Autocomplete
            sx={{
            width: "25rem",
            }}
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
        <Button
          className="continue-btn"
          disabled={formikFilters.isSubmitting}
          style={{marginTop: '1em', marginBottom: '2em'}}
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
