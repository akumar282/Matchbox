import * as React from "react";
import { Paper, Card, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import "./CSS/CreatePreferences.css";
import { useNavigate } from "react-router-dom";
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
const arrTitle = ["Languages", "Frameworks", "Size"];
const savedTags: string[] = [];

export default function PreferencesPage() {
  const navigate = useNavigate();
  const [openTag, setTags] = React.useState(savedTags);
  const [tagState, setTagState] = React.useState(tags); //add tags
  const [countState, setCountState] = React.useState(0); //index state
  const [continueState, setContinueState] = React.useState("Continue"); //changes button label
  let finalCount = arrTags.length;
  const [Title, setTitle] = React.useState("Languages");
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
      if (countState < finalCount) {
        setCountState(countState + 1);
        setTagState(arrTags[countState + 1]);
        setTitle(arrTitle[countState + 1]);
        if (countState + 1 === finalCount - 1) {
          setContinueState("Submit");
        }
        if (countState + 1 === finalCount) {
          alert(openTag);
          navigate("/home");
        }
      }
    }
  };
  const handleBack = () => {
    if (countState > 0) {
      setCountState(countState - 1);
      setTagState(arrTags[countState - 1]);
      setTitle(arrTitle[countState - 1]);
      if (countState - 1 != finalCount - 1) {
        setContinueState("Continue");
      }
    }
  };
  return (
    <div>
      <span className="logo">Matchbox</span>
      <div className="CreatePrefrences">
        <h1> Project Preferences</h1>
        <div className="Page">
          <div className="tagBackground">
            <div className="tagHolder">
              {openTag.map((tag) => (
                <Chip
                  sx={{
                    backgroundColor: "#6259b9",
                    width: "8rem",
                    height: "3vh",
                    fontSize: "1rem",
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
            <h1 className="Title">{Title}</h1>
            <Paper />
            <div className="Names">
              {tagState.map((tag) => (
                <Chip
                  sx={{
                    backgroundColor: "#6259b9",
                    width: "8rem",
                    height: "3vh",
                    fontSize: "1rem",
                    color: "#f0f8ff",
                    margin: "5px",
                    ":hover": {
                      backgroundColor: "#716ab4",
                      color: "#f0f8ff",
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
                onClick={() => handleBack()}
                sx={{
                  backgroundColor: "#6259b9",
                  margin: "10%",
                  color: "white",
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
                {continueState}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
