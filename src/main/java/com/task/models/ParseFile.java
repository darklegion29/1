package com.task.models;

import org.joda.time.DateTime;
import org.joda.time.Days;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

public class ParseFile
{
    public static final String DATE_PATTERT_ISO_8601 = "yyyy-MM-dd";
    private LinkedHashMap<Long,List<Employee>> employees;
    private   List<AssignmentTeam> assignmentTeams;

    public ParseFile(MultipartFile file, String pattern)
    {
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";
        this.employees = new LinkedHashMap<>();
        List<Long> projectIds = new ArrayList<>();
        try
        {

            InputStream is = file.getInputStream();
            br = new BufferedReader(new InputStreamReader(is));
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

                    if (!projectIds.contains(projectId))
                    {
                        projectIds.add(projectId);
                    }

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
               this.assignmentTeams = new ArrayList<>();
            for (Long projectId : projectIds)
            {
                List<Employee> employees = this.employees.get(projectId);

                for (Employee employee : employees)
                {
                    for (Employee employee1 : employees)
                    {
                        if ((employee.getDateFrom().compareTo(employee1.getDateFrom()) >= 0) && (employee.getDateFrom().compareTo(employee1.getDateTo()) <= 0 ) && !(employee.getId().equals(employee1.getId())))
                        {
                           Date largestDate;
                            if (employee.getDateTo().compareTo(employee.getDateTo()) >= 0)
                            {
                                largestDate = employee.getDateTo();
                            }
                            else
                            {
                                largestDate = employee1.getDateTo();
                            }
                            DateTime dateFrom = new DateTime(employee.getDateFrom());
                            DateTime dateTo = new DateTime(largestDate);
                            int days = Days.daysBetween(dateFrom, dateTo).getDays();
                            this.assignmentTeams.add(new AssignmentTeam(employee,employee1,projectId,days));

                        }
                    }

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

    public List<AssignmentTeam> getAssignmentTeams()
    {
        return assignmentTeams;
    }

    public void setAssignmentTeams(List<AssignmentTeam> assignmentTeams)
    {
        this.assignmentTeams = assignmentTeams;
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