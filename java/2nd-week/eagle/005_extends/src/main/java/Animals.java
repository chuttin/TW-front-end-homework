//import com.sun.xml.internal.xsom.impl.scd.Step;

public class Animals {
  private int age;
  private int weight;

  public Animals() {
    System.out.println("我是一只不带有任何出生在世上的动物");
  }

  public Animals(int age, int weight) {
    this.age = age;
    this.weight = weight;
    System.out.println("我是全参构造。吧？");
  }

  public void eat(String stuff) {
    System.out.println("吃了" + stuff);
  }

  public void sleep(String place) {
    System.out.println("睡在了" + place);
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getWeight() {
    return weight;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }
}
