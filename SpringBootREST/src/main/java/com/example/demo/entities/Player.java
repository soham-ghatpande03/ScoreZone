package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
@Table(name="players")
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="PLAYER_ID")
	int player_id;

	@Column(name="TEAM_ID")
	int team_id;
	
	@Column(name="FIRST_NAME")
	String first_name;
	
	@Column(name="LAST_NAME")
	String last_name;
	
	@Column(name="PLAYER_POSITION")
	String player_position;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="PLAYER_BIRTHDATE")
	Date player_birthdate;
	
	@Column(name="GOALS")
	int goals;
	
	
	@Column(name="PLAYER_STATUS")
	int player_status;
	
	
	

	public Player(int player_id, int team_id, String first_name, String last_name, String player_position,
			Date player_birthdate, int goals, int player_status) {
		super();
		this.player_id = player_id;
		this.team_id = team_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.player_position = player_position;
		this.player_birthdate = player_birthdate;
		this.goals = goals;
		this.player_status = player_status;
	}

	public Player() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPlayer_id() {
		return player_id;
	}

	public void setPlayer_id(int player_id) {
		this.player_id = player_id;
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getPlayer_position() {
		return player_position;
	}

	public void setPlayer_position(String player_position) {
		this.player_position = player_position;
	}

	public Date getPlayer_birthdate() {
		return player_birthdate;
	}

	public void setPlayer_birthdate(Date player_birthdate) {
		this.player_birthdate = player_birthdate;
	}

	public int getGoals() {
		return goals;
	}

	public void setGoals(int goals) {
		this.goals = goals;
	}

	public int getPlayer_status() {
		return player_status;
	}

	public void setPlayer_status(int player_status) {
		this.player_status = player_status;
	}
	

}
