package com.first.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;


@Entity
@Table(name="tournament_teams")
public class TournamentTeamsEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="TOURNAMENT_ID")
	int tournamet_id;
	
	@Column(name="TEAM_ID")
	int team_id;
	
	
}
