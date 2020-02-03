package com.company;
import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
    int a = 7;
    if (a == 2) {
      System.out.println("是质数");
    }else {
      for (int i = 2; i < a; i++) {
        if (a % i == 0) {
          System.out.println("不是质数");
          return;
        }
      }
      System.out.println("是质数");
    }
  }
}
