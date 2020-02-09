public class Application {
    public static void main(String[] args) {
        IntellijIdea intellijIdea = new IntellijIdea();
        intellijIdea.pressF5();

        Chrome chrome = new Chrome();
        chrome.pressF5();

        Wechat wechat = new Wechat();
        wechat.pressF5();
    }
}
