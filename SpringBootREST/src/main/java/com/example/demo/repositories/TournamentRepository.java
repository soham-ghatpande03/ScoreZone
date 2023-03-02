package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.demo.entities.Tournament;

@Transactional
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {

	@Query("select t from Tournament t where tournament_manager_id = ?1 ")
	public List<Tournament> getTourById(int id);
}
