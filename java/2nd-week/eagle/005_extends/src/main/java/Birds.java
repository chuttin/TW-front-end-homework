public class Birds extends Animals {
  private int flySpeed;

  public Birds() {
    System.out.println("我是一只鸟，我刚出生，各个方面都还是小白");
  }

  public Birds(int age, int weight, int flySpeed) {
    super(age, weight);
    this.flySpeed = flySpeed;
  }

  public int getFlySpeed() {
    return flySpeed;
  }

  public void setFlySpeed(int flySpeed) {
    this.flySpeed = flySpeed;
  }

  public void howToFly(String howToFly) {
    System.out.println("我这么飞：" + howToFly);
  }
}
