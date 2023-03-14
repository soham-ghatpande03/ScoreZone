package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.example.demo.entities.MatchUpdator;
import com.example.demo.entities.Player;
import com.example.demo.repositories.MatchUpdatorRepository;

@Service
public class MatchUpdatorService {
	
	@Autowired
	MatchUpdatorRepository murepo;
	
	public List<MatchUpdator> getAll(){
		return murepo.findAll();		
	}

	public MatchUpdator saveMatchUpdator(MatchUpdator m) {
		return murepo.save(m);
	}
	
	public List<MatchUpdator> getTournamentIdByMuId(int id)
	{
		return murepo.getTournamentIdByMuId(id);
	}
	
	//shan change
	public int updateMatchStatus(int matchid)
	{
		return murepo.updateMatchStatus(matchid);
	}
	
	public int endMatch(int matchid)
	{
		return murepo.endMatch(matchid);
	}
	//shan change

}
