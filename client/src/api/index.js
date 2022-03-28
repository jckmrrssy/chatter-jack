const socket = new WebSocket("ws://localhost:8080/ws")

const connect = receive => {
  console.log("Attempting Connection...")

  socket.onopen = () => {
    console.log("Successfully Connected")
  }

  socket.onmessage = msg => {
    console.log(msg)
    receive(msg)
  }

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event)
  }

  socket.onerror = error => {
    console.log("Socket Error: ", error)
  }
}

const sendMessage = msg => {
  console.log("sending msg: ", msg)
  socket.send(msg)
}

export { connect, sendMessage }