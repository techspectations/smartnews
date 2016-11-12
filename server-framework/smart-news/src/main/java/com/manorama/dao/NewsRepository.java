package com.manorama.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.manorama.entity.News;

public interface NewsRepository  extends MongoRepository<News, String>{

}
