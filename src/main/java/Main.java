import Models.ParseFile;

public class Main
{
    public static void main(String[] args)
    {
        Main.test();
    }

    public static void test()
    {
        String path = "C:\\Users\\DarkleGion\\Desktop\\danni.txt";
        String pattern = "yyyy-MM-dd";

        ParseFile parseFile = new ParseFile(path,pattern);

    }

}
