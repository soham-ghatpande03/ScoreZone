package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Match;
import com.example.demo.services.MatchService;

@RestController
public class MatchController {

	@Autowired
	MatchService mservice;
	
	@GetMapping("getMatches")
	public List<Match> getMatches()
	{
		return mservice.getMatches();
	}
	
	@PostMapping("/generateMatch")
	public Match generateMatch(@RequestBody Match m)
	{
		return mservice.generateMatch(m);
	}
}
