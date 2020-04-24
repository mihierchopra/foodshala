package com.example.springbootmongodb.repository;



import com.example.springbootmongodb.model.OrderHistory;
import com.example.springbootmongodb.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderHistoryRepository  extends JpaRepository <OrderHistory , Long>
{

    List<OrderHistory> findAllByUser(Optional<Users> users);
}

