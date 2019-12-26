package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func handleOrders() http.HandlerFunc {

	type oid struct {
		Oid string `json:"$oid,omitempty"`
	}

	type order struct {
		Id        oid    `json:"_id,omitempty"`
		Fieldtype string `json:"fieldtype,omitempty"`
		Firstname string `json:"first_name,omitempty"`
		Lastname  string `json:"last_name,omitempty"`
		Section   string `json:"section,omitempty"`
		Order     string `json:"order,omitempty"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		jsonFile, err := os.Open("./data/testdata.json")
		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		defer jsonFile.Close()

		// first get "unmarshal" the json from persisted to a variable
		byteValue, _ := ioutil.ReadAll(jsonFile)

		myOrder := order{}
		json.Unmarshal(byteValue, &myOrder)

		// then write "marshal" variable to json formatted string
		js, err := json.Marshal(myOrder)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		// the write the string to response writer i.e. back to browser
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(js)
	}
}

func main() {
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)
	http.Handle("/api/orders", handleOrders())

	log.Println("Listening on port localhost:8080...")
	http.ListenAndServe(":8080", nil)
}
