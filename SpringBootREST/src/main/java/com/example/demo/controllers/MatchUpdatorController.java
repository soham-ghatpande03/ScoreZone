package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.MatchUpdator;
import com.example.demo.services.MatchUpdatorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MatchUpdatorController {
	
	@Autowired
	MatchUpdatorService muservice;
	
	@PostMapping("/saveMatchUpdator")
	public MatchUpdator saveMatchUpdator(@RequestBody MatchUpdator mu) {
		return muservice.saveMatchUpdator(mu);
	}
	
	@GetMapping("/getMatchesByMuId")
	public List<MatchUpdator> getPlayersByTeam(@RequestParam("mu_id") int id)
	{
		return muservice.getTournamentIdByMuId(id);
	}
	
	@GetMapping("/updateMatchStatus")
	public int updateMatchStatus(@RequestParam("matchid") int id)
	{
		return muservice.updateMatchStatus(id);
	}
}
