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
	
	@Query("select t from Team t where team_match_status= ?1")
	public List<Team> getTeamsByMatchStatus(int stat);
	
	@Modifying
	@Query("update Team set team_match_status=1 where team_id = ?1")
	public int changeTeamMatchStatus(int t);
}
