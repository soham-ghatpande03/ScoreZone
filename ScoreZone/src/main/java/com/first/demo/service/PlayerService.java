package com.first.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.first.demo.entities.PlayerEntity;
import com.first.demo.repository.PlayerRepository;

@Service
public class PlayerService {
	
	@Autowired
	PlayerRepository prepo;
	
	public List<PlayerEntity> getAll(){
		return prepo.findAll();		
	}

	public PlayerEntity savePlayer(@RequestBody PlayerEntity p) {
		return prepo.save(p);
	}
	
	
}
