import React, { useState } from "react";
import { Paper, Card, TextField} from "@mui/material";
import "./CSS/CreateProfile.css";
export default function CreateProfile() {
  const [Fname, SetFname] = useState(); //FirstName
  const [Lname, SetLname] = useState(); //LastName
  const [Uname, SetUname] = useState(); //Username
  const [Pname, SetPname] = useState(); //password
  const [Ename, SetEname] = useState(); //email
  return (
    <div>
      <div className="CreateUser">
        <h1> Create Profile</h1>
        <div className="tagHolder"></div>
        <Card className="card" sx={{}}>
          <Paper />
          <div className = "Names">
            <TextField
            label="First Name"
            variant="outlined"
            value={Fname}
            onChange={(e) => SetFname(e.target.value)}
            required
          />
           <TextField
            label="Last Name"
            variant="outlined"
            value={Lname}
            onChange={(e) => SetLname(e.target.value)}
            required
          />
           <TextField
            label="Userame"
            variant="outlined"
            value={Uname}
            onChange={(e) => SetUname(e.target.value)}
            required
          />
           <TextField
            label="email"
            variant="outlined"
            value={Ename}
            onChange={(e) => SetEname(e.target.value)}
            required
          />
           <TextField
            label="Password"
            variant="outlined"
            value={Pname}
            onChange={(e) => SetPname(e.target.value)}
            required
          />
          </div>
          

        </Card>
      </div>
    </div>
  );
}
