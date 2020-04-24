package com.example.springbootmongodb.service;



import com.example.springbootmongodb.model.Restrautants;
import com.example.springbootmongodb.repository.RestrautantsRepository;
import com.example.springbootmongodb.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
@Service
public class CurrentRestrautantService {

    @Autowired
    RestrautantsRepository RestroRepo;

    public Optional<Restrautants> CurrentUser(Principal principal)
    {
        String name = principal.getName();
        return RestroRepo.findByUsername(name);
    }

    public Long getuserid(Principal principal) {

        String name = principal.getName();
        Long id = RestroRepo.findByUsername(name).get().getuserid();
        return id;
    }


//    public String getuserrole(Principal principal)
//    {
//        return UsersRepo.findByUsername(principal.getName()).get().getRole();
//    }


    public Optional<Restrautants> getuserprofile(Principal principal)
    {
        return RestroRepo.findByUsername(principal.getName());
    }


}


