package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsdeliver.entities.Eventos;
import com.devsuperior.dsdeliver.entities.Product;

@Repository
public interface EventRepository extends JpaRepository<Eventos, Integer>{
	
	
	
}
