package com.task.models;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

public class ParseFile
{

    private LinkedHashMap<Long,List<Employee>> employees;

    public ParseFile(String path ,String pattern)
    {
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";
        this.employees = new LinkedHashMap<>();
        try
        {

            br = new BufferedReader(new FileReader(path));
            while ((line = br.readLine()) != null)
            {
                String[] data = line.split(cvsSplitBy);
                Long employeeId = Long.parseLong(data[0].trim());
                Long projectId = Long.parseLong(data[1].trim());
                Date dateTo;
                Date dateFrom;
                try
                {
                    String dateToStr = data[2].trim();
                    String dateFromStr = data[3].trim();
                    if (dateToStr.equalsIgnoreCase("NULL"))
                    {
                        dateTo = new Date();
                    } else
                    {
                        dateTo = new SimpleDateFormat(pattern).parse(dateToStr);
                    }
                    if (dateFromStr.equalsIgnoreCase("NULL"))
                    {
                        dateFrom = new Date();
                    } else
                    {
                        dateFrom = new SimpleDateFormat(pattern).parse(dateFromStr);
                    }

                    Employee employee = new Employee(employeeId, projectId, dateTo, dateFrom);

                    if (this.employees.containsKey(projectId) && !(this.getEmployees().get(projectId).contains(employee)))
                    {
                        this.employees.get(projectId).add(employee);
                    } else
                    {
                        List<Employee> employeeList = new ArrayList<>();
                        employeeList.add(employee);
                        this.employees.put(projectId,employeeList);
                    }

                    System.out.println(employee.toString());
                } catch (ParseException e)
                {
                    e.printStackTrace();
                }

            }

        } catch (FileNotFoundException e)
        {
            e.printStackTrace();
        } catch (IOException e)
        {
            e.printStackTrace();
        } finally
        {
            if (br != null)
            {
                try
                {
                    br.close();
                } catch (IOException e)
                {
                    e.printStackTrace();
                }
            }
        }
    }

    public LinkedHashMap<Long, List<Employee>> getEmployees()
    {
        return employees;
    }

    public void setEmployees(LinkedHashMap<Long, List<Employee>> employees)
    {
        this.employees = employees;
    }
}