package com.example.demo.entities;

public class DummyUser {

	
	int uid,status,type_id,q_id;
	String fname,lname,email,contact,username,password,qanswer;
	public DummyUser() {
		// TODO Auto-generated constructor stub
	}

	public DummyUser(int status, int type_id, int q_id, String fname, String lname, String email,
			String contact, String username, String password, String qanswer) {
		super();
		this.status = status;
		this.type_id = type_id;
		this.q_id = q_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.username = username;
		this.password = password;
		this.qanswer = qanswer;
	}



	public int getQ_id() {
		return q_id;
	}


	public void setQ_id(int q_id) {
		this.q_id = q_id;
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
	public int getType_id() {
		return type_id;
	}
	public void setType_id(int type_id) {
		this.type_id = type_id;
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
	public String getQanswer() {
		return qanswer;
	}
	public void setQanswer(String qanswer) {
		this.qanswer = qanswer;
	}



	@Override
	public String toString() {
		return "DummyUser [uid=" + uid + ", status=" + status + ", type_id=" + type_id + ", q_id=" + q_id + ", fname="
				+ fname + ", lname=" + lname + ", email=" + email + ", contact=" + contact + ", username=" + username
				+ ", password=" + password + ", qanswer=" + qanswer + "]";
	}
	
	

}
