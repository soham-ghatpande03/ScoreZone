package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.example.demo.entities.TournamentTeam;
import com.example.demo.services.TournamentTeamService;

@RestController
public class TournamentTeamController {

	@Autowired
	TournamentTeamService tservice;
	
	@GetMapping("/allTournamentTeamID")
	public List<TournamentTeam>getAll(){
		return tservice.getAll();
	}
	
	@PostMapping("/saveTeamTournamentID")
	public TournamentTeam saveTeamTournamentID(TournamentTeam t) {
		return tservice.saveTeam(t);
		
	}
}
