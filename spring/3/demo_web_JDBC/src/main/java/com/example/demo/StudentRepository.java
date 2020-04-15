package com.example.demo;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, String> {
  @Query("SELECT * FROM student WHERE name = :name")
  Student findByName(String name);
}
