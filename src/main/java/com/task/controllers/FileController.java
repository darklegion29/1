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
        Integer max = 0;
        AssignmentTeam topTeam = null;
        for (AssignmentTeam assignmentTeam : parseFile.getAssignmentTeams())
        {
            if (assignmentTeam.getDaysWorked() > max)
            {
                max = assignmentTeam.getDaysWorked();
                topTeam = assignmentTeam;
            }
        }

        return topTeam;
    }

    @RequestMapping( "/data")
    public LinkedHashMap<Long, Long> data()
    {
       // ParseFile parseFile = new ParseFile(file,ParseFile.DATE_PATTERT_ISO_8601);


        ModelAndView model = new ModelAndView();

        model.setViewName("data");
        LinkedHashMap<Long,Long> hashMap = new LinkedHashMap<>();
        hashMap.put(2L,3L);
        return hashMap ;
    }
}
