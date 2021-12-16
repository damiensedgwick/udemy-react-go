build: clean macOS linux docker

clean:
	go clean

macOS:
	go build -o mac_build cmd/api/*.go

linux:
	GOOS=linux GOARCH=amd64 go build -o linux_build cmd/api/*.go

docker:
	docker build --tag udemy-react-go-api . --platform linux/amd64