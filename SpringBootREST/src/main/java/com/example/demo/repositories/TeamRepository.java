package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Team;

@Transactional
public interface TeamRepository extends JpaRepository<Team, Integer> {
	
	@Query(value = "SELECT * FROM teams t WHERE t.team_manager_id = ?1",
            nativeQuery=true
    )
	public Team getTeamByTManId(int id);
	
	@Query("select t from Team t where team_match_status=0")
	public List<Team> getTeamsByMatchStatus();
	
	@Modifying
	@Query("update Team set team_match_status=1 where team_id = ?1")
	public int changeTeamMatchStatus(int t);
	
	/////
	@Modifying
	@Query("update Team set team_match_status= team_match_status+1 where team_id = ?1")
	public int changeTeamMatchStatusWin(int t);
	
	@Modifying
	@Query("update Team set team_match_status=0 where team_id = ?1")
	public int changeTeamMatchStatusLoose(int t);
	
	
	@Query(value = "SELECT t.team_name FROM teams t WHERE t.team_id = ?1",
            nativeQuery=true
    )
	public String getTeamNameById(int id);
	
	
	
}
