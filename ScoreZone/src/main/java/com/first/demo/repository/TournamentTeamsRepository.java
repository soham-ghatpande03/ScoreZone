package com.first.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.first.demo.entities.TournamentTeamsEntity;

@Repository
public interface TournamentTeamsRepository extends JpaRepository<TournamentTeamsEntity, Integer> {
	
}
