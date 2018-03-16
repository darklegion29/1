package com.task;


import com.task.models.AssignmentTeam;
import com.task.models.ParseFile;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

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
        Path path = Paths.get(   "/home/dark/IdeaProjects/1/testData.txt");
        String name = "file.txt";
        String originalFileName = "file.txt";
        String contentType = "text/plain";
        byte[] content = null;
        try {
            content = Files.readAllBytes(path);
        } catch (final IOException e) {
        }
        MultipartFile result = new MockMultipartFile(name,
                originalFileName, contentType, content);

        ParseFile parseFile = new ParseFile(result, ParseFile.DATE_PATTERT_ISO_8601);


        AssignmentTeam topTeam = parseFile.getTopTeam();
        if (null != topTeam)
        {
            Integer days = topTeam.getDaysWorked();
        }
    }

}