import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
  } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./ConfirmationPopup.css";

export default function ConfirmationPopup(props: { setTrigger: (arg0: boolean) => void; trigger: boolean; }) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            AuthCode: '',
        },
        validationSchema: yup.object({
            AuthCode: yup
                .string().length(6, "AuthCode must be 6 characters")
                .required("AuthCode is required")
                .matches(/^[0-9]+$/, "Must be only digits"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            navigate("/create-preferences")
        },
    });
    function handleClose() {
        formik.resetForm();
        props.setTrigger(false);
        navigate("/create-preferences")
    }
    return props.trigger ? (
        <Dialog open={props.trigger} maxWidth="sm" fullWidth={true}>
           <IconButton
        sx={{
          
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
                {"Confirm New Account"}
            </DialogTitle>

            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "15rem",
                }}
            >
                <h4>Enter your 6 digit confirmation code</h4>
                <div className="AuthCodeInput">
                <TextField
                    id="AuthCode"
                    name="AuthCode"
                    label="AuthCode"
                    variant="outlined"
                    sx={{
                        width: "20rem",
                       
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.AuthCode}
                    error={formik.touched.AuthCode && Boolean(formik.errors.AuthCode)}
                    helperText={(formik.touched.AuthCode && formik.errors.AuthCode) || " "}
                    />
                <Button
                        variant="contained"
                        sx={{
                            width: "10rem",
                            height: "3.5rem",
                            marginBottom: "1.5rem",
                            marginLeft: "1rem",
                            color: "white",
                            backgroundColor:'#f59da0',
                            '&:hover': {
                                backgroundColor: '#f59da0',
                            },
                        }}
                        onClick={() => formik.handleSubmit()}
                    >
                        Confirm
                    </Button>
                    </div>
                <div>
                    
                    
                    <Button sx={{
                            width: "10rem",
                            height: "3rem",
                            marginBottom: "1rem",
                            marginLeft: "1rem",
                        }}>Resend Code?</Button>
                </div>
            </DialogContent>
        </Dialog>
     ) : (
        <React.Fragment>
        </React.Fragment>
        
    )
}
