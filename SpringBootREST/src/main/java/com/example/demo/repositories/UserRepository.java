package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where username=?1 and password =?2")
	public Optional<User> getLogin(String uid ,String pwd); // data maynot be present hence using Optional
}
