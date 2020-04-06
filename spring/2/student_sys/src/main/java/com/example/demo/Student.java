package com.example.demo;

import java.util.Objects;

public class Student {
  private String name;
  private String gender;
  private int classNumber;

  public Student(String name, String gender, int classNumber) {
    this.name = name;
    this.gender = gender;
    this.classNumber = classNumber;
  }

  public Student(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public int getClassNumber() {
    return classNumber;
  }

  public void setClassNumber(int classNumber) {
    this.classNumber = classNumber;
  }

  @Override
  public String toString() {
    return "Student{" +
            "name='" + name + '\'' +
            ", gender='" + gender + '\'' +
            ", classNumber=" + classNumber +
            '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Student student = (Student) o;
    return classNumber == student.classNumber &&
            Objects.equals(name, student.name) &&
            Objects.equals(gender, student.gender);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, gender, classNumber);
  }
}
