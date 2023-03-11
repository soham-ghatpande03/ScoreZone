package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.User;
import com.example.demo.entities.UserType;
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
	
	public User getTeamMan(int id) {
		return urepo.getTeamMan(id);
	}
	
	public User getAdmin(int id) {
		return urepo.getAdmin(id);
	}
	
	public User getTourMan(int id) {
		return urepo.getTourMan(id);
	}
	
	public User getMU(int id) {
		return urepo.getMU(id);
	}
	
	public User saveUser(User u) {
		return urepo.save(u);
	}
	
	public User getUserById (int id) 
	{
		return urepo.findById(id).get();
	}
	
	public List<User> approveTourMan()
	{
		return urepo.approveTourMan();
	}
	
	public List<User> approveTeamMan(UserType ut)
	{
		return urepo.approveTeamMan(ut);
	}
	
	public int updateTourManStatus(int id)
	{
		return urepo.updateTourManStatus(id);
	}
	
	public boolean updateTeamManStatus(int id)
	{
		int n = urepo.updateTeamManStatus(id);
	if(n==1) {
		return true;
	}
		
	else
		return false;
	}
	
}
