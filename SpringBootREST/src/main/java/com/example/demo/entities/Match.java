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
@Table(name="matches")
public class Match {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="MATCH_ID")
	int match_id;
	
	@Column(name="TOURNAMENT_ID")
	int tournament_id;
	
	@Column(name="TEAM_ID_A")
	int team_id_a;
	
	@Column(name="TEAM_ID_B")
	int team_id_b;
	
	@Column(name="TEAM_A_SCORE")
	int team_a_score;
	
	@Column(name="TEAM_B_SCORE")
	int team_b_score;
	
	@Column(name="MATCH_STATUS")
	int match_status;
	
	@Column(name=" MATCH_VENUE")
	String match_venue;
	

	@JsonFormat(pattern = "DD-MM-YYYY")
	@Column(name="MATCH_DATE")
	Date match_date;
	
	@Column(name="REMARKS")
	String remarks;

	public Match() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Match(int match_id, int tournament_id, int team_id_a, int team_id_b, int team_a_score, int team_b_score,
			int match_status, String match_venue, Date match_date, String remarks) {
		super();
		this.match_id = match_id;
		this.tournament_id = tournament_id;
		this.team_id_a = team_id_a;
		this.team_id_b = team_id_b;
		this.team_a_score = team_a_score;
		this.team_b_score = team_b_score;
		this.match_status = match_status;
		this.match_venue = match_venue;
		this.match_date = match_date;
		this.remarks = remarks;
	}

	public int getMatch_id() {
		return match_id;
	}

	public void setMatch_id(int match_id) {
		this.match_id = match_id;
	}

	public int getTournament_id() {
		return tournament_id;
	}

	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	public int getTeam_id_a() {
		return team_id_a;
	}

	public void setTeam_id_a(int team_id_a) {
		this.team_id_a = team_id_a;
	}

	public int getTeam_id_b() {
		return team_id_b;
	}

	public void setTeam_id_b(int team_id_b) {
		this.team_id_b = team_id_b;
	}

	public int getTeam_a_score() {
		return team_a_score;
	}

	public void setTeam_a_score(int team_a_score) {
		this.team_a_score = team_a_score;
	}

	public int getTeam_b_score() {
		return team_b_score;
	}

	public void setTeam_b_score(int team_b_score) {
		this.team_b_score = team_b_score;
	}

	public int getMatch_status() {
		return match_status;
	}

	public void setMatch_status(int match_status) {
		this.match_status = match_status;
	}

	public String getMatch_venue() {
		return match_venue;
	}

	public void setMatch_venue(String match_venue) {
		this.match_venue = match_venue;
	}

	public Date getMatch_date() {
		return match_date;
	}

	public void setMatch_date(Date match_date) {
		this.match_date = match_date;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
}
