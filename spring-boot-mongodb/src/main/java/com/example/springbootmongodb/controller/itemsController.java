package com.example.springbootmongodb.controller;

//import casestudy.shop.exception1.NotFound;
import com.example.springbootmongodb.model.items;
import com.example.springbootmongodb.repository.ItemsRepository;
import com.example.springbootmongodb.service.CurrentRestrautantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

import java.security.Principal;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping( value = "/menu" , method = { RequestMethod.GET , RequestMethod.POST})
public class itemsController {

    @Autowired
    ItemsRepository ItemsRepo;
    //@Autowired
   // CurrentRestrautantService currentRestroService;

    @GetMapping("/get2")
    public List<items> getAllNotes() {
        return ItemsRepo.findAll();
    }

    @GetMapping("/get_id/{restroId}")
    public List<items> getItem(@PathVariable( value = "restroId") Long restroId)
    {
        return ItemsRepo.findAllByRestroId(restroId);
    }

    //@GetMapping("/{category}/{first}/{last}")
    //public List<items> getPrice(@PathVariable (value = "category") String cate , @PathVariable ( value = "first" ) double price1 , @PathVariable (value = "last") double price2)
    //{
      //  return ItemsRepo.findAllByCategoryAndPriceBetween(cate,price1, price2);
    //}

   // @GetMapping("/search/{description}")
    //public List<items> search(@PathVariable (value = "description") String description)
    //{
      //  return ItemsRepo.findAllByDescriptionContaining(description);
    //}

    //@GetMapping("/sub/{category}/{subcategory}/{first}/{last}")
    //public List<items> getPrice1(@PathVariable ( value = "category") String cate ,@PathVariable (value = "subcategory") String sub , @PathVariable ( value = "first" ) double price1 , @PathVariable (value = "last") double price2) {
      //  return ItemsRepo.findAllByCategoryAndSubcategoryAndPriceBetween(cate, sub, price1, price2);
    //}
    //@GetMapping("/{category}/{subcategory}")
    //public List<items> getItem1(@PathVariable ( value = "category") String cate ,@PathVariable( value = "subcategory") String sub)
    //{
      //  return ItemsRepo.findAllByCategoryAndSubcategory(cate,sub);
    //}

    //@GetMapping("/get_name/{name}")
    //public List<items> getItem2(@PathVariable( value = "name") String name)
    //{
      //  return ItemsRepo.findAllByName(name);
    //}


    @PostMapping("/post2")
    public items createNote(@Valid @RequestBody items user1) {
        return ItemsRepo.save(user1);
    }

//    @GetMapping("/get2/{RestroId}")
//    public items getNoteById(@PathVariable(value = "id") Long noteId) {
//        return ItemsRepo.findById(noteId)
//                .orElseThrow(() -> new NotFound("Note", "id", noteId));
//    }

//    @PutMapping("/put2")
//    public items putting(@Valid @RequestBody items item , Principal principal)
//    {
//        items items1 = ItemsRepo.findAllByRestroId(item.getRestroId());
//        items1.setCategory(item.getCategory());
//        items1.setDescription(item.getDescription());
//        //items1.setImg(item.getImg());
//        items1.setName(item.getName());
//        items1.setPrice(item.getPrice());
//       // items1.setSubcategory(item.getSubcategory());
//        return ItemsRepo.save(items1);
//    }

//    @DeleteMapping("/delete/{Id}")
//    public List<items> del(@PathVariable (value = "RestroId") Long Id)
//    {
//        ItemsRepo.deleteById(Id);
//        return ItemsRepo.findAll();
//    }

}

