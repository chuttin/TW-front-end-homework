public class Eagles extends Birds {
  private String eatStuff;

  private String sleepPlace;

  public String getSleepPlace() {
    return sleepPlace;
  }

  public void setSleepPlace(String sleepPlace) {
    this.sleepPlace = sleepPlace;
  }

  public Eagles() {
    System.out.println("我是一个出生时没有任何设定的鹰，我好惨一只鹰");
  }

  public Eagles(int age, int weight, int flySpeed, String eatStuff, String sleepPlace) {
    super(age, weight, flySpeed);
    this.eatStuff = eatStuff;
    this.sleepPlace = sleepPlace;
  }

  public void catchFoodMethod(String howToCatch) {
    System.out.println("我这样捕食：" + howToCatch);
  }

  public String getEatStuff() {
    return eatStuff;
  }

  public void setEatStuff(String eatStuff) {
    this.eatStuff = eatStuff;
  }
}
