package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public List<User> getAll()
	{
		return urepo.findAll();
	}
	
	public User getLogin(String uid, String pwd) {
		User u;
		Optional<User> ou = urepo.getLogin(uid, pwd);
		try 
		{
			u = ou.get();
		}
		catch (Exception e) {
			u = null;// TODO: handle exception
		}
		return u;
		
	}
	
	public User getUser(int id) {
		return urepo.getUser(id);
	}
	
	public User 
}
