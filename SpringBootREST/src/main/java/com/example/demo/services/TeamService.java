package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Team;
import com.example.demo.repositories.TeamRepository;

@Service
public class TeamService {
	
	@Autowired
	TeamRepository terepo;
	
	public List<Team> getAll()
	{
		return terepo.findAll();
	}
	
	public List<Team> getTeamsNames()
	{
		return terepo.getTeamsNames();
	}
	
	public Team getTeamById(int id) 
	{
		return terepo.findById(id).get();
	}
	
	@Modifying
	public Team saveTeam(Team t) 
	{
		return terepo.save(t);
	}
}

