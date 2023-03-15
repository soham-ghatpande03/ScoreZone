package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.example.demo.entities.Tournament;
import com.example.demo.entities.TournamentTeam;
import com.example.demo.services.TeamService;
import com.example.demo.services.TournamentService;
import com.example.demo.services.TournamentTeamService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TournamentTeamController {

	@Autowired
	TournamentTeamService tservice;
	
	@Autowired 
	TournamentService tourservice;
	
	@Autowired
	TeamService teservice;
	
	@GetMapping("/allTournamentTeamID")
	public List<TournamentTeam>getAll(){
		return tservice.getAll();
	}
	
	@GetMapping("/TeamsByTourId")
	public List<TournamentTeam> allTeams(@RequestParam("tid") int tid){
		
		Tournament t1 = tourservice.getById(tid);
		return tservice.allTeams(t1);
	}
	
	@PostMapping("/saveTeamTournamentID")
	public TournamentTeam saveTeamTournamentID(TournamentTeam t) {
		return tservice.saveTeam(t);
		
	}
	
	@GetMapping("/addTeam")
	public TournamentTeam participate(@RequestParam("teamid") int teamid, @RequestParam("tourid") int tour_id)
	{
		TournamentTeam ttid = new TournamentTeam();
		tourservice.getById(tour_id);
		teservice.getById(teamid);
		return tservice.saveTeam(ttid);
	}
}