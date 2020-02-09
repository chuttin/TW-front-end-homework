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
    String[] itemsId = listInfo(selectedItems)[0];
    String[] itemsCount = listInfo(selectedItems)[1];

    String[] itemsPrice = idToPriceAndName(itemsId)[0];
    String[] itemsName = idToPriceAndName(itemsId)[1];

    selectedItems = listShow(itemsId, itemsName, itemsCount, itemsPrice);

    return selectedItems;
  }


  public static String[][] listInfo(String selectedItem) {
    String[] selectedArr = selectedItem.split(",");

    String[][] itemInfo = new String[2][selectedArr.length];
    String[] itemsId = new String[selectedArr.length];
    String[] itemsCount = new String[selectedArr.length];

    for (int i = 0; i < selectedArr.length; i++) {
      itemsId[i] = selectedArr[i].split(" x ")[0];
      itemsCount[i] = selectedArr[i].split(" x ")[1];
    }

    itemInfo[0] = itemsId;
    itemInfo[1] = itemsCount;

    return itemInfo;
  }

  public static String[][] idToPriceAndName(String[] itemsId) {
    String[] itemsPrice = new String[itemsId.length];
    String[] itemsName = new String[itemsId.length];

    for (int i = 0; i < itemsId.length; i++) {
      int index = Arrays.binarySearch(getItemIds(), itemsId[i]);
      itemsPrice[i] = String.valueOf((int) getItemPrices()[index]);
      itemsName[i] = getItemNames()[index];
    }

    String[][] priceAndName = {itemsPrice, itemsName};
    return priceAndName;
  }

  public static int totalSum(String[] count, String[] price) {
    int totalSum = 0;
    for (int i = 0; i < count.length; i++) {
      totalSum += Integer.parseInt(count[i]) * Integer.parseInt(price[i]);
    }

    return totalSum;
  }

  public static int firstMethodSum(int totalSum) {
    int firstMethod = totalSum >= 30 ? totalSum - 6 : totalSum;
    return firstMethod;
  }

  public static int secondMethodSum(String[] itemsId, String[] itemsCount, String[] itemsPrice) {
    for (int i = 0; i < itemsId.length; i++) {
      if (Arrays.binarySearch(getHalfPriceIds(), itemsId[i]) >= 0) {
        itemsPrice[i] = String.valueOf(Integer.parseInt(itemsPrice[i]) / 2);
      }
    }

    int secondMethodSum = totalSum(itemsCount, itemsPrice);
    return secondMethodSum;
  }

  public static int whichMethod(int totalSum, int firstSum, int secondSum) {
    if (totalSum == firstSum && totalSum == secondSum) {
      return 3;
    } else if (firstSum <= secondSum) {
      return 1;
    } else {
      return 2;
    }
  }

  public static String listShow(String[] ids, String[] names, String[] counts, String[] prices) {
    StringBuilder listPrint = new StringBuilder();
    listPrint.append("============= 订餐明细 =============\n");
    for (int i = 0; i < names.length; i++) {
      listPrint.append(names[i]).append(" x ").append(counts[i]).append(" = ").append(Integer.parseInt(counts[i]) * Integer.parseInt(prices[i])).append("元\n");
    }

    listPrint.append("-----------------------------------\n");

    int totalSum = totalSum(counts, prices);

    int firstMethodSum = firstMethodSum(totalSum);

    int secondMethodSum = secondMethodSum(ids, counts, prices);

    int whichMethod = whichMethod(totalSum, firstMethodSum, secondMethodSum);

    int finalSum = 0;

    if (whichMethod == 1) {
      listPrint.append("使用优惠:\n").append("满30减6元，省6元\n").append("-----------------------------------\n");
      finalSum = firstMethodSum;
    }
    if (whichMethod == 2) {
      listPrint.append("使用优惠:\n").append("指定菜品半价(黄焖鸡，凉皮)，省").append(totalSum - secondMethodSum).append("元\n").append("-----------------------------------\n");
      finalSum = secondMethodSum;
    }
    if (whichMethod == 3) {
      finalSum = totalSum;
    }
    listPrint.append("总计：").append(finalSum).append("元\n").append("===================================");

    String listShow = "" + listPrint;

    return listShow;
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