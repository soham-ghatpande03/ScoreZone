package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="UID")
	int uid;
	
	@Column(name="FIRST_NAME")
	String first_name;
	
	@Column(name="LAST_NAME")
	String last_name;
	
	@Column(name="EMAIL")
	String email;
	
	@Column(name="CONTACT")
	String contact;
	
	@Column(name="USERNAME")
	String username;
	
	@Column(name="PASSWORD")
	String password;
	
	@Column(name="TYPE_ID")
	Integer type_id;
	
	@Column(name="USER_STATUS")
	int user_status;
	
	@Column(name="SECURITY_QID")
	int security_qid;
	
	@Column(name="Q_ANSWER")
	String q_answer;

	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String first_name, String last_name, String email, String contact, String username, String password,
			Integer type_id, int user_status, int security_qid, String q_answer) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact = contact;
		this.username = username;
		this.password = password;
		this.type_id = type_id;
		this.user_status = user_status;
		this.security_qid = security_qid;
		this.q_answer = q_answer;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getType_id() {
		return type_id;
	}

	public void setType_id(Integer type_id) {
		this.type_id = type_id;
	}

	public int getUser_status() {
		return user_status;
	}

	public void setUser_status(int user_status) {
		this.user_status = user_status;
	}

	public int getSecurity_qid() {
		return security_qid;
	}

	public void setSecurity_qid(int security_qid) {
		this.security_qid = security_qid;
	}

	public String getQ_answer() {
		return q_answer;
	}

	public void setQ_answer(String q_answer) {
		this.q_answer = q_answer;
	}
	
	
	
}
	
