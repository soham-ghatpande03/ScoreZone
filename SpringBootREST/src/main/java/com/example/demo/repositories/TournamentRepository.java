package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Tournament;

@Transactional
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {

}
