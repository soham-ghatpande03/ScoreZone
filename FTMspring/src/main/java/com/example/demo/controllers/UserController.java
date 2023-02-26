package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
public class UserController {

	@Autowired
	UserService uservice;
	
	@GetMapping("/users")
	public List<User> getAll()
	{
		return uservice.getAll();
	}
}
