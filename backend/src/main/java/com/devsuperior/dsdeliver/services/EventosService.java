package com.devsuperior.dsdeliver.services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.devsuperior.dsdeliver.entities.Eventos;
import com.devsuperior.dsdeliver.repositories.EventRepository;
import javassist.tools.rmi.ObjectNotFoundException;

@Service
public class EventosService {
	
	@Autowired	
	private EventRepository repo;
	
	public Eventos find(Integer id) throws ObjectNotFoundException {
		 Optional<Eventos> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
		 "Objeto não encontrado! Id: " + id + ", Tipo: " + Eventos.class.getName()));
		} 

	

}
