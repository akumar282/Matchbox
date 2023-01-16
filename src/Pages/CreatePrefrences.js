import React, { useState } from "react";
import { Paper, Card, TextField } from "@mui/material";
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";

import "./CSS/CreatePrefrences.css";
export default function CreateProfile() {
  return (
    <div>
      <span className="logo">Matchbox</span>
      <div className="CreatePrefrences">
        <h1> Project Prefrences</h1>
        <div className="tagHolder"></div>
        <div className="card">
          <div className = "Names">
             <Chip label="Java" 
                            variant="outlined" />
          
          </div>
          <Button onClick={() => null}
          sx={{
          backgroundColor: "#6259b9",
          margin: "10%",
          fontSize: "max(20px, 10px);",
          "&:hover": {
            backgroundColor: "#716ab4",
          },
          }}
          variant="contained"
          > Continue </Button>
        </div>
      </div>
    </div>
  );
}
