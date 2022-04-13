import React from "react";
import "./Message.scss";

const Message = ({ message }) => {

    return ( 
        <div className="Message">{message ? JSON.parse(message).body : ""}</div>
    )
}

export default Message;