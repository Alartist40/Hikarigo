package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run tools/cmd/release/main.go [build|dev|preview]")
		os.Exit(1)
	}

	command := os.Args[1]

	switch command {
	case "build":
		runBuild()
	case "dev":
		runDev()
	case "preview":
		runPreview()
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

func runDev() {
	fmt.Println("Starting development server...")
	cmd := exec.Command("npm", "run", "dev")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		fmt.Printf("Dev server failed: %v\n", err)
		os.Exit(1)
	}
}

func runPreview() {
	fmt.Println("Starting production preview...")
	cmd := exec.Command("npm", "run", "preview")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		fmt.Printf("Preview failed: %v\n", err)
		os.Exit(1)
	}
}
