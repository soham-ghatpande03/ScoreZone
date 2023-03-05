package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Team;
import com.example.demo.entities.TournamentTeam;

@Transactional
public interface TournamentTeamRepository extends JpaRepository<TournamentTeam, Integer> {
	
	@Query("select t.team_id from Team t where t.team_manager_id = :tmid")
	public int getTeamId(int tmid);
}
