public class Wechat extends Software {
  public void pressF5() {
    System.out.println("我是Wechat");
    super.pressF5();
    System.out.println("并且我还要同时弹出英文输出框");
  }
}
