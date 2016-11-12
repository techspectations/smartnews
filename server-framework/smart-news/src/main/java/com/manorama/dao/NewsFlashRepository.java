package com.manorama.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.manorama.entity.NewsFlash;

public interface NewsFlashRepository  extends MongoRepository<NewsFlash, String>{

	List<NewsFlash> findByCategory(String category);

}
