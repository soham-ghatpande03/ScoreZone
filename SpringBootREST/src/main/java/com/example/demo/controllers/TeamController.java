package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Player;
import com.example.demo.entities.Team;
import com.example.demo.services.TeamService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TeamController {
	
	@Autowired
	TeamService teservice;
	
	@GetMapping("/teams")
	public List<Team> getAll()
	{
		return teservice.getAll();
	}
	
	@PostMapping("/saveTeam")
	public Team savePlayer(@RequestBody Team te) {
		return teservice.saveTeam(te);
	}
	
	
}
