package com.first.demo.controllers;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.first.demo.entities.PlayerEntity;
import com.first.demo.service.PlayerService;

@Transactional
@RestController
public class PlayerController {
	
	@Autowired
	PlayerService pservice;
	
	
	@GetMapping("/allPlayers")
	public List<PlayerEntity> getAll() {
		return pservice.getAll();
	}
	
	
	@PostMapping("/savePlayer")
	public PlayerEntity savePlayer(PlayerEntity pe) {
		return pservice.savePlayer(pe);
	}

}
