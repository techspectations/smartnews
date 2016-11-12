package com.manorama.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.manorama.entity.UserTaste;

public interface UserTasteRepository extends MongoRepository<UserTaste, String>{

	List<UserTaste> findByUserId(String userid);

}
