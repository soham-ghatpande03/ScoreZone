package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Venue;
import com.example.demo.services.VenueService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VenueController {

	@Autowired
	VenueService vservice;
	
	
	@GetMapping("/allVenues")
	public List<Venue> getAll()
	{
		return vservice.getAll();
	}
	
	@PostMapping("/saveVenue")
	public Venue saveVenue(@RequestBody Venue v)
	{
		return vservice.saveVenue(v);
	}

}
