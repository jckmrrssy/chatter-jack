package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jckmrrssy/chatter-jack/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})
}

func main() {
	fmt.Println("Distributed Chat App v0.01")
	router := gin.Default()
	// server := implement ORM controller server here, in place of taskstore https://github.com/eliben/code-for-blog/blob/master/2021/go-rest-servers/gin/gorest-gin.go

	router.GET("/rooms", server.getAllRooms)
	router.GET("/rooms/:id", server.getRoom)
	router.POST("/rooms/:id", server.createRoom)
	// GET AUTH
	// POST AUTH
	router.POST("/user/:id", server.createUser)
	router.DELETE("/user/:id", server.deleteUser)
	router.PUT("/user/:id", server.updateUser)
	setupRoutes()
	http.ListenAndServe(":8080", nil)
	router.Run("localhost:" + os.Getenv("SERVERPORT"))
}
