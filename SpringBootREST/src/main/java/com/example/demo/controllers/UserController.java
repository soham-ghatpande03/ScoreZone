package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.Player;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService uservice;
	
	@GetMapping("/users")
	public List<User> getAll()
	{
		return uservice.getAll();
	}
	
	@PostMapping("/loginchk")
	public User checkLogin(@RequestBody LoginCheck lchck ) {
		return uservice.getLogin(lchck.getUid(), lchck.getPwd());
	}
	
	@GetMapping("/getuser")
	public User getUser(@RequestParam("uid") int uid ) {
		return uservice.getUser(uid);
	}
	
	@PostMapping("/saveUser")
	public User savePlayer(@RequestBody User ue) {
		return uservice.saveUser(ue);
	}
}
