package com.example.demo.controllers;

import java.io.IOException;
import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Team;
import com.example.demo.services.TeamService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TeamController {
	
	@Autowired
	TeamService teservice;
	
	@GetMapping("/teams")
	public List<Team> getAll()
	{
		return teservice.getAll();
	}
	
	@PostMapping("/saveTeam")
	public Team savePlayer(@RequestBody Team te) {
		return teservice.saveTeam(te);
	}
	
	@PostMapping(value="/uploadLogo/{temid}",consumes="multipart/form-data")
	public boolean uploadLogo(@PathVariable("temid") int temid, @RequestBody MultipartFile file) {
		System.out.println("hiiicontroller");
		boolean flag=true;
		try {
			flag = teservice.upload(temid, file.getBytes());
	}
		catch(Exception e) {
			flag=false;
		}
		
		return flag;
	}
	

	
	
	
	
	
	
}
