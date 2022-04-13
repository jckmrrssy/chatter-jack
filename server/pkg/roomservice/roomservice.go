package roomservice

import "net/http"

type room struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	CreatedBy   string `json:"createdBy"`
	CreatedDate string `json:"createdDate"`
	Private     bool   `json:"private"`
}

func getRooms(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, rooms)
}
