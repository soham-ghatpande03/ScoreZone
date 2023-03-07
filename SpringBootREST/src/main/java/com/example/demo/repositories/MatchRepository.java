package com.example.demo.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.entities.Match;
import com.example.demo.entities.Tournament;


public interface MatchRepository extends JpaRepository<Match, Integer> {

	@Query("select m from Match m where m.tournament_id = ?1")
	public List<Match> getMatchesByTour(Tournament id);
}
