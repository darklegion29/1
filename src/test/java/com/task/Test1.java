package com.task;


import com.task.models.ParseFile;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
@WebAppConfiguration
public class Test1
{


    @Before
    public void setup()
    {

    }

    @org.junit.Test
    @Rollback(false)
    public void test1()
    {
        String path = "C:\\Users\\DarkleGion\\Desktop\\danni.txt";
        String pattern = "yyyy-MM-dd";

        ParseFile parseFile = new ParseFile(path, pattern);
    }

}