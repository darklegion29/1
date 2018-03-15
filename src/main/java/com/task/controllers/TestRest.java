package com.task.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

@RestController
//@RequestMapping("test")
public class TestRest {
    private static final Logger logger = LoggerFactory.getLogger(TestRest.class);


    @RequestMapping("/l")
    public ModelAndView r()
    {
        ModelAndView model = new ModelAndView();

        model.setViewName("log2");
        return model;
    }

    @RequestMapping("/u")
    public ModelAndView u()
    {
        ModelAndView model = new ModelAndView();

        model.setViewName("upload");
        return model;
    }

    @RequestMapping("/f")
    public String listUploadedFiles() throws IOException
    {



        return "uploadForm";
    }
}
