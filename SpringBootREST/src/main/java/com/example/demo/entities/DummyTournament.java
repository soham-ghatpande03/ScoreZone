package com.example.demo.entities;

import java.sql.Date;


public class DummyTournament {
	
	
	int tournament_id;
	
	String tournament_title;

	int tournament_manager_id;
	
	Date start_date;
	
	Date end_date;
	
	Date participation_deadline;
	
	int tournament_status;

	byte[] tournament_logo;

	public DummyTournament() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DummyTournament(int tournament_id, String tournament_title, int tournament_manager_id, Date start_date,
			Date end_date, Date participation_deadline, int tournament_status, byte[] tournament_logo) {
		super();
		this.tournament_id = tournament_id;
		this.tournament_title = tournament_title;
		this.tournament_manager_id = tournament_manager_id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.participation_deadline = participation_deadline;
		this.tournament_status = tournament_status;
		this.tournament_logo = tournament_logo;
	}

	public int getTournament_id() {
		return tournament_id;
	}

	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	public String getTournament_title() {
		return tournament_title;
	}

	public void setTournament_title(String tournament_title) {
		this.tournament_title = tournament_title;
	}

	public int getTournament_manager_id() {
		return tournament_manager_id;
	}

	public void setTournament_manager_id(int tournament_manager_id) {
		this.tournament_manager_id = tournament_manager_id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public Date getParticipation_deadline() {
		return participation_deadline;
	}

	public void setParticipation_deadline(Date participation_deadline) {
		this.participation_deadline = participation_deadline;
	}

	public int getTournament_status() {
		return tournament_status;
	}

	public void setTournament_status(int tournament_status) {
		this.tournament_status = tournament_status;
	}

	public byte[] getTournament_logo() {
		return tournament_logo;
	}

	public void setTournament_logo(byte[] tournament_logo) {
		this.tournament_logo = tournament_logo;
	}

	
}
