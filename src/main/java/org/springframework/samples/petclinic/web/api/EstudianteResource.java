package org.springframework.samples.petclinic.web.api;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.Alumno;
import org.springframework.samples.petclinic.service.ClinicService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EstudianteResource extends AbstractResourceController {
	
	private final ClinicService	clinicService;
	
	@Autowired
	public EstudianteResource(ClinicService clinicService) {
		this.clinicService = clinicService;
	}
	
	private Alumno retrieveAlumno(int alumnoId) {
		return this.clinicService.findAlumnoById(alumnoId);
	}
	
	@RequestMapping(value = "/student/{alumnoId}", method = RequestMethod.GET)
	public Alumno findAlumno(@PathVariable("alumnoId") int alumnoId) {
		return retrieveAlumno(alumnoId);
	}
	
}
