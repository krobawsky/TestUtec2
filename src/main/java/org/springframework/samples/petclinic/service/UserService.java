package org.springframework.samples.petclinic.service;

import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.User;

public interface UserService {
    
    User findUserById(int id) throws DataAccessException;
    
    User findByUsername(String username) throws DataAccessException;
}
