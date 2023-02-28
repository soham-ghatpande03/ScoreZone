package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Tournament;
import com.example.demo.services.TournamentService;

@RestController
public class TournamentController {
	
	@Autowired
	TournamentService tservice;
	
	@GetMapping("/getAllTournaments")
	public List<Tournament> getAllTournaments()
	{
		return tservice.getAll();
	}
}
