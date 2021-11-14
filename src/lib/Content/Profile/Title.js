import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import $ from 'jquery';

$('#name-tag').ready(function () {
    $('#name-tag').randomizeText({
        text: "Jaspreet Singh"
    });
})


function Title() {

    return (
        <div className="profile-title">
            <script src="js/randomize_text.js"></script>
            <div></div>
            <span>
                <p id="name-tag"></p>
            </span>
            <div></div>
        </div>
    )
}

export default Title