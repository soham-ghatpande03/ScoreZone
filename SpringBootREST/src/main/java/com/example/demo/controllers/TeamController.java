package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Team;
import com.example.demo.entities.User;
import com.example.demo.services.TeamService;

@RestController
public class TeamController {
	
	@Autowired
	TeamService teservice;
	
	@GetMapping("/teams")
	public List<Team> getAll()
	{
		return teservice.getAll();
	}
	
	@PostMapping("/saveteam")
	public Team savePlayer(@RequestBody Team t) {
		return teservice.saveTeam(t);
	}
}
