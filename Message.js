import React from 'react'

function Message(props) {
    return (
        <div>
            <h3>{props.username} :</h3>
            <h1> {props.tex}</h1>
            
        </div>
    )
}

export default Message
