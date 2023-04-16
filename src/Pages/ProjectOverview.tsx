import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProjectOverview() {
    const location = useLocation();
    const project = location.state;
    console.log(project);
    return (
        <div>
            <h1>Project Overview</h1>
            <h2>{project.post_title}</h2>
        </div>
    );
}