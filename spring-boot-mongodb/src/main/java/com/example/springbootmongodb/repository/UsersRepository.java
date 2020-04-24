package com.example.springbootmongodb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springbootmongodb.model.Users;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users,Long>
{
    Optional <Users> findByUsername(String username);
}
