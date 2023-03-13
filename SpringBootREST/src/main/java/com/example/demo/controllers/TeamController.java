package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping("/getTeamsByMatchStatus")
	public List<Team> getTeamsByMatchStatus()
	{
		return teservice.getTeamsByMatchStatus();
	}
	
	@GetMapping("/changeTeamMatchStatus")
	public boolean changeTeamMatchStatus(@RequestParam("t1") int t1, @RequestParam("t2") int t2)
	{
		int a = teservice.changeTeamMatchStatus(t1);
		int b = teservice.changeTeamMatchStatus(t2);
		if(a>=1 && b>=1)
			return true;
		return false;
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
	
	@GetMapping("/getTeamByTManId")
	public Team getTeamByTManId(@RequestParam("uid") int id)
	{
		return teservice.getTeamByTManId(id);
	}
	
	////last day change
	@GetMapping("/getTeamNameById")
	public String getTeamNameById(@RequestParam("teamid") int id)
	{
		return teservice.getTeamNameById(id);
	}
	
	
	
	@GetMapping("/changeTeamMatchStatusWin")
	public int changeTeamMatchStatusWin(@RequestParam("teamid") int id)
	{
		return teservice.changeTeamMatchStatusWin(id);
	}
	
	
	@GetMapping("/changeTeamMatchStatusLoose")
	public int changeTeamMatchStatusLoose(@RequestParam("teamid") int id)
	{
		return teservice.changeTeamMatchStatusLoose(id);
	}
	
	
}
