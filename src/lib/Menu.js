import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import $ from 'jquery';
import { Button, Icon } from 'semantic-ui-react';
import ReactLogo from './imgs/react-logo.png';
import resume from "./docs/Jaspreet's Resume.pdf"


export default class MainMenu extends Component {

    state = { activeItem: 'closest' }

    componentDidMount() {
        window.location.href = '#Profile';

        $(".Resume").click(() => {
            window.open(resume)
        })

        // $('.profile-menu').randomizeText({
        //     text: "Profile"
        // });

        // $('.work-menu').randomizeText({
        //     text: "Work"
        // });

        // $('.education-menu').randomizeText({
        //     text: "Education"
        // });
    }

    itemClicked = (e, { name }) => {
        this.setState({ activeItem: name });
        window.location.href = `#${name}`
        document.getElementsByClassName(`${name}`)[0].scrollIntoView({ top: -100, behavior: 'smooth', block: 'center', inline: 'start' });

    }

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Image src={ReactLogo} size='mini' className="reactLogo" />
                <div className="Resume">
                    <Button icon labelPosition='left' className="mini">
                        <Icon name='download' />
                        Resume
                    </Button>
                </div>
                <Menu text className="mainMenu">
                    <Menu.Item
                        name='Profile'
                        active={activeItem === 'Profile'}
                        onClick={this.itemClicked}
                        className='profile-menu'
                    />
                    <Menu.Item
                        name='Skills'
                        active={activeItem === 'skills'}
                        onClick={this.itemClicked}
                        className='skills-menu'
                    />
                </Menu>
            </div>
        )
    }
}