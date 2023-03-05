package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.*;

import com.example.demo.entities.Player;

@Transactional
public interface PlayerRepository extends JpaRepository<Player, Integer> {


	@Query(value = "select * from players p inner join teams t on p.team_id = t.team_id  WHERE t.team_manager_id = ?1 ",
            nativeQuery=true
    )
	public List<Player> getPlayersByTeam(int id);
}
