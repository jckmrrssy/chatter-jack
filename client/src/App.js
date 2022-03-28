import React, { useEffect, useState } from 'react'
import './App.css'
import { connect, sendMessage } from './api'

import Header from './components/Header'
import History from './components/History'

function App() {
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    connect(msg => {
      console.log("New chat message: " + JSON.stringify(msg))
      setChatHistory([...chatHistory, msg])
    })
    console.log("Current chats are: ", chatHistory)
  }, [chatHistory])


  const send = () => {
    console.log("sup, sending message")
    sendMessage("suppppppppppp")
  }  

  return (
    <div className="App">
      <Header />
      <History chatHistory={chatHistory}/>
      <button onClick={() => send()}>Websockey guy</button>
    </div>
  )
}

export default App
