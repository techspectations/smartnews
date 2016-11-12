package com.manorama.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Widget {
	@Id
	private String id;
	private String widget_id;
	private String value;
	private String category;
	
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getWidget_id() {
		return widget_id;
	}
	public void setWidget_id(String widget_id) {
		this.widget_id = widget_id;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	@Override
	public String toString() {
		return "WidgetNews [id=" + id + ", widget_id=" + widget_id + ", value="
				+ value + "]";
	}
	
	

}
