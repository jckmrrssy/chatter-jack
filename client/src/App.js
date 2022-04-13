import React, { useEffect, useState } from 'react'
import './App.css'
import { connect, sendMessage } from './api'

import Header from './components/Header'
import History from './components/History'
import ChatInput from './components/ChatInput'

const send = async (event, setValue) => {
  if (event.key === "Enter") {
    await sendMessage(event.target.value)
    setValue("")
    event.target.value = ""
  }
}

function App() {
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    connect(msg => {
      console.log("New chat message: " + JSON.stringify(msg))
      setChatHistory([...chatHistory, msg])
    })
    console.log("Current chats are: ", chatHistory)
  })
  
  return (
    <div className="App">
      <Header />
      <History chatHistory={chatHistory}/>
      <ChatInput send={send}/>
    </div>
  )
}

export default App
