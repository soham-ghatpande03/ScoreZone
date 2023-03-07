package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Team;
import com.example.demo.entities.TournamentTeam;

@Repository
public interface TournamentTeamRepository extends JpaRepository<TournamentTeam, Integer> {
	
	
}
