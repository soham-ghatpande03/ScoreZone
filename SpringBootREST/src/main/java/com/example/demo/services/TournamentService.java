package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Team;
import com.example.demo.entities.Tournament;
import com.example.demo.repositories.TournamentRepository;

@Service
public class TournamentService {
	
	@Autowired
	TournamentRepository trepo;
	
	public List<Tournament> getAll()
	{
		return trepo.findAll();
	}
	
	public Tournament getById(int id) {
		return trepo.findById(id).get();
	}
	
	public Tournament saveTournament(Tournament t) 
	{
		return trepo.save(t);
	}
	
	public List<Tournament> getTourById(int id)
	{
		return trepo.getTourById(id);
	}

	public List<Team> getParticipatedTeams(int tmid, int tid) {
		return trepo.getParticipatedTeams(tmid, tid);
	}

}
