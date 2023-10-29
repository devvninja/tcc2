package com.leonardo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.leonardo.model.Cliente;

@Repository 
public interface ClienteRespository extends JpaRepository <Cliente, Long> {

    
}