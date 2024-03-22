import React from "react";
import './about_the_company.css'

function Group (props) {
    return <div className="group">
        <p className="group-img">{props.emoji}</p>
        <p className="group-p">{props.text}</p>
    </div>
        
};

export default Group;