package com.task.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.util.LinkedHashMap;

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
    public LinkedHashMap<Long, Long> listUploadedFiles(MultipartFile file) throws IOException
    {

//        BufferedReader br;
//        List<String> result = new ArrayList<>();
//        try {
//
//            String line;
//            InputStream is = file.getInputStream();
//            br = new BufferedReader(new InputStreamReader(is));
//            while ((line = br.readLine()) != null) {
//                result.add(line);
//            }
//
//        } catch (IOException e) {
//            System.err.println(e.getMessage());
//        }
        LinkedHashMap<Long,Long> hashMap = new LinkedHashMap<>();
        hashMap.put(2L,3L);
        return hashMap ;
    }
}
