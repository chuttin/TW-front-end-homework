package com.thoughtworks;

public class ArrayPractice4 {

    /**
     * 完成本方法实现功能: 将一个数字插入到给定的已经排好序的数组中，要求插入以后数组依然是有序的
     */
    public static int[] insert(int number) {
        int[] array = new int[]{1, 20, 50, 100};
        int[] resultArr = new int[array.length + 1];
        int insertIndex = 0;

        if (number <= array[0]) {
            resultArr[0] = number;
            for (int i = 0; i < array.length; i++) {
                resultArr[i + 1] = array[i];
            }
        }else if (number >= array[array.length - 1]) {
            for (int i = 0; i < array.length; i++) {
                resultArr[i] = array[i];
            }
            resultArr[resultArr.length - 1] = number;
        }else {
            for (int i = 0; i < array.length; i++) {
                if (number > array[i] && number < array[i + 1]) {
                    insertIndex = i + 1;
                    resultArr[insertIndex] = number;
                }
            }

            for (int i = 0; i < insertIndex; i++) {
                resultArr[i] = array[i];
            }

            for (int i = insertIndex; i < array.length; i++) {
                resultArr[i + 1] = array[i];
            }
        }

        return resultArr;
    }
}
