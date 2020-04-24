package com.example.springbootmongodb.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springbootmongodb.model.items;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Repository
public interface ItemsRepository extends JpaRepository<items,Long> {

    List<items> findAllByRestroId(Long restroId);
}
