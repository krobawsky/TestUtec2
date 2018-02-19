/*
 * Copyright 2002-2013 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.springframework.samples.petclinic.service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.model.Alumno;
import org.springframework.samples.petclinic.model.Grupo;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.model.Pet;
import org.springframework.samples.petclinic.model.PetType;
import org.springframework.samples.petclinic.model.Resultado;
import org.springframework.samples.petclinic.model.Test;
import org.springframework.samples.petclinic.model.User;
import org.springframework.samples.petclinic.model.Valores;
import org.springframework.samples.petclinic.model.Vet;
import org.springframework.samples.petclinic.model.Visit;
import org.springframework.samples.petclinic.repository.AlumnoRepository;
import org.springframework.samples.petclinic.repository.GrupoRepository;
import org.springframework.samples.petclinic.repository.OwnerRepository;
import org.springframework.samples.petclinic.repository.PetRepository;
import org.springframework.samples.petclinic.repository.ResultadoRepository;
import org.springframework.samples.petclinic.repository.TestRepository;
import org.springframework.samples.petclinic.repository.UserRepository;
import org.springframework.samples.petclinic.repository.ValorRepository;
import org.springframework.samples.petclinic.repository.VetRepository;
import org.springframework.samples.petclinic.repository.VisitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Mostly used as a facade for all Petclinic controllers
 * Also a placeholder for @Transactional and @Cacheable annotations
 *
 * @author Michael Isvy
 */
@Service
public class ClinicServiceImpl implements ClinicService {

    private PetRepository petRepository;
    private VetRepository vetRepository;
    private OwnerRepository ownerRepository;
    private VisitRepository visitRepository;
    private AlumnoRepository alumnoRepository;
    private ResultadoRepository resultadoRepository;
    private GrupoRepository grupoRepository;
    private TestRepository testRepository;
    private ValorRepository valoresRepository;
    private UserRepository userRepository;
    @Autowired
    public ClinicServiceImpl(UserRepository userRepository,ValorRepository valoresRepository,PetRepository petRepository, VetRepository vetRepository, OwnerRepository ownerRepository, VisitRepository visitRepository, AlumnoRepository alumnoRepository, ResultadoRepository resultadoRepository, GrupoRepository grupoRepository, TestRepository testRepository) {
        this.valoresRepository = valoresRepository;
    	this.petRepository = petRepository;
        this.vetRepository = vetRepository;
        this.ownerRepository = ownerRepository;
        this.visitRepository = visitRepository;
        this.alumnoRepository = alumnoRepository;
        this.resultadoRepository = resultadoRepository;
        this.grupoRepository = grupoRepository;
        this.testRepository = testRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<PetType> findPetTypes() throws DataAccessException {
        return petRepository.findPetTypes();
    }

    @Override
    @Transactional(readOnly = true)
    public Owner findOwnerById(int id) throws DataAccessException {
        return ownerRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Owner> findOwnerByLastName(String lastName) throws DataAccessException {
        return ownerRepository.findByLastName(lastName);
    }
    
    @Override
    @Transactional(readOnly = true)
    public Collection<Owner> findOwnerByCity(String city) throws DataAccessException {
        return ownerRepository.findByCity(city);
    }

    @Override
    @Transactional
    public void saveOwner(Owner owner) throws DataAccessException {
        ownerRepository.save(owner);
    }


    @Override
    @Transactional
    public void saveVisit(Visit visit) throws DataAccessException {
        visitRepository.save(visit);
    }


    @Override
    @Transactional(readOnly = true)
    public Pet findPetById(int id) throws DataAccessException {
        return petRepository.findById(id);
    }

    @Override
    @Transactional
    public void savePet(Pet pet) throws DataAccessException {
        petRepository.save(pet);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "vets")
    public Collection<Vet> findVets() throws DataAccessException {
        return vetRepository.findAll();
    }

	@Override
	public Collection<Visit> findVisitsByPetId(int petId) {
		return visitRepository.findByPetId(petId);
	}
	/* alumno */
	@Override
    @Transactional(readOnly = true)
    public Collection<Alumno> findAlumnoByLastName(String lastName) throws DataAccessException {
        return alumnoRepository.findByLastName(lastName);
    }
	
	 @Override
	 @Transactional(readOnly = true)
	 public Alumno findAlumnoById(int id) throws DataAccessException {
	     return alumnoRepository.findAlumnoById(id);
	    }
	 
	 @Override
	 @Transactional(readOnly = true)
	 public Collection<Alumno> findAlumnos() throws DataAccessException {
	       return alumnoRepository.findAll();
	    }
	 
	 /* resultado */
	 @Override
	 @Transactional(readOnly = true)
    public Resultado findResultadoById(int id) throws DataAccessException {
        return resultadoRepository.findById(id);
    }
	 
	 /* grupos */
	 @Override
	 @Transactional(readOnly = true)
    public Collection<Grupo> findGrupos() throws DataAccessException {
        return grupoRepository.findAll();
    }
	 
	 @Override
	 @Transactional(readOnly = true)
	 public Grupo findGrupoById(int id) throws DataAccessException {
	     return grupoRepository.findGrupoById(id);
	    }
	 
	 @Override
	 @Transactional
    public void saveGrupo(Grupo grupo) throws DataAccessException {
		 grupoRepository.save(grupo);
    }
	 
	 @Override
	 public void deleteGrupo(int grupoId) throws DataAccessException {
		 grupoRepository.delete(grupoId);
    }

	@Override
	@Transactional(readOnly = true)
	public Collection<Alumno> findAlumnosGroupByLastName(String alumnoLastname, String grupo)
			throws DataAccessException {
		return alumnoRepository.findByGroup(alumnoLastname, Integer.parseInt(grupo));
	}

	@Override
	public Collection<Grupo> findGrupoByName(String name) throws DataAccessException {
		return grupoRepository.findByName(name);
	}

	@Override
	public void saveResultado(Resultado resultado) throws DataAccessException {
			resultadoRepository.save(resultado);
		
	}

	@Override
	public Collection<Test> findTests() {
		 return testRepository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Test findTestById(int testId) throws DataAccessException {
		 return testRepository.findById(testId);
	}

	@Override
	public void saveValor(Valores value) {
			valoresRepository.save(value);
		
	}

	@Override
	public ArrayList<String> findByGroupByLastNameCorreo(String name) throws DataAccessException {
		// TODO Auto-generated method stub
		return alumnoRepository.findByGroupByNameCorreo(name);
	}

	@Override
	public Grupo findByGroupName(String name) throws DataAccessException {
		// TODO Auto-generated method stub
		return grupoRepository.findByGroupNameC(name);
	}

	@Override
	public Alumno findAlumnoByCodigo(String codigo) throws DataAccessException {
		// TODO Auto-generated method stub
		return alumnoRepository.findAlumnoByCodigo(codigo);
	}

	@Override
	public Alumno findAlumnoByLastNameC(String lastName) throws DataAccessException {
		// TODO Auto-generated method stub
		return alumnoRepository.findAlumnoByLastnameC(lastName);
	}

	@Override
	@Transactional(readOnly = true)
	public User findUserById(int id) throws DataAccessException {
		// metodo para la busqueda de id del modelo user
		return  userRepository.findUserById(id);
	}

	@Override
	@Transactional(readOnly = true)
	public User findByUsername(String username) throws DataAccessException {
		// TODO Auto-generated method stub
		return userRepository.findUserByUsername(username);
	}

	@Override
	public Collection<User> findUserByLastName(String userLastname) throws DataAccessException {
		
		return userRepository.findUserByLastName(userLastname);
	}

	@Override
	public void saveUser(User user) throws DataAccessException {
		userRepository.save(user);
	}

	@Override
	public Collection<Alumno> findAlumnosByTestEstres(String testName) throws DataAccessException {
		return alumnoRepository.findByTestEstres(testName);
	}

	@Override
	public ArrayList<Integer> findByGroupByIdCorreo(String name) throws DataAccessException {
		return alumnoRepository.findByGroupByIdesCorreo(name);
	}


}
