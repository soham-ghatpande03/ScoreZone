package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Venue;


@Transactional
public interface VenueRepository extends JpaRepository<Venue, Integer> {

}
