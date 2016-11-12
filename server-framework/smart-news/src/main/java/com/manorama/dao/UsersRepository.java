package com.manorama.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.manorama.entity.Users;

public interface UsersRepository  extends MongoRepository<Users, String>{

}
