package com.example.springbootmongodb.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table ( name = "Restrautants")
public class Restrautants implements Serializable {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String email ;
    private String username;
    private String name;
    private String password ;
    private String address;

    private String money;
    //@Column(columnDefinition = "LONGVARBINARY")
   // private String image;
    // private String role;
    //private String phone;
    //private String gender;

    //public String getRole() {
    //  return role;
    //}

    //public void setRole(String role) {
    //  this.role = role;
    //}

    public Restrautants(){}

    public Restrautants(String s){}




    public Restrautants(String email, String username, String password, String address, String name, String money) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.address=address;
        this.name=name;
        this.money=money;
       // this.image=image;
    }

    public Long getuserid() {
        return id;
    }

    @Column( nullable = false , columnDefinition = " int default '1'")
    private int active;

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }

    @Embedded

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

//    public String getImage() {
//       return image;
//    }
//
//    public void setImage(String image) {
//        this.image = image;
//    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;

    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address)
    {
        this.address=address;
    }
    //    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getGender() {
//        return gender;
//    }
//
//    public void setGender(String gender) {
//        this.gender = gender;
//    }
}




