package com.leonardo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.leonardo.repository.ClienteRespository;

@SpringBootApplication
public class TccSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(TccSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ClienteRespository gradeRespository){
		return args -> {

		};
	}
	
    
}
