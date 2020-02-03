package com.thoughtworks;

public class ArrayPractice3 {

    /**
     * 完成本方法实现功能: 将一个整型数组array中值0的元素去掉，并把剩下的元素组成新的数组
     */
    public static int[] filterZero(int[] array) {

        int zeroNum = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] == 0) {
                zeroNum += 1;
            }
        }

        int j = 0;
        int[] resultArr = new int[array.length - zeroNum];
        for (int i = 0; i < array.length; i++) {

            if (array[i] != 0) {
                resultArr[j] = array[i];
                j += 1;
            }
        }

        return resultArr;
    }
}
