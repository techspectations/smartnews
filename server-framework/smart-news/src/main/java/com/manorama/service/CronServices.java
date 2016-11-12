package com.manorama.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manorama.dao.NewsFlashRepository;
import com.manorama.dao.NewsRepository;
import com.manorama.dao.UserNewsCategoryRepository;
import com.manorama.dao.UserTasteRepository;
import com.manorama.dao.UsersRepository;
import com.manorama.dao.WidgetRepository;
import com.manorama.entity.News;
import com.manorama.entity.NewsFlash;
import com.manorama.entity.UserTaste;
import com.manorama.entity.Widget;
@Service
public class CronServices {
	@Autowired
	private NewsFlashRepository newsFlashRepository;
	
	@Autowired
	private NewsRepository newsRepository;
	
	@Autowired
	private UserNewsCategoryRepository userNewsCategoryRepository;
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private UserTasteRepository userTasteRepository;
	
	@Autowired
	private WidgetRepository widgetRepository;
	public void constructWidget(){
		Widget widget1 = new Widget();
		widget1.setCategory("National News");
		widget1.setWidget_id("state");
		widget1.setValue("");
		widgetRepository.save(widget1);
		
		Widget widget2 = new Widget();
		widget2.setCategory("District News - Idukki");
		widget2.setWidget_id("district");
		widget2.setValue("");
		widgetRepository.save(widget2);
		
		Widget widget21 = new Widget();
		widget21.setCategory("State News - Kerala");
		widget21.setWidget_id("state");
		widget21.setValue("");
		widgetRepository.save(widget21);
		
		Widget widget3 = new Widget();
		widget3.setCategory("Stock");
		widget3.setWidget_id("stock");
		widget3.setValue("{sensexstatus:'down',{sensexstatus:'down',senseximage:'/img/utils/down-arrow.png',sensexvalue:8522, niftystatus:'down', niftyimage:'/img/utils/up-arrow.png',niftyvalue:'fd'}");
		widgetRepository.save(widget3);
		
		Widget widget4 = new Widget();
		widget4.setCategory("Football - ISL");
		widget4.setWidget_id("football");
		widget4.setValue("{leftflag:'down',leftcountry:'',leftscore:'',leftsubvalue:'',rightflag:'',rightcountry:'',rightscore:'',rightsubvalue:'' }");
		widgetRepository.save(widget4);
		
		Widget widget5 = new Widget();
		widget5.setCategory("Cricket Score");
		widget5.setWidget_id("football");
		widget5.setValue("{leftflag:'down',leftcountry:'',leftscore:'',leftsubvalue:'',rightflag:'',rightcountry:'',rightscore:'',rightsubvalue:'' }");
		widgetRepository.save(widget5);
		
		NewsFlash newsFlash = new NewsFlash();
		newsFlash.setCategory("Cricket Score");
		newsFlash.setNews("bdfdf fdf");
		newsFlash.setSource("Manorama");
		newsFlashRepository.save(newsFlash);
		
		NewsFlash newsFlash2 = new NewsFlash();
		newsFlash2.setCategory("Cricket Score");
		newsFlash2.setNews("bdfdf fdfdff dfdf");
		newsFlash2.setSource("Manorama");
		newsFlashRepository.save(newsFlash2);
		
		NewsFlash newsFlash3 = new NewsFlash();
		newsFlash3.setCategory("Football - ISL");
		newsFlash3.setNews("bdfdf fdfdff dfdf");
		newsFlash3.setSource("ESPN");
		newsFlashRepository.save(newsFlash3);
		
		NewsFlash newsFlash4 = new NewsFlash();
		newsFlash4.setCategory("Stock");
		newsFlash4.setNews("bdfdf fdfdff dfdf");
		newsFlash4.setSource("Money Control");
		newsFlashRepository.save(newsFlash4);
		
		NewsFlash newsFlash5 = new NewsFlash();
		newsFlash5.setCategory("Stock");
		newsFlash5.setNews("bdfdf fdfdf dfdf f dfdf");
		newsFlash5.setSource("Money Control");
		newsFlashRepository.save(newsFlash5);
		
		NewsFlash newsFlash6 = new NewsFlash();
		newsFlash6.setCategory("District News - Idukki");
		newsFlash6.setNews("bdfdf fdfdf dfdf f dfdf");
		newsFlash6.setSource("Mathrubhumi");
		newsFlashRepository.save(newsFlash6);
		
		
		NewsFlash newsFlash7 = new NewsFlash();
		newsFlash7.setCategory("District News - Idukki");
		newsFlash7.setNews("bdfdf fdfdffdf d dfdf f dfdf");
		newsFlash7.setSource("Mathrubhumi");
		newsFlashRepository.save(newsFlash7);
		
		NewsFlash newsFlash8 = new NewsFlash();
		newsFlash8.setCategory("National News");
		newsFlash8.setNews("bdfdf fdfdffdf d dfdf f dfdf");
		newsFlash8.setSource("Mathrubhumi");
		newsFlashRepository.save(newsFlash8);
		
		NewsFlash newsFlash9 = new NewsFlash();
		newsFlash9.setCategory("National News");
		newsFlash9.setNews("bdfdf fdfdffdf d dfdf f dfdf");
		newsFlash9.setSource("Mathrubhumi");
		newsFlashRepository.save(newsFlash9);
		
		
	}
	
	public void constructNews(){
		News news = new News();
		news.setCategory("District News - Idukki");
		news.setDescription("dfdf fdf");
		news.setHeadline("dfdf");
		news.setSource("Manorama");
		newsRepository.save(news);
		
		News news2 = new News();
		news2.setCategory("District News - Idukki");
		news2.setDescription("dfdf fdf");
		news2.setHeadline("dfdf");
		news2.setSource("Manorama");
		newsRepository.save(news2);
		
		News news3 = new News();
		news3.setCategory("District News - Idukki");
		news3.setDescription("dfdf fdf");
		news3.setHeadline("dfdf");
		news3.setSource("Manorama");
		newsRepository.save(news3);
		
		News news4 = new News();
		news4.setCategory("District News - Idukki");
		news4.setDescription("dfdf fdf");
		news4.setHeadline("dfdf");
		news4.setSource("Manorama");
		newsRepository.save(news4);
		
		News news5 = new News();
		news5.setCategory("District News - Idukki");
		news5.setDescription("dfdf fdf");
		news5.setHeadline("dfdf");
		news5.setSource("Manorama");
		newsRepository.save(news5);
	}
	
	public void pushUserInfo(){
		UserTaste userTaste1= new UserTaste();
		userTaste1.setCategory("District News - Idukki");
		userTaste1.setScore("1.022");
		userTaste1.setUserId("1806906492925735");
		
		UserTaste userTaste2= new UserTaste();
		userTaste2.setCategory("National News");
		userTaste2.setScore("1.022");
		userTaste2.setUserId("1806906492925735");
		userTasteRepository.save(userTaste2);
		
		UserTaste userTaste3= new UserTaste();
		userTaste3.setCategory("Stock");
		userTaste3.setScore("1.022");
		userTaste3.setUserId("1806906492925735");
		userTasteRepository.save(userTaste3);
		
		UserTaste userTaste4= new UserTaste();
		userTaste4.setCategory("Football - ISL");
		userTaste4.setScore("1.022");
		userTaste4.setUserId("1806906492925735");
		userTasteRepository.save(userTaste4);
		
		UserTaste userTaste5= new UserTaste();
		userTaste5.setCategory("Football - ISL");
		userTaste5.setScore("1.022");
		userTaste5.setUserId("1806906492925735");
		userTasteRepository.save(userTaste5);
	}
}