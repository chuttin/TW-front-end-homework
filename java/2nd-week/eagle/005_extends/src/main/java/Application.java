public class Application {

    /**
     * 运用之前写的类在Application中用代码描述一下场景：
     * 一只4岁的老鹰，体重5Kg，这只老鹰生活在兔子窝所以它只捕食兔子。
     * 某天它先翱翔天空，在饥肠辘辘之际捕食了一只兔子，然后饱餐一顿，
     * 心满意足之后就睡觉了。
     */
    public static void main(String[] args) {
        Eagles eag1 = new Eagles();
        eag1.setAge(4);
        eag1.setWeight(5);
        eag1.setSleepPlace("兔子窝");
        eag1.setEatStuff("兔子");

        eag1.howToFly("翱翔天空");
        eag1.catchFoodMethod("饥肠辘辘时捕食");
        eag1.eat(eag1.getEatStuff());
        eag1.sleep(eag1.getSleepPlace());
    }
}
