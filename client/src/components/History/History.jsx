import React from "react"
import "./History.scss"

const History = props => {

  const messages = props.chatHistory?.map(msg => (
    <p key={msg.timeStamp}>{msg.data}</p>
  ))

  return (
  <div className="History">
      <h2>Chat History</h2>
          {messages}
    </div>
  )
}

export default History;