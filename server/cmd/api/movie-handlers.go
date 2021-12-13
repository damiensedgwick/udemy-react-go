package main

import (
	"errors"
	"net/http"
	"server/models"
	"strconv"
	"time"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getOneMovie(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		app.logger.Println(errors.New("invalid id parameter"))
		app.errorJSON(w, err)
		return
	}

	app.logger.Println("id is", id)

	movie := models.Movie{
		ID:          id,
		Title:       "Beethoven",
		Description: "A slobbering St. Bernard becomes the center of attention for a loving family, but must contend with a dog-napping veterinarian and his henchmen.",
		Year:        1992,
		ReleaseDate: time.Date(1992, 11, 04, 01, 0, 0, 0, time.Local),
		RunTime:     87,
		Rating:      6,
		MPAARating:  "U",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	err = app.writeJSON(w, http.StatusOK, movie, "movie")
}

func (app *application) getAllMovies(w http.ResponseWriter, r *http.Request) {

}
