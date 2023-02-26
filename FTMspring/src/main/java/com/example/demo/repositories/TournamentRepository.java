package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Tournament;

public interface TournamentRepository extends JpaRepository<Tournament, Integer> {

}
