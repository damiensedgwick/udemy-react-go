clean_build: clean build

build:
	go build cmd/api/*.go

linux:
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build cmd/api/*.go

clean:
	go clean

docker: linux
	docker build -t udemy-react-go-api .

run:
	go run main.go -c config.json