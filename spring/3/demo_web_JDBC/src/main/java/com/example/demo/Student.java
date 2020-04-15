package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.Optional;

@Table("student")
public class Student {
  @Id
  @Column("id")
  private Integer id = null;
  @Column("name")
  private String name;
  @Column("gender")
  private int gender;
  @Column("classNumber")
  private int classNumber;

  public Student(Integer id, String name, int gender, int classNumber) {
    this.name = name;
    this.gender = gender;
    this.classNumber = classNumber;
    this.id = id;
  }

  public Student(String name, int gender, Integer id) {
    this.name = name;
    this.gender = gender;
    this.id = id;
  }

  public Student(String name) {
    this.name = name;
  }

  public Student() {}

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getGender() {
    return gender;
  }

  public void setGender(int gender) {
    this.gender = gender;
  }

  public int getClassNumber() {
    return classNumber;
  }

  public void setClassNumber(int classNumber) {
    this.classNumber = classNumber;
  }

  public Integer getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @Override
  public String toString() {
    return "Student{" +
            "name='" + name + '\'' +
            ", gender=" + gender +
            ", classNumber=" + classNumber +
            ", id=" + id +
            '}';
  }
}
