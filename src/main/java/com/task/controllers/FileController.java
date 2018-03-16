package com.task.controllers;

import com.task.models.AssignmentTeam;
import com.task.models.ParseFile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.util.LinkedHashMap;


@RestController
public class FileController
{


    @RequestMapping("/")
    public ModelAndView home()
    {
        ModelAndView model = new ModelAndView();

        model.setViewName("upload");
        return model;
    }

    @RequestMapping( "/upload")
    public AssignmentTeam upload(MultipartFile file)
    {
        ParseFile parseFile = new ParseFile(file, ParseFile.DATE_PATTERT_ISO_8601);
       return parseFile.getTopTeam();
    }

}
