package org.springframework.samples.petclinic.web.api;

import java.util.ArrayList;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.samples.petclinic.model.Alumno;
import org.springframework.samples.petclinic.model.Email;
import org.springframework.samples.petclinic.model.Grupo;
import org.springframework.samples.petclinic.model.Resultado;
import org.springframework.samples.petclinic.others.SmtpMailSender;
import org.springframework.samples.petclinic.service.ClinicService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailResource extends AbstractResourceController {

private final Logger logger = Logger.getLogger(UserResource.class);
	
	private final SmtpMailSender smtpMailSender;
	
   private final ClinicService	clinicService;
	
	@Autowired
	public EmailResource(SmtpMailSender smtpMailSender, ClinicService clinicService) {
		this.smtpMailSender = smtpMailSender;
		this.clinicService = clinicService;
	}
	
	@RequestMapping(value = "/send-mail", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Alumno sendApiMail(@RequestBody @Valid Alumno alumno, BindingResult bindingResult) {
		
	//	 if (bindingResult.hasErrors()) {
	//		 throw new InvalidRequestException("Invalid Owner", bindingResult);
    // } 
		Alumno student = new Alumno();
		student = null;
		
		 String groupOalumno = alumno.getLastName();
		
		 logger.info("Imprimiendo la data del form correo/grupo :"+groupOalumno);
		 logger.info("Imprimiendo la data del form Sub :"+alumno.getFirstName()); //ASUNTO
		 logger.info("Imprimiendo la data del form Body :"+alumno.getCorreo()); //TEXTO
		 
		 String d = null;
		 
		 ///Busqueda del alumno con el apellido 
		 Alumno var_alumno;
		 //clinicService.findAlumnoByLastNameC(alumno.getLastName());
/*		 logger.info("----Alumnno valido :"+var_alumno.getFirstName());
		 logger.info("----Alumnno valido :"+var_alumno.getLastName());
		 logger.info("----Alumnno valido :"+var_alumno.getCorreo());
*/		 
		///Almacenando la data para Apellido, con el valor obtenido desde la bd
		//*********** String Lastname = var_alumno.getLastName();
	///--fin alumno
	//	 d = var_alumno.getLastName();
		 
		 if( clinicService.findAlumnoByLastNameC(alumno.getLastName()) == null) {
			 
			 logger.info("Nombre de apellido invalido..procesando con nombre de Grupo...");
			 
			 Grupo var_group = clinicService.findByGroupName(groupOalumno);
			 
			 if (var_group.getName().equals(groupOalumno)){
				 logger.info("Nombre del grupo correcto...");
				 
				 ArrayList<String> correos = new ArrayList<String>(); 
				 ArrayList<Integer> ides = new ArrayList<Integer>();
				 
				 correos = clinicService.findByGroupByLastNameCorreo(var_group.getName());
				 ides = clinicService.findByGroupByIdCorreo(var_group.getName());
				 
				 int size=correos.size();
				 int sizeId=ides.size();
				 
				 logger.info("cantidadeeee..."+String.valueOf(correos.get(0)));
				 logger.info("cantidad..."+size);
				 
				 for( int i = 0 ; i < correos.size() ; i++ ){
					  System.out.println( correos.get( i ));
					  
					  logger.info("imprimiendo los correos del grupo..."+correos.get(i));
					  
					  this.smtpMailSender.send(correos.get(i) ,alumno.getFirstName(),
					            "Estimados alumnos, aquí les envío el link correspondiente al test de psicología: (http:/3000/loginalumno). "+alumno.getCorreo()+".");
					  
					  
					}
				 
				 for (int i = 0; i < ides.size(); i++){
					 logger.info("imprimiendo los ID de los alumnos..."+ides.get(i));
					 			 
					 Resultado result = new Resultado();
					 Resultado resulta = new Resultado();
					 resulta.setId(null);
					 resulta.setDate(null);
					 resulta.setDescripcion("Prueba asignada...");
					 resulta.setName("Prueba ...");
					 resulta.setTest("Test del Estres");
					 
					 Alumno alm = this.clinicService.findAlumnoById(ides.get(i));
					 alm.addResultado(result);
					 //Resultado res = this.clinicService.saveResultadoCorreo("Test del Estres", "Prueba asignada...", ides.get(i), "Prueba ...")
				save(result,  resulta);
				// clinicService.saveResultado(resulta);
					 					 
				}
			 
				 String n = "Aquino";
				   student = this.clinicService.findAlumnoByLastNameC(n);
				 
		 }
	
		 }else {
		 var_alumno = clinicService.findAlumnoByLastNameC(alumno.getLastName());
		
	/// GRUPO*****	 
		 ///busca y almacena la data conicidida en un obejto grupo
		/// Grupo var_group = clinicService.findByGroupName(groupOalumno);
		/// logger.info("----Grupo valido :"+var_group.getName());
		 
		///Almacenando la data para name del grupo, con el valor obtenido desde la bd
		//*********** String gruponame = var_group.getName();
				 		 
			/* if (var_group.getName().equals(groupOalumno)){
				 logger.info("Nombre del grupo correcto...");
				 
				 ArrayList<String> correos = new ArrayList<String>(); 
				 
				 correos = clinicService.findByGroupByLastNameCorreo(var_group.getName());
				 
	 
				 int size=correos.size();
				 
				 logger.info("cantidadeeee..."+String.valueOf(correos.get(0)));
				 logger.info("cantidad..."+size);
				 
				 for( int i = 0 ; i < correos.size() ; i++ ){
					  System.out.println( correos.get( i ));
					  
					  logger.info("imprimiendo los correos del grupo..."+correos.get(i));
					  
					  this.smtpMailSender.send(correos.get(i) ,alumno.getFirstName(),
					             "Estimados alumnos, aquí les envío el link correspondiente al test de psicología: (http:/3000/loginalumno). "+alumno.getCorreo()+".");
					  
					}
			 
			 }else*/ if(var_alumno.getLastName().equals(alumno.getLastName())) {
						 logger.info("Apellido correcto...");
						 String correo_alumno = var_alumno.getCorreo();
						 			 
						 this.smtpMailSender.send(correo_alumno,alumno.getFirstName(),
			            "Estimados alumnos, aquí les envío el link correspondiente al test de psicología: (http:/3000/loginalumno). "+alumno.getCorreo()+".");
						 
						 Resultado result = new Resultado();
						 Resultado resulta = new Resultado();
						 resulta.setId(null);
						 resulta.setDate(null);
						 resulta.setDescripcion("Prueba asignada...");
						 resulta.setName("Prueba ...");
						 resulta.setTest("Test del Estres");
						 
						 Alumno alm = this.clinicService.findAlumnoById(var_alumno.getId());
						 alm.addResultado(result);
						 
						 save(result,  resulta);
						 
						 student = this.clinicService.findAlumnoByLastNameC(alumno.getLastName());
						 
						 /*
						   while (correos.hasNext()) {
							   
							   String g_correo = correos.next().getCorreo();
							   correos.next();
							   logger.info("email enviando cuyo nombre..."+g_correo);
							   this.smtpMailSender.send(g_correo ,alumno.getFirstName(),
				             "Estimados alumnos, aquí les envío el link correspondiente al test de psicología: (http:/3000/welcome). "+alumno.getLastName());				   
							   }
							   */
							 String n = "Aquino";
							   student = this.clinicService.findAlumnoByLastNameC(n);
			 			}
		 }
		 
		 logger.info("----------Menasaje enviado");
		return student;
		
	}

	private void save(Resultado result, Resultado resulta) {
		
		result.setTest(resulta.getTest());
		result.setDescripcion(resulta.getDescripcion());
		result.setDate(resulta.getDate());
		result.setName(resulta.getName());
		result.setId(resulta.getId());
		
		clinicService.saveResultado(result);
		
	}
	
}