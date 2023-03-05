package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

import com.example.demo.entities.Team;
import com.example.demo.entities.TournamentTeam;
import com.example.demo.repositories.TournamentTeamRepository;


@Service
public class TournamentTeamService {
	@Autowired
	TournamentTeamRepository trepo;
	
	public List<TournamentTeam> getAll(){
		return trepo.findAll();
	}
	
	public boolean addTeam(int tmid, int tourid)
	{
		int tid = getTeamId(tmid);
		TournamentTeam tt = new TournamentTeam(tourid, tid);
		TournamentTeam n = trepo.save(tt);
		if(n.getTeam_id()>0)
			return true;
		return false;
	}
	
	public int getTeamId(int tmid)
	{
		return trepo.getTeamId(tmid);
	}
	
	public TournamentTeam saveTeam(@RequestBody TournamentTeam t) {
		return trepo.save(t);
		
	}
}
