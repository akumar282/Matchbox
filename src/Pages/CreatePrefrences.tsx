import * as React from 'react';
import { Paper, Card, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import DoneIcon from '@mui/icons-material/Done';

import "./CSS/CreatePrefrences.css";
const tags = ["Java", "C++", "Python", "C#", "JavaScript", "PHP", "Ruby"];
export default function CreateProfile() {
  const [openTag, setTags] = React.useState([]);
  const handleTag = (event) => {
    alert(event.target.innerText);
  };
  return (
    <div>
      <span className="logo">Matchbox</span>
      <div className="CreatePrefrences">
        <h1> Project Prefrences</h1>
        <div className="tagHolder">

        </div>
        <div className="card">
          <div className="Names">
          {tags.map((tag) => 
            <Chip sx = {{
              backgroundColor: "#6259b9",
              margin: "5px",
              onclick: {
                backgroundColor: "#716ab4",
              }
            }}
            key= {tag} 
            label={tag} 
            variant="outlined" 
            onClick= {handleTag}
            />
          )}
          </div>
          <Button
            onClick={() => null}
            sx={{
              backgroundColor: "#6259b9",
              margin: "10%",
              fontSize: "max(20px, 10px);",
              "&:hover": {
                backgroundColor: "#716ab4",
              },
            }}
            variant="contained"
          >
            {" "}
            Continue{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
