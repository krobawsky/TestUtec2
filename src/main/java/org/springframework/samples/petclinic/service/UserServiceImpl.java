package org.springframework.samples.petclinic.service;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.User;
import org.springframework.samples.petclinic.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
 

@Service
public class UserServiceImpl implements UserService {
	
	private UserRepository userrepository;
	
	@Autowired
	public UserServiceImpl(UserRepository userrepository) {
		this.userrepository = userrepository;
	}

	@Override
	@Transactional(readOnly = true)
	public User findUserById(int id) throws DataAccessException {
		// metodo para la busqueda de id del modelo user
		return  userrepository.findUserById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public User findByUsername(String username) throws DataAccessException {
		// TODO Auto-generated method stub
		return userrepository.findUserByUsername(username);
	}
   
}
