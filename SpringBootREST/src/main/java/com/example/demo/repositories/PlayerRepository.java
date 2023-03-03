package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.*;

import com.example.demo.entities.Player;

@Transactional
@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

	@Query("select p from Player p where team_id = ?1")
	public List<Player> getPlayersByTeam(int id);
}
