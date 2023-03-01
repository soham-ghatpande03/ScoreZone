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
@Table(name="tournaments")
public class Tournament {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="TOURNAMENT_ID")
	int tournament_id;
	
	@Column(name="TOURNAMENT_TITLE")
	String tournament_title;
	
	@Column(name="TOURNAMENT_MANAGER_ID")
	int tournament_manager_id;
	

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="START_DATE")
	Date start_date;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="END_DATE")
	Date end_date;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="PARTICIPATION_DEADLINE")
	Date participation_deadline;
	
	@Column(name="TOURNAMENT_STATUS")
	int tournament_status;
	
	@Column(name="TOURNAMENT_LOGO")
	byte[] tournament_logo;

	public Tournament() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Tournament(int tournament_id, String tournament_title, int tournament_manager_id, Date start_date,
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
	

	public Tournament(String tournament_title, int tournament_manager_id, Date start_date, Date end_date,
			Date participation_deadline) {
		super();
		this.tournament_title = tournament_title;
		this.tournament_manager_id = tournament_manager_id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.participation_deadline = participation_deadline;
	}


	public byte[] getTournament_logo() {
		return tournament_logo;
	}


	public void setTournament_logo(byte[] tournament_logo) {
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

	@Override
	public String toString() {
		return "Tournament [tournament_id=" + tournament_id + ", tournament_title=" + tournament_title
				+ ", tournament_manager_id=" + tournament_manager_id + ", start_date=" + start_date + ", end_date="
				+ end_date + ", participation_deadline=" + participation_deadline + ", tournament_status="
				+ tournament_status + "]";
	}

}
