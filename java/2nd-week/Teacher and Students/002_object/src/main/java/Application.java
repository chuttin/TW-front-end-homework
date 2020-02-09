package main.java;

import main.java.model.Student;
import main.java.model.Teacher;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Application {

  public static void main(String[] args) {
    Student stu1 = new Student();
    stu1.setName("李莉");
    stu1.setAge(20);
    stu1.setGender("女");

    Student stu2 = new Student();
    stu2.setName("王其");
    stu2.setAge(21);
    stu2.setGender("男");

    Student stu3 = new Student();
    stu3.setName("赵毅");
    stu3.setAge(22);
    stu3.setGender("男");

    System.out.println(stu1.getName());
    System.out.println(stu1.getAge());
    System.out.println(stu1.getGender());
    stu1.study();
    stu1.rest();

    Teacher teach1 = new Teacher();
    teach1.setName("张龙");

    List<Student> teach1Students = new ArrayList<>(Arrays.asList(stu1, stu2));
    teach1.setStudentsList(teach1Students);
    teach1.showStuList();

    System.out.println("添加学生后\n");
    teach1.addStu(stu3);
    teach1.showStuList();
  }
}
