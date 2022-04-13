package userservice

type user struct {
	ID     string `json:"id"`
	First  string `json:"first"`
	Last   string `json:"last"`
	Email  string `json:"email"`
	Handle string `json:"handle"`
}
