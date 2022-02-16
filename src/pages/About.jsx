import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
    return ( <
        Card >
        <
        div className = "about" >
        <
        h2 > About this Project < /h2> <
        p > This is the react app
        for the product < /p> <
        Link to = '/' > Backtohome < /Link>   <
        /div> <
        /Card>
    )
}

export default About