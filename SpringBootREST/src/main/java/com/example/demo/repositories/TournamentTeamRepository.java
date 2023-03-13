package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Tournament;
import com.example.demo.entities.TournamentTeam;

@Transactional
public interface TournamentTeamRepository extends JpaRepository<TournamentTeam, Integer> {

	@Query("select t from TournamentTeam t where tournament_id=?1")
	List<TournamentTeam> allTeams(Tournament tid);
	
}