package com.first.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import com.first.demo.entities.PlayerEntity;

@Transactional
@Repository
public interface PlayerRepository extends JpaRepository<PlayerEntity, Integer> {

}
