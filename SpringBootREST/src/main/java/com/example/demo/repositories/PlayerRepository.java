package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import com.example.demo.entities.Player;

@Transactional
@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
