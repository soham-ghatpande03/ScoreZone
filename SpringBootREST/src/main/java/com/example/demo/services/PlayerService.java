package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Player;
import com.example.demo.repositories.PlayerRepository;

@Service
public class PlayerService {
	
	@Autowired
	PlayerRepository prepo;
	
	public List<Player> getAll(){
		return prepo.findAll();		
	}

	public Player savePlayer(Player p) {
		return prepo.save(p);
	}
	
	public List<Player> getPlayersByTeam(int id)
	{
		return prepo.getPlayersByTeam(id);
	}
	
}
