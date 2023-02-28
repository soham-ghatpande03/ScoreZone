package com.first.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.first.demo.entities.TournamentPlayersEntity;
import com.first.demo.service.TournamentPlayersService;
import java.util.*;

@RestController
public class TournamentPlayersController {
	@Autowired
	TournamentPlayersService tservice;
	
	@GetMapping("/allTournamentPlayers")
	public List<TournamentPlayersEntity> getAll(){
		return tservice.getAll();
	}
	
	@PostMapping("/saveTournamentPlayers")
	public TournamentPlayersEntity saveTournamentPlayer(TournamentPlayersEntity tp) {
		return tservice.saveTournamentPlayer(tp);
	}
}
