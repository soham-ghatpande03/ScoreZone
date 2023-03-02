package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyTeam;
import com.example.demo.entities.Team;
import com.example.demo.entities.User;
import com.example.demo.services.TeamService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TeamController {
	
	@Autowired
	TeamService teservice;
	
	@Autowired
	UserService uservice;
	
	
	@GetMapping("/getTeams")
	public List<Team> getAll()
	{
		return teservice.getAll();
	}
	
	@GetMapping("/getTeamsNames")
	public List<Team> getTeamsNames()
	{
		return teservice.getTeamsNames();
	}
	
	@PostMapping("/saveTeam")
	public Team saveTeam(@RequestBody DummyTeam dte) 
	{
		System.out.println(dte);
		User teamM = uservice.getUserById(dte.getTeam_manager_id());
		Team t = new Team(dte.getTeam_name(),teamM ,dte.getRegistration_date(), dte.getTeam_description(), dte.getTeam_logo());
		System.out.println(t);
		return teservice.saveTeam(t);
	}
}
