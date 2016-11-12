package com.manorama.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.manorama.entity.UserNewsCategory;

public interface UserNewsCategoryRepository  extends MongoRepository<UserNewsCategory, String>{

	List<UserNewsCategory> findByUserId(String userid);

	

}
