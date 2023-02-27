package com.first.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.first.demo.entities.TournamentPlayersEntity;

@Repository
public interface TournamentPlayersRepository extends JpaRepository<TournamentPlayersEntity, Integer> {

}
