package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./dist"))
	http.Handle("/", fs)

	log.Println("Listening on port localhost:8080...")
	http.ListenAndServe(":8080", nil)
}
