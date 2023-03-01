package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Match;
import com.example.demo.services.MatchService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MatchController {
	
	@Autowired
	MatchService mservice;
	
	@GetMapping("/getMatches")
	public List<Match> getMatches()
	{
		return mservice.getMatches();
	}
	
	@PostMapping("/generateMatches")
	public Match generateMatchs(@RequestBody Match m)
	{
		return mservice.generateMatches(m);
	}
}
