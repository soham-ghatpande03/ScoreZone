package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="players")
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column
	int PLAYER_ID;

	@Column
	int TEAM_ID;
	
	@Column
	String FIRST_NAME;
	
	@Column
	String LAST_NAME;
	
	@Column
	String PLAYER_POSITION;
	
	@Column
	Date PLAYER_BIRTHDATE;
	
	@Column
	int GOALS;
	
	@Column
	int PLAYER_STATUS;
	
	
	
	//Constructor
	
	
	
	
	
	
}
