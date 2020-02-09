package main.java.model;

import java.util.ArrayList;
import java.util.List;

public class Teacher {
  private String name;
  private List<Student> studentsList = new ArrayList<>();

  public void addStu(Student newStu) {
    studentsList.add(newStu);
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Student> getStudentsList() {
    return studentsList;
  }

  public void setStudentsList(List<Student> studentsList) {
    this.studentsList = studentsList;
  }

  public void showStuList() {
    for (Student stu : studentsList) {
      System.out.println("姓名：" + stu.getName());
      System.out.println("年龄：" + stu.getAge());
      System.out.println("性别：" + stu.getGender());
      System.out.println("=======================\n");
    }
  }
}
