package com.first.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import com.first.demo.entities.PlayerEntity;

@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Integer> {

}
