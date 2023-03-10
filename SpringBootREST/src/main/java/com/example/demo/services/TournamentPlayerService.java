package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

import com.example.demo.entities.TournamentPlayer;
import com.example.demo.repositories.TournamentPlayerRepository;

@Service
public class TournamentPlayerService {
	
	@Autowired
	TournamentPlayerRepository srepo;
	
	public List<TournamentPlayer> getAll() {
		return srepo.findAll();
	}

	public TournamentPlayer saveTournamentPlayer(@RequestBody TournamentPlayer tp) {
		// TODO Auto-generated method stub
		return srepo.save(tp);
	}
	
	
}
