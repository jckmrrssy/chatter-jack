import React, { useState } from 'react'
import "./ChatInput.scss"

const ChatInput = ({ send }) => {
    const [value, setValue] = useState("")

    const onChange = event => {
        setValue(event.target.value)
    }
    
    return (
        <div className="ChatInput">
            <input placeholder="press enter to send" type="text" value={value} onChange={onChange} onKeyDown={event => send(event, setValue)} />
        </div>
    )
}

export default ChatInput