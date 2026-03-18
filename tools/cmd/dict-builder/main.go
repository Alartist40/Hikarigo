package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

type DictEntry struct {
	Word    string `json:"word"`
	Reading string `json:"reading"`
	Meaning string `json:"meaning"`
}

func main() {
	fmt.Println("Building HikariGo Dictionaries...")

	// In a real implementation, this would parse JMdict XML.
	// For now, we generate the core-2k.json with sample data.

	core2k := []DictEntry{
		{"light", "hikarigo", "A special project for language learning."},
		{"curiosity", "kōkishin", "A strong desire to know or learn something."},
		{"glide", "kassō", "Move with a smooth continuous motion."},
		{"spirit", "seishin", "The non-physical part of a person which is the seat of emotions and character."},
		{"peace", "heiwa", "Freedom from disturbance; tranquility."},
	}

	outDir := "static/assets/dict"
	if err := os.MkdirAll(outDir, 0755); err != nil {
		fmt.Printf("Error creating directory: %v\n", err)
		os.Exit(1)
	}

	data, err := json.MarshalIndent(core2k, "", "  ")
	if err != nil {
		fmt.Printf("Error marshaling JSON: %v\n", err)
		os.Exit(1)
	}

	err = os.WriteFile(filepath.Join(outDir, "core-2k.json"), data, 0644)
	if err != nil {
		fmt.Printf("Error writing file: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("Successfully built core-2k.json")
}
