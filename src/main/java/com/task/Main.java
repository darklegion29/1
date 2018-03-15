package com.task;

import com.task.models.ParseFile;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class Main
{

	public static void main(String[] args)
	{
		SpringApplication.run(Main.class, args);
		Main.test();
	}


	public static void test()
	{
		String path = "C:\\Users\\DarkleGion\\Desktop\\danni.txt";
		String pattern = "yyyy-MM-dd";

		ParseFile parseFile = new ParseFile(path, pattern);

	}
}
