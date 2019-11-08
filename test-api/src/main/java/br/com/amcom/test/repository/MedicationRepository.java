package br.com.amcom.test.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.amcom.test.model.Medication;


/**
 * @author Cleiton
 */
public interface MedicationRepository extends CrudRepository<Medication, Long>  {
		
}
