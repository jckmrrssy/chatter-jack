import React from "react"
import "./History.scss"
import Message from '../Message'

const History = ({ chatHistory }) => {

  const messages = chatHistory?.map(chat => <Message key={chat.timeStamp} message={chat.data} />)

  return (
  <div className="History">
      <h2>Chat History</h2>
          {messages}
    </div>
  )
}

export default History;