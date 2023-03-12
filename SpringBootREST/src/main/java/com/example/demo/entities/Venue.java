package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="venues")
public class Venue {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="VENUE_ID")
	int venue_id;
	
	@Column(name="VENUE_NAME")
	String venue_name;
	
	@Column(name="VENUE_CITY")
	String venue_city;

	public Venue(String venue_name, String venue_city) {
		super();
		this.venue_name = venue_name;
		this.venue_city = venue_city;
	}

	public Venue() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getVenue_id() {
		return venue_id;
	}

	public void setVenue_id(int venue_id) {
		this.venue_id = venue_id;
	}

	public String getVenue_name() {
		return venue_name;
	}

	public void setVenue_name(String venue_name) {
		this.venue_name = venue_name;
	}

	public String getVenue_city() {
		return venue_city;
	}

	public void setVenue_city(String venue_city) {
		this.venue_city = venue_city;
	}
	
	
	
	
}
