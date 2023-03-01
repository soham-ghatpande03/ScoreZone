package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_type")
public class UserType {

	
	@Id
	@Column(name="TYPE_ID")
	int type_id;
	
	@Column(name="TYPE_VALUE")
	String type_value;
	
	public UserType() {
		// TODO Auto-generated constructor stub
	}

	public int getType_id() {
		return type_id;
	}

	public void setType_id(int type_id) {
		this.type_id = type_id;
	}

	public String getType_value() {
		return type_value;
	}

	public void setType_value(String type_value) {
		this.type_value = type_value;
	}

	
}
