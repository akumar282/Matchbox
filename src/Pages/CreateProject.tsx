import React from "react";
import "./CSS/CreateProject.css";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function CreateProject() {
  return (
    <div className="CreateProjectPage">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontSize: "4rem", mt: "1rem" }}
      >
        Create Project
      </Typography>
      <div className="Holder">
        <div className="TopHolder">
          <div className="Uploadimg">
            upload image <AddCircleOutlineIcon />
          </div>

          <div className="ShortDesc">
            <TextField
              multiline
              rows={6}
              sx={{
                width: "90%",
              }}
              id="ShortDesc"
              name="ShortDesc"
              label="Short Description"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "90%",
              }}
              id="GithubLink"
              name="GithubLink"
              label="Github Link"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GitHubIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </div>

          <div className="TagsHolder">set tags</div>
        </div>
        <div className="BottomHolder">
          <TextField
            sx={{
              width: "90%",
            }}
            id="ProjectTitle"
            name="ProjectTitle"
            label="Project Title"
            variant="outlined"
          />
          <TextField
            multiline
            rows={6}
            sx={{
              width: "90%",
            }}
            id="LongDesc"
            name="LongDesc"
            label="Long Description"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}
