import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'
import "./../css/Skills.css"

let skills = [
    {
        "name": "Node.js",
        "percent": 100
    },
    {
        "name": "Javascript",
        "percent": 100
    },
    {
        "name": "MongoDB",
        "percent": 100
    },
    {
        "name": "GraphQL",
        "percent": 90
    },
    {
        "name": "RabbitMQ",
        "percent": 90
    },
    {
        "name": "React.js",
        "percent": 50
    },
    {
        "name": "Redis",
        "percent": 50
    },
    {
        "name": "Java",
        "percent": 30
    },
    {
        "name": "Python",
        "percent": 20
    },
    {
        "name": "Salesforce",
        "percent": 20
    }
]


function Skills() {
    return (
        <div className="subContent Skills">
            <div>
                {skills.map((d) => {
                    return (<div className="skill">
                        <Progress percent={d.percent} size='small' className='skill-progress' indicating>
                            {d.name}
                        </Progress>
                    </div>)
                })}
            </div>
        </div>)
}

export default Skills