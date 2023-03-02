package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
}
