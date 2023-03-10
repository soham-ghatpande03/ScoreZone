package com.example.demo.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="match_updator_task")
public class MatchUpdator {
	
	@Id	
	@Column(name="MATCH_UPDATOR_ID")
	int match_updator_id;
	
	@Column(name="TOURNAMENT_ID")
	int tournament_id;

	public MatchUpdator(int match_updator_id, int tournament_id) {
		super();
		this.match_updator_id = match_updator_id;
		this.tournament_id = tournament_id;
	}
	
	public  MatchUpdator()  {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getMatch_updator_id() {
		return match_updator_id;
	}

	public void setMatch_updator_id(int match_updator_id) {
		this.match_updator_id = match_updator_id;
	}

	public int getTournament_id() {
		return tournament_id;
	}

	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}
	
	
	

}
