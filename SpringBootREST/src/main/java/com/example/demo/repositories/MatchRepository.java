package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Match;
import com.example.demo.entities.Tournament;

@Transactional
public interface MatchRepository extends JpaRepository<Match, Integer> {

	@Query("select m from Match m where m.tournament_id = ?1 ")
	public List<Match> getMatchByTourId(Tournament t);
	
	@Modifying
	@Query(value = "update matches set team_a_score =?1 ,team_b_score = ?2 where match_id = ?3",
            nativeQuery=true)
            
            public int updateScores(int scoreA , int scoreB, int matchId);
}
