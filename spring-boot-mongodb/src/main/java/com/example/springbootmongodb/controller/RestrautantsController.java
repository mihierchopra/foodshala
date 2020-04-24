package com.example.springbootmongodb.controller;



import com.example.springbootmongodb.model.Restrautants;
import com.example.springbootmongodb.model.Users;
//import casestudy.shop.exception1.NotFound;
import com.example.springbootmongodb.repository.RestrautantsRepository;
import com.example.springbootmongodb.service.CurrentRestrautantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.*;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/restro")
public class RestrautantsController {

    @Autowired
    RestrautantsRepository RestroRepo;
    @Autowired
    CurrentRestrautantService currentRestroService;

    @GetMapping("/get2")
    public List<Restrautants> getAllNotes() {
        return RestroRepo.findAll();
    }

    @GetMapping(produces = "application/json")
    @RequestMapping({ "/validateLogin" })
    public Restrautants validateLogin() {
        return new Restrautants("User successfully authenticated");
    }

    @GetMapping("/get_restro/{username}")
    public Optional<Restrautants> getUser(@PathVariable( value = "username") String name)
    {
        return RestroRepo.findByUsername(name);
    }

    @PostMapping("/post2")
    public Restrautants createNote(@Valid @RequestBody Restrautants user1) {
        // user1.setRole("User");
        user1.setActive(1);
        return RestroRepo.save(user1);
    }

    @GetMapping("/get2/{id}")
    public Optional<Restrautants> getNoteById(@PathVariable(value = "id") Long noteId) {
        return RestroRepo.findById(noteId);

        //To HAndle Error        .orElseThrow(() -> new NotFound("Note", "id", noteId));
    }

    @PutMapping("/put_restro")
    public Restrautants putting(@Valid @RequestBody Restrautants user , Principal principal)
    {
        Restrautants user1 = currentRestroService.CurrentUser(principal).get();
        //user1.setUsername(user.getUsername());
        user1.setEmail(user.getEmail());
        // user1.setGender(user.getGender());
        //user1.setPhone(user.getPhone());
        //user1.setPassword(user.getPassword());
        user1.setActive(1);
        return RestroRepo.save(user1);
    }

    // @GetMapping("/get_role/{username}")
    //public String getrole(@PathVariable( value = "username") String name,Principal principal)
    //{
    //  return currentUserService.getuserrole(principal);
    //}
}


