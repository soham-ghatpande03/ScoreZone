package com.example.demo.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyPlayer;
import com.example.demo.entities.Player;
import com.example.demo.entities.Team;
import com.example.demo.services.PlayerService;
import com.example.demo.services.TeamService;

@CrossOrigin(origins = "http://szdb.s3-website-us-east-1.amazonaws.com")
@RestController
public class PlayerController {
	
	@Autowired
	PlayerService pservice;
	
	@Autowired
	TeamService teservice;
	
	@GetMapping("/allPlayers")
	public List<Player> getAll() {
		return pservice.getAll();
	}
	
	@PostMapping("/savePlayer")
	public Player savePlayer(@RequestBody DummyPlayer pe) {
		
		Team t = teservice.getById(pe.getTeam_id());		
		Player p = new Player(t,pe.getFname(),pe.getLname(),pe.getPosition(),pe.getBdate(),pe.getGoals(),pe.getStatus());
		return pservice.savePlayer(p);
	}
	
	@GetMapping("/getPlayersByTeam")
	public List<Player> getPlayersByTeam(@RequestParam("team_id") int id)
	{
		return pservice.getPlayersByTeam(id);
	}
}
