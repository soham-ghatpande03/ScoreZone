package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.example.demo.entities.TournamentTeam;
import com.example.demo.services.TournamentTeamService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TournamentTeamController {

	@Autowired
	TournamentTeamService tservice;
	
	@GetMapping("/allTournamentTeamID")
	public List<TournamentTeam>getAll(){
		return tservice.getAll();
	}
	
	@GetMapping("/addTeam")
	public boolean addTeam(@RequestParam("tmid") int tmid, @RequestParam("tourid") int tourid)
	{
		return tservice.addTeam(tmid, tourid);
	}
	
	
	@PostMapping("/saveTeamTournamentID")
	public TournamentTeam saveTeamTournamentID(TournamentTeam t) {
		return tservice.saveTeam(t);
		
	}
}
