package com.manorama.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserNewsCategory {
	@Id
	private String id;
	private String userId;
	private String category;
	private String preferedSource;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPreferedSource() {
		return preferedSource;
	}
	public void setPreferedSource(String preferedSource) {
		this.preferedSource = preferedSource;
	}
	@Override
	public String toString() {
		return "UserNewsCategory [id=" + id + ", userId=" + userId
				+ ", category=" + category + ", preferedSource="
				+ preferedSource + "]";
	}
	
	

}
