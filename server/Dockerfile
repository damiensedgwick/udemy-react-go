# syntax=docker/dockerfile:1

FROM golang:1.17-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download


COPY cmd/api/*.go ./

RUN go build -o /udemy-react-go-api

CMD [ "/udemy-react-go-api" ]