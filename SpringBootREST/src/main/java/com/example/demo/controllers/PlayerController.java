package com.example.demo.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Player;
import com.example.demo.services.PlayerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PlayerController {
	
	@Autowired
	PlayerService pservice;
	
	
	@GetMapping("/allPlayers")
	public List<Player> getAll() {
		return pservice.getAll();
	}
	
	@PostMapping("/savePlayer")
	public Player savePlayer(@RequestBody Player pe) {
		return pservice.savePlayer(pe);
	}
	
	@GetMapping("/getPlayersByTeam")
	public List<Player> getPlayersByTeam(@RequestParam("team_id") int id)
	{
		return pservice.getPlayersByTeam(id);
	}
}
