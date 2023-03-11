package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyUser;
import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.MatchUpdator;
import com.example.demo.entities.User;
import com.example.demo.entities.UserType;
import com.example.demo.services.UserService;
import com.example.demo.services.UserTypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService uservice;
	

	@Autowired
	UserTypeService utservice;
	
	@GetMapping("/users")
	public List<User> getAll()
	{
		return uservice.getAll();
	}
	
	@GetMapping("/getMatchUpdatersId")
	public List<MatchUpdator> getMatchUpdatersId(@RequestParam("tmid") int tmid)
	{
		return uservice.getMatchUpdatersId(tmid);
	}
	
	@GetMapping("/getMU")
	public User getMU(@RequestParam("uid") int uid)
	{
		return uservice.getMU(uid);
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
	public User saveUser(@RequestBody DummyUser u1 ) {
		
		System.out.print(u1);
		UserType ut1 = utservice.getById(u1.getType_id());
		User u = new User(u1.getFname(),u1.getLname(),u1.getEmail(),u1.getContact(),u1.getUsername(),u1.getPassword(),ut1,u1.getStatus(),u1.getQ_id(),u1.getQanswer());
		return uservice.saveUser(u);
	}
	
	@GetMapping("/approveTourMan")
	public List<User> approveTourMan() {
		
		return uservice.approveTourMan();
	}
	
	@GetMapping("/approveTeamMan")
	public List<User> approveTeamMan() {
		UserType ut= utservice.getById(2);
		return uservice.approveTeamMan(ut);
	}
	
	@GetMapping("/updateTourManStatus")
	public int updateTourManStatus(@RequestParam("uid") int id)
	{
		return uservice.updateTourManStatus(id);
	}
	
	@GetMapping("/updateTeamManStatus")
	public boolean updateTeamManStatus(@RequestParam("uid") int id)
	{
		return uservice.updateTeamManStatus(id);
	}
}
