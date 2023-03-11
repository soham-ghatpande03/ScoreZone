package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Team;
import com.example.demo.entities.Tournament;

@Transactional
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {

	@Query("select t from Tournament t where tournament_manager_id = ?1 ")
	public List<Tournament> getTourById(int id);

	
	@Query(value="select * from teams where team_id in((select team_id from tournament_teams "
			+ "where tournament_id in (select tournament_id from tournaments where tournament_id=?2 and tournament_manager_id =?1)))"
			, nativeQuery = true)
	public List<Team> getParticipatedTeams(int tmid, int tid);
	
//	@Query("select t from Team t where t.team_id IN(select to from TournamentTeam to where "
//			+ "to.tournament_id IN(select tto from Tournament tto where tto.tournament_id=?2 and tto.team_id=?1))")
//	public List<Team> getParticipatedTeams(int tmid, int tid);
}
