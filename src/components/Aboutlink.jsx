import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Aboutlink = () => {
    return ( <
        div >
        <
        div className = "about-link" >
        <
        Link to = '/about' >
        <
        FaQuestion size = { 20 }
        /> <
        /Link> <
        /div> <
        /div>
    );
};

export default Aboutlink;