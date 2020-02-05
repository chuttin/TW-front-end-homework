package com.thoughtworks;

import java.util.*;

public class App {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("请点餐（菜品Id x 数量，用逗号隔开）：");
    String selectedItems = scan.nextLine();
    String summary = bestCharge(selectedItems);
    System.out.println(summary);
  }

  /**
   * 接收用户选择的菜品和数量，返回计算后的汇总信息
   *
   * @param selectedItems 选择的菜品信息
   */
  public static String bestCharge(String selectedItems) {
    String[] selectedArr = selectedItems.split(",");
    Map<String, Integer> selectedMap = new HashMap<String, Integer>();

    List<String> listId = new ArrayList<String>();
    List<Integer> listCount = new ArrayList<Integer>();

    for(int i = 0; i < selectedArr.length; i++) {
      String itemId = selectedArr[i].split(" x ")[0];
      listId.add(itemId);
      int itemCount = Integer.parseInt(selectedArr[i].split(" x ")[1]);
      listCount.add(itemCount);
    }

    selectedItems = "============= 订餐明细 =============\n";

    double firstMethod = 0;
    double secondMethod = 0;
    double thirdMethod = 0;
    String halfPriceName = "";

    for (int i = 0; i < listId.size(); i++) {
      int index = Arrays.binarySearch(getItemIds(), listId.get(i));
      selectedItems += getItemNames()[index] + " x " + listCount.get(i) + " = " + ((int)getItemPrices()[index]*listCount.get(i)) + "元\n";
      firstMethod += getItemPrices()[index]*listCount.get(i);
      if (Arrays.binarySearch(getHalfPriceIds(), listId.get(i)) >= 0) {
        secondMethod += getItemPrices()[index] * listCount.get(i) / 2;
        halfPriceName += getItemNames()[index] + "，";
      }else {
        secondMethod += getItemPrices()[index] * listCount.get(i);
      }
      thirdMethod += getItemPrices()[index]*listCount.get(i);
    }

    if (firstMethod >= 30.00) {
      firstMethod -= 6.00;
    }

    selectedItems += "-----------------------------------\n";

    if (thirdMethod == firstMethod && thirdMethod == secondMethod) {
      selectedItems += "总计：" + (int)thirdMethod + "元\n";
    }else if (firstMethod <= secondMethod) {
      selectedItems += "使用优惠:\n" + "满30减6元，省6元\n" + "-----------------------------------\n" + "总计：" + (int)firstMethod + "元\n";
    }else if (firstMethod > secondMethod) {
      selectedItems += "使用优惠:\n" + "指定菜品半价(" + halfPriceName.substring(0, halfPriceName.length() - 1) + ")，省" + ((int)(thirdMethod - secondMethod)) + "元\n" +
              "-----------------------------------\n" + "总计：" + (int)secondMethod + "元\n";
    }

    selectedItems += "===================================";
    return selectedItems;
  }

  /**
   * 获取每个菜品依次的编号
   */
  public static String[] getItemIds() {
    return new String[]{"ITEM0001", "ITEM0013", "ITEM0022", "ITEM0030"};
  }

  /**
   * 获取每个菜品依次的名称
   */
  public static String[] getItemNames() {
    return new String[]{"黄焖鸡", "肉夹馍", "凉皮", "冰粉"};
  }

  /**
   * 获取每个菜品依次的价格
   */
  public static double[] getItemPrices() {
    return new double[]{18.00, 6.00, 8.00, 2.00};
  }

  /**
   * 获取半价菜品的编号
   */
  public static String[] getHalfPriceIds() {
    return new String[]{"ITEM0001", "ITEM0022"};
  }
}
