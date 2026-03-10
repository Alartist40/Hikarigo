package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run tools/cmd/release/main.go [build|serve]")
		os.Exit(1)
	}

	command := os.Args[1]

	switch command {
	case "build":
		runBuild()
	case "serve":
		runServe()
	default:
		fmt.Printf("Unknown command: %s\n", command)
		os.Exit(1)
	}
}

func runBuild() {
	fmt.Println("Building for production...")
	cmd := exec.Command("npm", "run", "build")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		fmt.Printf("Build failed: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("Build successful!")
}

func runServe() {
	fmt.Println("Starting development server...")
	cmd := exec.Command("npm", "run", "dev")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		fmt.Printf("Server failed: %v\n", err)
		os.Exit(1)
	}
}
