package com.example.springbootmongodb.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "items" )
public class items implements Serializable
{


    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long itemId;
    private Long restroId;
    private String name ;
    private String description;
    private double price;
   // private String img;
    private String category;


    private String type;
   // private String subcategory;

    public items(){}

    public items(String name, String description, double price, String category,Long restroId,String type) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.restroId = restroId;
        this.category = category;
        this.type=type;
        //this.subcategory = subcategory;
    }

   // @Column( nullable = false , columnDefinition = " int default ")
    //private int active;

    @Embedded
    //private Itemdetails itemdetails;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

   // public String getImg() {return img; }

    public String getCategory() {
        return category;
    }

    //public String getSubcategory() {
      //  return subcategory;
    //}

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) { this.description = description;    }

    public void setPrice(double price) {
        this.price = price;
    }

    //public void setImg(String img) {
      //  this.img = img;
    //}

    public void setCategory(String category) {
        this.category = category;
    }

    //public void setSubcategory(String subcategory) {
      //  this.subcategory = subcategory;
    //}


    //public int getActive() {
      //  return active;
    //}

    //public void setActive(int active) {
      //  this.active = active;
    //}

    //public Itemdetails getItemdetails() {
      //  return itemdetails;
    //}

    //public void setItemdetails(Itemdetails itemdetails) {
      //  this.itemdetails = itemdetails;
    //}
    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }
    public Long getRestroId() {
        return restroId;
    }

    public void setRestroId(Long restroId) {
        this.restroId = restroId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}

