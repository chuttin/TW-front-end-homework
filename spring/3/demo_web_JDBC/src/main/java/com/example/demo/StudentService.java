package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class StudentService {
  @Autowired
  private StudentRepository stuRepo;

  public Student query(String name) {
    Student studentFoundByName = stuRepo.findByName(name);
    return studentFoundByName;
  }

  public String insert(Student stu) {
    Student stuByName = stuRepo.findByName(stu.getName());
    System.out.println(stuByName);
    if (stuByName != null) {
      return "姓名重复";
    } else {
      stuRepo.save(stu);
      return "添加成功";
    }
  }

  public Iterable<Student> all() {
    return stuRepo.findAll();
  }

  public String delete(Student stu) {
    Student stuByName = stuRepo.findByName(stu.getName());
    if (stuByName != null){
      stuRepo.delete(stuByName);
      return "删除成功";
    } else {
      return "该学生不存在";
    }
  }

  public Student findByName(String name) {
    return stuRepo.findByName(name);
  }
}
