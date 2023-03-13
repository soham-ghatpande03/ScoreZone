package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


import com.example.demo.entities.Team;

@Transactional
public interface TeamRepository extends JpaRepository<Team, Integer> {
	
	@Query(value = "SELECT * FROM teams t WHERE t.team_manager_id = ?1",
            nativeQuery=true
    )
	public Team getTeamByTManId(int id);

	

	//@Query(value = "select * from teams where team_match_status = ?1 ",nativeQuery=true)
	@Query(value = "select * from teams t where "
			+ "team_id in "
			+ "(select team_id from tournament_teams tt inner join tournaments tou on tt.TOURNAMENT_ID = tou.TOURNAMENT_ID "
			+ " where t.team_match_status = ?1 and tou.TOURNAMENT_ID= ?2)",
            nativeQuery=true
    )
	public List<Team> getTeamsByMatchStatus(int stat , int tt);
	
	
	@Modifying
	@Query("update Team set team_match_status=team_match_status+1 where team_id = ?1")
	public int changeTeamMatchStatus(int t);
	
	@Modifying
	@Query("update Team set team_match_status= team_match_status+1 where team_id = ?1")
	public int changeTeamMatchStatusWin(int t);
	
	@Modifying
	@Query("update Team set team_match_status=0 where team_id = ?1")
	public int changeTeamMatchStatusLoose(int t);
}
