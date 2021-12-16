package main

import (
	"context"
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"server/models"
	"time"

	_ "github.com/lib/pq"
)

const version = "1.0.0"

type config struct {
	port int
	env  string
	db   struct {
		dsn string
	}
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"environment"`
	Version     string `json:"version"`
}

type application struct {
	config config
	logger *log.Logger
	models models.Models
}

func main() {
	var c config

	flag.IntVar(&c.port, "port", 8080, "Server port to listen on...")
	flag.StringVar(&c.env, "env", "Development", "Application environment (development|production)")
	flag.StringVar(&c.db.dsn, "dsn", "postgres://root:password@localhost/go_movies?sslmode=disable", "Postgres connection string")
	flag.Parse()

	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)

	db, err := openDB(c)
	if err != nil {
		logger.Fatal(err)
	}
	defer db.Close()

	app := &application{
		config: c,
		logger: logger,
		models: models.NewModels(db),
	}

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%d", c.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	logger.Println("Starting server on port ", c.port)

	err = srv.ListenAndServe()
	if err != nil {
		log.Println(err)
	}
}

func openDB(c config) (*sql.DB, error) {
	db, err := sql.Open("postgres", c.db.dsn)
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err = db.PingContext(ctx)
	if err != nil {
		return nil, err
	}

	return db, nil
}
