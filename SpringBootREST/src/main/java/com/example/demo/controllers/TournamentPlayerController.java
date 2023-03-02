package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.TournamentPlayer;
import com.example.demo.services.TournamentPlayerService;
import java.util.*;

@RestController
public class TournamentPlayerController {
	@Autowired
	TournamentPlayerService tservice;
	
	@GetMapping("/allTournamentPlayers")
	public List<TournamentPlayer> getAll(){
		return tservice.getAll();
	}
	
	@PostMapping("/saveTournamentPlayers")
	public TournamentPlayer saveTournamentPlayer(TournamentPlayer tp) {
		return tservice.saveTournamentPlayer(tp);
	}
}
