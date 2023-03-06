package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

import com.example.demo.entities.TournamentTeam;
import com.example.demo.entities.TournamentTeamId;
import com.example.demo.repositories.TournamentTeamRepository;


@Service
public class TournamentTeamService {
	@Autowired
	TournamentTeamRepository trepo;
	
	public List<TournamentTeam> getAll(){
		return trepo.findAll();
	}
	
	public TournamentTeam saveTeam(TournamentTeam t) {
		return trepo.save(t);
		
	}
}
