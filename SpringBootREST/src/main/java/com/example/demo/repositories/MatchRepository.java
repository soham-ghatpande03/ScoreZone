package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Match;
import com.example.demo.entities.MatchUpdator;
import com.example.demo.entities.Tournament;

@Transactional
public interface MatchRepository extends JpaRepository<Match, Integer> {

	@Query("select m from Match m where m.tournament_id = ?1 and match_status=0")
	public List<Match> getMatchByTourId(Tournament t);
	
	@Query(value = "select * from matches WHERE match_status = 1 ",
            nativeQuery=true
    )
	public Match getTeamNamesByMatchStatus();
	
	
	@Modifying
	@Query("update Match set team_a_score=?1, team_b_score=?2 where match_id=?3")
    public int updateScores(int scoreA , int scoreB, int matchId);
	
	
	
	
}
