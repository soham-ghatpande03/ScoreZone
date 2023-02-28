package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int UID;
	
	@Column
	String FIRST_NAME, LAST_NAME, EMAIL, CONTACT, USERNAME, PASSWORD;
	
	@Column
	int USER_TYPE, USER_STATUS;
	
	@Column
	int SECURITY_QID;
	
	@Column
	String Q_ANSWER;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int uID, String fIRST_NAME, String lAST_NAME, String eMAIL, String cONTACT, String uSERNAME,
			String pASSWORD, int uSER_TYPE, int uSER_STATUS, int sECURITY_QID, String q_ANSWER) {
		super();
		UID = uID;
		FIRST_NAME = fIRST_NAME;
		LAST_NAME = lAST_NAME;
		EMAIL = eMAIL;
		CONTACT = cONTACT;
		USERNAME = uSERNAME;
		PASSWORD = pASSWORD;
		USER_TYPE = uSER_TYPE;
		USER_STATUS = uSER_STATUS;
		SECURITY_QID = sECURITY_QID;
		Q_ANSWER = q_ANSWER;
	}

	public int getUID() {
		return UID;
	}

	public void setUID(int uID) {
		UID = uID;
	}

	public String getFIRST_NAME() {
		return FIRST_NAME;
	}

	public void setFIRST_NAME(String fIRST_NAME) {
		FIRST_NAME = fIRST_NAME;
	}

	public String getLAST_NAME() {
		return LAST_NAME;
	}

	public void setLAST_NAME(String lAST_NAME) {
		LAST_NAME = lAST_NAME;
	}

	public String getEMAIL() {
		return EMAIL;
	}

	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}

	public String getCONTACT() {
		return CONTACT;
	}

	public void setCONTACT(String cONTACT) {
		CONTACT = cONTACT;
	}

	public String getUSERNAME() {
		return USERNAME;
	}

	public void setUSERNAME(String uSERNAME) {
		USERNAME = uSERNAME;
	}

	public String getPASSWORD() {
		return PASSWORD;
	}

	public void setPASSWORD(String pASSWORD) {
		PASSWORD = pASSWORD;
	}

	public int getUSER_TYPE() {
		return USER_TYPE;
	}

	public void setUSER_TYPE(int uSER_TYPE) {
		USER_TYPE = uSER_TYPE;
	}

	public int getUSER_STATUS() {
		return USER_STATUS;
	}

	public void setUSER_STATUS(int uSER_STATUS) {
		USER_STATUS = uSER_STATUS;
	}

	public int getSECURITY_QID() {
		return SECURITY_QID;
	}

	public void setSECURITY_QID(int sECURITY_QID) {
		SECURITY_QID = sECURITY_QID;
	}

	public String getQ_ANSWER() {
		return Q_ANSWER;
	}

	public void setQ_ANSWER(String q_ANSWER) {
		Q_ANSWER = q_ANSWER;
	}

	@Override
	public String toString() {
		return "User [UID=" + UID + ", FIRST_NAME=" + FIRST_NAME + ", LAST_NAME=" + LAST_NAME + ", EMAIL=" + EMAIL
				+ ", CONTACT=" + CONTACT + ", USERNAME=" + USERNAME + ", PASSWORD=" + PASSWORD + ", USER_TYPE="
				+ USER_TYPE + ", USER_STATUS=" + USER_STATUS + ", SECURITY_QID=" + SECURITY_QID + ", Q_ANSWER="
				+ Q_ANSWER + "]";
	}

}
	
