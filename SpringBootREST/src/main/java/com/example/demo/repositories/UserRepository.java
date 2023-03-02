package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where username=?1 and password =?2")
	public Optional<User> getLogin(String uid ,String pwd); // data maynot be present hence using Optional

	
	@Query("select u from User u where uid = ?1 ")
	public User getUser(int id);
	
	@Query("select u from User u where user_status = 0 and type_id = 1")
	public List<User> approveTourMan();
	
	@Query("select u from User u where user_status = 0 and type_id = 2")
	public List<User> approveTeamMan();
	
}
