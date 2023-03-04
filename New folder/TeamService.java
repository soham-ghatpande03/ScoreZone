package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.kotlin.CoroutineCrudRepository;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Player;
import com.example.demo.entities.Team;
import com.example.demo.entities.User;
import com.example.demo.repositories.TeamRepository;

@Service
public class TeamService {
	
	@Autowired
	TeamRepository terepo;
	
	public List<Team> getAll()
	{
		return terepo.findAll();
	}

	public Team saveTeam(Team te) {
		// TODO Auto-generated method stub
		return terepo.save(te);
	}
	
	public boolean upload(int id,byte[] logo) {
		if(terepo.uploadLogo(id, logo)==1) 
			return true;
		else 
			return false;
	
		
	}
}

