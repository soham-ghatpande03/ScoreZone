package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Match;
import com.example.demo.repositories.MatchRepository;

@Service
public class MatchService {
	
	@Autowired
	MatchRepository mrepo;
	
	public List<Match> getAll()
	{
		return mrepo.findAll();
	}
	
	public Match saveMatch(Match m) 
	{
		return mrepo.save(m);
	}
}
