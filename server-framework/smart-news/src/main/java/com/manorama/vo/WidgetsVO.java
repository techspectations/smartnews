package com.manorama.vo;

import java.util.List;

public class WidgetsVO {
	private String id;
	private String widgetid;
	private String values;
	private String category;
	private List<String> flashNews;
	private int priority;
	
	
	public List<String> getFlashNews() {
		return flashNews;
	}
	public void setFlashNews(List<String> flashNews) {
		this.flashNews = flashNews;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getWidgetid() {
		return widgetid;
	}
	public void setWidgetid(String widgetid) {
		this.widgetid = widgetid;
	}
	public String getValues() {
		return values;
	}
	public void setValues(String values) {
		this.values = values;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	
	

}
