package com.leonardo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.leonardo.repository.ClienteRespository;
import com.leonardo.model.Cliente;

import lombok.AllArgsConstructor;

@RestController    // Fala pro Spring que essa classe contem ENDPOINT (Url para acessar API) - Java Servless
@RequestMapping ("/api/cliente")    // Qual vai ser o ENDPOINT 
@AllArgsConstructor
public class GradeController {

    private final ClienteRespository clienteRespository;


    // Metodos MAPEAMENTO REQUEST HTTP - GET/POST/DELETE

    // Pega todos os dados (da tabela)
    @GetMapping  
    public List<Cliente> list () {
        return clienteRespository.findAll();
    }

    // Insere dados - RETORNA O 201 HTTP CODE (CREATED)
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Cliente create(@RequestBody Cliente cliente) {
         return clienteRespository.save(cliente);

    }

    // Atualiza dados  (UPDATE)
    @PutMapping("/{idcliente}")
    public ResponseEntity<Cliente> update(@PathVariable Long idcliente, 
            @RequestBody Cliente cliente) {
         return clienteRespository.findById(idcliente)
            .map(recordFound -> {
                recordFound.setNome(cliente.getNome());
                recordFound.setEmail(cliente.getEmail());
                recordFound.setTelefone(cliente.getTelefone());
                recordFound.setHabilidade(cliente.getHabilidade());
                recordFound.setGraduacao(cliente.getGraduacao());
                Cliente updated = clienteRespository.save(recordFound);
                return ResponseEntity.ok().body(updated);

            })
            .orElse(ResponseEntity.notFound().build());
    }
    
    // Obtem um dado por ID
    @GetMapping("/{idcliente}")
    public ResponseEntity<Cliente> findById(@PathVariable Long idcliente) {
        return clienteRespository.findById(idcliente)
            .map(recordFound -> ResponseEntity.ok().body(recordFound))
            .orElse(ResponseEntity.notFound().build());
    }

    // Deleta por ID
    @DeleteMapping("/{idcliente}")
    public ResponseEntity<Void> delete(@PathVariable Long idcliente) {
       return clienteRespository.findById(idcliente)
            .map(recordFound -> {
                clienteRespository. deleteById(idcliente);
                return ResponseEntity.noContent().<Void>build();
        })
        .orElse(ResponseEntity.notFound().build());
            
    }


}
