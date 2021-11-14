import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import Skills from "./Content/Skills";
import Profile from "./Content/Profile";
import "./css/Content.css"

function Content() {
    return (
    <div className="content" >
       
        <Profile/>
        <Skills/>
    </div>)
}

export default Content