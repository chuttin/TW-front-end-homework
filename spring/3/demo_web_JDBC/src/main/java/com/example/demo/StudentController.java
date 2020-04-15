package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
  @Autowired
  private StudentService stuService;

  @GetMapping("/query/{name}")
  public Student query(@PathVariable String name) {
    return stuService.findByName(name);
  }

  @PostMapping("/insert")
  public String insert(@RequestBody Student stu) {
    return stuService.insert(stu);
  }

  @GetMapping("/all")
  public Iterable<Student> all() {
    return stuService.all();
  }

  @PostMapping("/delete")
  public String delete(@RequestBody Student stu) {
    return stuService.delete(stu);
  }
}
