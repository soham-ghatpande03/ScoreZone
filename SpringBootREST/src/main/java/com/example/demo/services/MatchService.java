package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Match;
import com.example.demo.entities.Tournament;
import com.example.demo.repositories.MatchRepository;

@Service
public class MatchService {
	
	@Autowired
	MatchRepository mrepo;
	
	public List<Match> getMatches()
	{
		return mrepo.findAll();
	}

	public Match saveMatch(Match m) 
	{
		return mrepo.save(m);
	}

	public Match generateMatch(Match m)
	{
		return mrepo.save(m);
	}
	
	public List<Match> getMatchesByTour(Tournament id){
		
		return mrepo.getMatchesByTour(id);
	}
	

}
