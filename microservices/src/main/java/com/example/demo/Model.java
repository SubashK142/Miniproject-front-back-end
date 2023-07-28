package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Model {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String email;
	private String feedback;
	public Model() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Model(int id, String name,String email, String feedback) {
		super();
		this.id = id;
		this.name = name;
		this.email=email;
		this.feedback = feedback;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	
	

}