package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.DummyMatch;
import com.example.demo.entities.Match;
import com.example.demo.entities.Team;
import com.example.demo.entities.Tournament;

import com.example.demo.services.MatchService;
import com.example.demo.services.TeamService;
import com.example.demo.services.TournamentService;

@CrossOrigin(origins = "http://localhost:3000")



@RestController
public class MatchController {

	@Autowired
	MatchService mservice;
	

	@Autowired
	TeamService teservice;
	
	@Autowired
	TournamentService tourservice;
	
	@GetMapping("/allMatches")
	public List<Match> getMatches(){
		
		return mservice.getMatches();
	}
	
	@PostMapping("/saveMatch")
	public Match saveMatch(@RequestBody DummyMatch dm ) 
	{
		Team team1 = teservice.getTeamById(dm.getTeam_id_a());
		Team team2 = teservice.getTeamById(dm.getTeam_id_b());
		Tournament t1 = tourservice.getById(dm.getTournament_id()); 
		Match m = new Match(t1,team1,team2,dm.getMatch_status(),dm.getMatch_venue(),dm.getMatch_date(),dm.getRemarks());
		
		return mservice.saveMatch(m);
	}
//	@GetMapping("getMatches")
//	public List<Match> getMatches()
//	{
//		return mservice.getMatches();
//	}
	
	@PostMapping("/generateMatch")
	public Match generateMatch(@RequestBody Match m)
	{
		return mservice.generateMatch(m);

	}
	
	@GetMapping("/matchByTourId")
	public List<Match> getMatchByTourId(@RequestParam("tour") int id){
		Tournament t1 =  new Tournament(id);
		return mservice.getMatchByTourId(t1);
	}
}
