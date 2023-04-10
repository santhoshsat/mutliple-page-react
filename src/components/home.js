import React from "react";
import profile from 'D:/Mern/api-assess/src/utils/images/santhosh.jpg'

const Portfolio=()=>{
    return(
        <div>
            <h2 className="ui center aligned icon header">
                <i className="circular users icon"></i>
                About
            </h2>
            <div className="ui contents">
                <div className="comment">
                    <a href="/" className="avatar"><img src={profile} alt="images" width='300px' height='400px'/></a>
                <div className="content">
                    <a href="/" className="author">santhosh </a>
                <div className="metadata">
                    <span className="text">Saveetha Engineering college,
                    CSE department
                    </span>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;