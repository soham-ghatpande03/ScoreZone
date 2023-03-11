package com.example.demo.entities;

import java.sql.Date;

public class DummyPlayer {


	int uid,status,team_id,goals;
	String fname,lname,position;
	Date bdate;
	
	
	public DummyPlayer() {
		// TODO Auto-generated constructor stub
	}


	public DummyPlayer(int uid, int status, int team_id, int goals, String fname, String lname, String position,
			Date bdate) {
		super();
		this.uid = uid;
		this.status = status;
		this.team_id = team_id;
		this.goals = goals;
		this.fname = fname;
		this.lname = lname;
		this.position = position;
		this.bdate = bdate;
	}


	public int getUid() {
		return uid;
	}


	public void setUid(int uid) {
		this.uid = uid;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public int getTeam_id() {
		return team_id;
	}


	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}


	public int getGoals() {
		return goals;
	}


	public void setGoals(int goals) {
		this.goals = goals;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getPosition() {
		return position;
	}


	public void setPosition(String position) {
		this.position = position;
	}


	public Date getBdate() {
		return bdate;
	}


	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}

}
