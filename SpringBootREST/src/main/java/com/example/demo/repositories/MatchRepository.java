package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Match;

@Transactional
public interface MatchRepository extends JpaRepository<Match, Integer> {

}
