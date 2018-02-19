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


/**
 * Mostly used as a facade so all controllers have a single point of entry
 *
 * @author Michael Isvy
 */
public interface ClinicService {

    Collection<PetType> findPetTypes() throws DataAccessException;

    Owner findOwnerById(int id) throws DataAccessException;

    Pet findPetById(int id) throws DataAccessException;

    void savePet(Pet pet) throws DataAccessException;

    void saveVisit(Visit visit) throws DataAccessException;

    Collection<Vet> findVets() throws DataAccessException;

    void saveOwner(Owner owner) throws DataAccessException;

    Collection<Owner> findOwnerByLastName(String lastName) throws DataAccessException;

	Collection<Visit> findVisitsByPetId(int petId);

	Collection<Owner> findOwnerByCity(String lastName) throws DataAccessException;

	Collection<Alumno> findAlumnoByLastName(String lastName) throws DataAccessException;

	Alumno findAlumnoById(int id) throws DataAccessException;

	Resultado findResultadoById(int resultadoId) throws DataAccessException;

	Collection<Grupo> findGrupos() throws DataAccessException;

	Grupo findGrupoById(int grupoId) throws DataAccessException;

	void saveGrupo(Grupo grupo) throws DataAccessException;

	void deleteGrupo(int grupoId) throws DataAccessException;

	Collection<Alumno> findAlumnos() throws DataAccessException;

	Collection<Alumno> findAlumnosGroupByLastName(String alumnoLastname, String grupo)throws DataAccessException;

	Collection<Grupo> findGrupoByName(String name) throws DataAccessException;

	void saveResultado(Resultado resultado)throws DataAccessException;

	Collection<Test> findTests();

	Test findTestById(int testId) throws DataAccessException;

	void saveValor(Valores value);
	
	Alumno findAlumnoByLastNameC(String lastName) throws DataAccessException;
	
	//busca el correo del alumno con el parametro name del grupo
		ArrayList<String> findByGroupByLastNameCorreo(String name)throws DataAccessException;
		//busca el nombre del grupo con el parametro name del grupo
		Grupo findByGroupName(String name) throws DataAccessException;
		//busca el correo del alumno con el parametro name del grupo
	    ArrayList<Integer> findByGroupByIdCorreo(String name)throws DataAccessException;
		
	Alumno findAlumnoByCodigo(String codigo) throws DataAccessException;

	User findUserById(int id) throws DataAccessException;
    
    User findByUsername(String username) throws DataAccessException;

	Collection<User> findUserByLastName(String userLastname)throws DataAccessException;

	void saveUser(User user) throws DataAccessException;

	Collection<Alumno> findAlumnosByTestEstres(String testName)throws DataAccessException;

}
