build: clean macOS linux

clean:
	go clean

macOS:
	go build -o mac_build server/cmd/api/*.go

linux:
	GOOS=linux GOARCH=amd64 go build -o linux_build cmd/api/*.go