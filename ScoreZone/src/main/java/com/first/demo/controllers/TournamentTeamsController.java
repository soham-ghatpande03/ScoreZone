package com.first.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.first.demo.entities.TournamentTeamsEntity;
import com.first.demo.service.TournamentTeamsService;

@RestController
public class TournamentTeamsController {

	@Autowired
	TournamentTeamsService tservice;
	
	@GetMapping("/allTournamentTeams")
	public List<TournamentTeamsEntity>getAll(){
		return tservice.getAll();
	}
	
	@PostMapping("/saveTournamentTeams")
	public TournamentTeamsEntity saveTeamTournamentID(TournamentTeamsEntity t) {
		return tservice.saveTeam(t);
		
	}
}
