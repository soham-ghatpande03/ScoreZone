package com.first.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

import com.first.demo.entities.TournamentPlayersEntity;
import com.first.demo.repository.TournamentPlayersRepository;

@Service
public class TournamentPlayersService {
	
	@Autowired
	TournamentPlayersRepository srepo;
	
	public List<TournamentPlayersEntity> getAll() {
		return srepo.findAll();
	}

	@Modifying
	public TournamentPlayersEntity saveTournamentPlayer(TournamentPlayersEntity tp) {
		// TODO Auto-generated method stub
		return srepo.save(tp);
	}
	
	
}
