package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

const version = "1.0.0"

type config struct {
	port int
	env  string
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"environment"`
	Version     string `json:"version"`
}

type application struct {
	config config
	logger *log.Logger
}

func main() {
	var c config

	flag.IntVar(&c.port, "port", 4000, "Server port to listen on...")
	flag.StringVar(&c.env, "env", "Development", "Application environment (development|production)")
	flag.Parse()

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	app := &application{
		config: c,
		logger: logger,
	}

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%d", c.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	logger.Println("Starting server on port ", c.port)

	err := srv.ListenAndServe()
	if err != nil {
		log.Println(err)
	}
}
