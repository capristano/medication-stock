package br.com.amcom.test.controller.rest;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonInclude;

import br.com.amcom.test.model.Medication;
import br.com.amcom.test.repository.MedicationRepository;

/**
 * Medication REST Controller
 * @author Cleiton
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping(path="/medication")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MedicationControllerRest {
	
	@Autowired
	private MedicationRepository medicationRepository;
	
	/**
	 * Return a list with all medications
	 * @return Iterable<Medication>
	 */
	@GetMapping(path="/findAll")
	public @ResponseBody Iterable<Medication> findAll() {
		return medicationRepository.findAll();
	}
	
	/**
	 * Return a medication
	 * @return Optional<Medication>
	 */
	@GetMapping(path="/findOne/{id}")
	public @ResponseBody Optional<Medication> findOne(@PathVariable("id") Long id) {
		return medicationRepository.findById(id);	
	}
	
	/**
	 * Save medication state
	 * @param Medication
	 * @return ResponseEntity<Object>
	 */
	@RequestMapping(value = "/save", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Medication save(@RequestBody Medication medication, HttpServletResponse response) {
		try {
			medicationRepository.save(medication);
			response.setStatus(HttpStatus.OK.value());
		} catch (Exception e) {
			response.setStatus(HttpStatus.BAD_REQUEST.value());
		}
		return medication;
	}
	
	
	/**
	 * Delete medication by id
	 * @param ibgeId
	 * @return
	 */
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id, HttpServletResponse response) {		
		try {
			medicationRepository.deleteById(id);
			response.setStatus(HttpStatus.OK.value());
		} catch (Exception e) {
			response.setStatus(HttpStatus.BAD_REQUEST.value());
		}
	}

}
