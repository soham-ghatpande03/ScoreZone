package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Team;


@Transactional
@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
	
	
	@Modifying
	@Query("update Team set TEAM_LOGO =:file where team_manager_id=:id")
	public int uploadLogo(int id ,byte[] file);

}
