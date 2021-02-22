package com.devsuperior.dsdeliver.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdeliver.entities.Eventos;
import com.devsuperior.dsdeliver.repositories.EventRepository;

import javassist.tools.rmi.ObjectNotFoundException;

@RestController
@RequestMapping("/eventos")
public class EventosController {
	
	@Autowired	
	private EventRepository repo;
	
	public Eventos find(Integer id) throws ObjectNotFoundException {
		 Optional<Eventos> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
		 "Objeto não encontrado! Id: " + id + ", Tipo: " + Eventos.class.getName()));
		} 
	
	


}
