package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Venue;
import com.example.demo.repositories.VenueRepository;


@Service
public class VenueService {

	@Autowired
	VenueRepository vrepos;
	
	public List<Venue> getAll()
	{
		return vrepos.findAll();
	}
	
	public Venue saveVenue(Venue v)
	{
		return vrepos.save(v);
	}
}
