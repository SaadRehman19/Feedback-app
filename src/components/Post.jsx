// import React from "react";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import About from '../pages/About'

const Post = () => {
    const params = useParams();
    const status = 200;

    if (status == 404) { <
        Navigate to = "notfound" / > ;
    }
    const navigate = useNavigate();
    const btnclick = () => {
        console.log("egeg");
        navigate("/about");
    };
    return ( <
        div >
        <
        button onClick = { btnclick } > clickme < /button> <
        Routes >
        <
        Route path = '/show'
        element = { < About / > }
        /> <
        /Routes>

        {
            /* <h2>POST</h2>
                              <p>ID:{params.id}</p>
                              <p>Name:{params.name}</p> */
        } <
        /div>
    );
};

export default Post;