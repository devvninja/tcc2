package com.leonardo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity   // Entidade - Faz Mapeamento no Banco de Dados - Caso nome da Entidade for igual o nome da Tabela
//@Table (name = "grade") // Especifica o nome da tabela 
public class Cliente {
    
    @Id     // Indica PK na Tabela
    @GeneratedValue (strategy = GenerationType.AUTO)   // Gerador - Gera automaticamente o ID - PK quando houver insert na tabela
    private Long idcliente;

    @Column(length = 200, nullable = false)     // Tamanho e NOTNULL na tabela 
    private String nome;

    @Column(length = 200, nullable = false)     // Tamanho e NOTNULL na tabela 
    private String email;

    @Column(length = 200, nullable = false)     // Tamanho e NOTNULL na tabela 
    private String telefone;

    @Column(length = 200, nullable = false)     // Tamanho e NOTNULL na tabela 
    private String habilidade;

    @Column(length = 200, nullable = false)     // Tamanho e NOTNULL na tabela 
    private String graduacao;


}
