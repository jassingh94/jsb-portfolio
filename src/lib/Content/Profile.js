import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import selfImage from '../imgs/self.JPG'
import "./../css/Profile.css"
import { Helmet } from "react-helmet";
import Title from "./Profile/Title"
import SubTitle from "./Profile/Sub-Title"
import $ from 'jquery';




class Profile extends React.Component {

    componentDidMount() {
        $('.socialLinks>.github').click(() => {
            var a = window.document.createElement('a');
            a.href = "https://github.com/jassingh94";
            a.setAttribute('target', '_blank');
            a.click();
        })

        $('.socialLinks>.linkedin').click(() => {
            var a = window.document.createElement('a');
            a.href = "https://www.linkedin.com/in/jaspreet-singh-647a5bb6/";
            a.setAttribute('target', '_blank');
            a.click();
        })

        $('.contactLinks>div>.mail').click(() => {
            var a = window.document.createElement('a');
            a.href = "mailto:hello@thejaspreetbindra.in";
            a.setAttribute('target', '_blank');
            a.click();
        })

        $('.contactLinks>div>.call').click(() => {
            var a = window.document.createElement('a');
            a.href = "tel:7009094781";
            a.setAttribute('target', '_blank');
            a.click();
        })
    }

    render() {
        return (
                <div className="subContent Profile">
                    <Helmet>
                        <script src="/Profile/js/randomize_text.js"></script>
                    </Helmet>
                    <div className="emptyDiv"></div>
                    <div className="profile-content">
                        <Title />
                        <SubTitle />
                        {/* <div className="ui medium circular image centered"><img className="self-image" alt="Jaspreet" src={selfImage} srcSet={selfImage} /></div> */}
                        <img src={selfImage} className="ui medium circular image centered" centered />
                        <div className="socialLinks">
                            <button className="ui circular github icon button">
                                <i className="github icon" ></i>
                            </button>
                            <button className="ui circular linkedin icon button">
                                <i className="linkedin icon" ></i>
                            </button>
                        </div>
                        <div className="contactLinks">
                            <div>
                                <button className="ui circular call icon button">
                                    <i className="call icon"></i>  +91-7009094781
                                </button>
                            </div>
                            <div>
                                <button className="ui circular mail icon button">
                                    <i className="mail icon"></i>  hello@thejaspreetbindra.in
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}
export default Profile