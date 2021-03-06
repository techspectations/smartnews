package com.manorama.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.manorama.service.CronServices;
import com.manorama.service.ViewServices;
import com.manorama.vo.NewsVO;
import com.manorama.vo.WidgetsVO;


@RestController
@RequestMapping("/rest")
public class SNController {
	@Autowired
	private ViewServices viewServices;
	
	@Autowired
	private CronServices cronServices;
	
	@RequestMapping(path = "/widgets/{userid}", method = RequestMethod.GET)
	public ResponseEntity<List<WidgetsVO>> findWidgets(@PathVariable("userid") String userid) {
		List<WidgetsVO> widgetsVoList = viewServices.findWidgets(userid);
		return new ResponseEntity<List<WidgetsVO>>(widgetsVoList, HttpStatus.OK);
	}
	
	@RequestMapping(path = "/news/{userid}/{category}", method = RequestMethod.GET)
	public ResponseEntity<List<NewsVO>> findNews(@PathVariable("userid") String userid,@PathVariable("category") String category) {
		List<NewsVO> newsVoList = viewServices.findNews(userid, category);
		return new ResponseEntity<List<NewsVO>>(newsVoList, HttpStatus.OK);
	}
	
	@RequestMapping(path = "/runwidgetcron", method = RequestMethod.GET)
	public void constructWidget() {
		cronServices.constructWidget();
	}
	
	@RequestMapping(path = "/constructnews", method = RequestMethod.GET)
	public void constructNews() {
		cronServices.constructNews();
	}
	
	@RequestMapping(path = "/constructusertaste", method = RequestMethod.GET)
	public void constructUserTaste() {
		cronServices.pushUserInfo();
	}
}
