package org.springframework.samples.petclinic.repository;

import org.springframework.data.repository.Repository;
import org.springframework.samples.petclinic.model.Valores;

public interface ValorRepository extends Repository<Valores, Integer>  {

	void save(Valores value);
}
