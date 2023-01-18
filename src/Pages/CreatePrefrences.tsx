import * as React from "react";
import { Paper, Card, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import "./CSS/CreatePrefrences.css";
const tags = [
  "Java",
  "C++",
  "Python",
  "C#",
  "JavaScript",
  "PHP",
  "Ruby",
  "Swift",
  "Go",
  "Rust",
  "Kotlin",
  "Dart",
  "Scala",
  "TypeScript",
  "SQL",
  "NoSQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Linux",
  "Windows",
  "MacOS",
  "Android",
  "iOS",
  "React Native",
  "Flutter",
  "React",
  "Angular",
  "Vue",
  "Node",
  "Express",
  "Django",
  "Flask",
  "HTML",
  "CSS",
  "Bootstrap",
  "Material UI",
  "SASS",
  "Tailwind",
];
const tags2 = ["React", "Angular", "Vue", "Node", "Express", "Django", "Flask"];
const tags3 = ["HTML", "CSS", "Bootstrap", "Material UI", "SASS", "Tailwind"];
const savedTags: string[] = [];
export default function CreateProfile() {
  const [openTag, setTags] = React.useState(savedTags);
  const [tagState, setTagState] = React.useState(tags);
  const [countState, setCountState] = React.useState(0);

  const handleTag = (event) => {
    if (openTag.includes(event.target.innerText)) {
      setTags((current) =>
        current.filter((tag) => tag !== event.target.innerText)
      );
    } else setTags((current) => [...current, event.target.innerText]);
  };
  const handleContinue = () => {
    if (openTag.length === 0) {
      alert("Please select at least one tag");
    } else {
      if (countState === 0) {
        setTagState(tags2);
        setCountState(1);
      }
    }
  };
  const handleBack = () => {
    if (countState === 1) {
      setTagState(tags);
      setCountState(0);
    }
  };
  return (
    <div>
      <span className="logo">Matchbox</span>
      <div className="CreatePrefrences">
        <h1> Project Prefrences</h1>
        <div className="Page">
          <div className="tagBackground">
          <div className="tagHolder">
            {openTag.map((tag) => (
              <Chip
                sx={{
                  backgroundColor: "#6259b9",
                  m: "none",
                  outline: "auto",
                  ":hover": {
                    backgroundColor: "#716ab4",
                  },
                }}
                key={tag}
                label={tag}
                variant="outlined"
              />
            ))}
          </div>
          </div>
          <div className="card">
            <Paper />
            <div className="Names">
              {tagState.map((tag) => (
                <Chip
                  sx={{
                    backgroundColor: "#6259b9",
                    margin: "5px",
                    ":hover": {
                      backgroundColor: "#716ab4",
                    },
                  }}
                  key={tag}
                  label={tag}
                  variant="outlined"
                  onClick={handleTag}
                  deleteIcon={<DoneIcon />}
                />
              ))}
            </div>
            {/* <h2> count {openTag}</h2> */}
            <div className="buttons">
            <Button 
            onClick={() =>handleBack()}
            sx={{
              backgroundColor: "#6259b9",
              margin: "10%",
              color : "white",
              width: "10vw",
              fontSize: "max(20px, 10px);",
              "&:hover": {
                backgroundColor: "#716ab4",
              },
            }}
            >
              Go Back
            </Button>
            <Button
              onClick={() => handleContinue()}
              sx={{
                backgroundColor: "#6259b9",
                margin: "10%",
                width: "30vw",
                fontSize: "max(20px, 10px);",
                "&:hover": {
                  backgroundColor: "#716ab4",
                },
              }}
              variant="contained"
            >
              Continue
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
