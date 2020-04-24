package com.example.springbootmongodb.repository;

import com.example.springbootmongodb.model.Restrautants;
import com.example.springbootmongodb.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RestrautantsRepository extends JpaRepository<Restrautants,Long> {


    Optional <Restrautants> findByUsername(String username);
}
