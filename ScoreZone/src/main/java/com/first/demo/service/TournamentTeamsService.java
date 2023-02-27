package com.first.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

import com.first.demo.entities.TournamentTeamsEntity;
import com.first.demo.repository.TournamentTeamsRepository;


@Service
public class TournamentTeamsService {
	@Autowired
	TournamentTeamsRepository trepo;
	
	public List<TournamentTeamsEntity> getAll(){
		return trepo.findAll();
	}
	
	public TournamentTeamsEntity saveTeam(@RequestBody TournamentTeamsEntity t) {
		return trepo.save(t);
		
	}
}
