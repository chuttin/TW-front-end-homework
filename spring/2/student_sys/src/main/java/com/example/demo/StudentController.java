package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class StudentController {
  private List<Student> studentList = new LinkedList<>();

  @GetMapping("/query/{name}")
  public List<Student> query(@PathVariable String name) {
    List<Student> studentsFoundByName = studentList.stream().filter(stu -> stu.getName().equals(name)).collect(Collectors.toList());
    return studentsFoundByName;
  }

  @PostMapping("/insert")
  public String insert(@RequestBody Student stu) {
    List<Student> studentHasSameName = studentList.stream().filter(student -> student.getName().equals(stu.getName())).collect(Collectors.toList());
    if (studentHasSameName.size() == 0) {
      studentList.add(stu);
      return "添加成功";
    } else {
      return "姓名重复";
    }
  }

  @GetMapping("/all")
  public List<Student> all() {
    return studentList;
  }

  @PostMapping("/delete")
  public String delete(@RequestBody Student student) {
    for(Student stu : studentList) {
      if (stu.getName().equals(student.getName())) {
        studentList.remove(stu);
        return "删除成功";
      }
    }
    return "该学生不存在";
  }
}
