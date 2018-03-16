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

public class ParseFile implements EmployeesTogether
{
    public static final String DATE_PATTERT_ISO_8601 = "yyyy-MM-dd";
    private   List<AssignmentTeam> assignmentTeams;

    public ParseFile(MultipartFile file, String pattern)
    {
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";
        List<Long> projectIds = new ArrayList<>();
        List<Employee> employees = new ArrayList<>();
        try
        {

            InputStream is = file.getInputStream();
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null)
            {
                String[] data = line.split(cvsSplitBy);

                if (data.length == 4 &&
                        (data[0].trim().length() > 0) &&
                        (data[1].trim().length() > 0) &&
                        (data[2].trim().length() > 0) &&
                        (data[3].trim().length() > 0))
                {
                    String employeeIdStr = data[0].trim();
                    String projectIdStr = data[1].trim();

                        Long employeeId = Long.parseLong(employeeIdStr);
                        Long projectId = Long.parseLong(projectIdStr);
                        String dateToStr = data[2].trim();
                        String dateFromStr = data[3].trim();
                        Date dateTo;
                        Date dateFrom;

                        try
                        {
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

                            employees.add(employee);

                            System.out.println(employee.toString());

                        } catch (ParseException e)
                        {
                            e.printStackTrace();
                        }
                    }
                }
            LinkedHashMap<Long, List<Employee>> projectEmployees = this.projectEmployees(employees);
            this.assignmentTeams = this.employeesAtSameTime(projectIds, projectEmployees);


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


    /**
     *
     * @return the team that has worked the most days
     */
    public AssignmentTeam getTopTeam()
    {
        Integer max = 0;
        AssignmentTeam topTeam = null;
        for (AssignmentTeam assignmentTeam : this.getAssignmentTeams())
        {
            if (assignmentTeam.getDaysWorked() > max)
            {
                max = assignmentTeam.getDaysWorked();
                topTeam = assignmentTeam;
            }
        }

        return topTeam;
    }

    /**
     *
     * @param employees
     * @return Employees that worked on same project
     */
    public LinkedHashMap<Long, List<Employee>> projectEmployees(List<Employee>employees)
    {
        LinkedHashMap<Long,List<Employee>>projectEmployees = new LinkedHashMap<>();


        for (Employee employee : employees)
        {
            Long projectId = employee.getProjectId();

            if (projectEmployees.containsKey(projectId) && !(projectEmployees.get(projectId).contains(employee)))
            {
                projectEmployees.get(projectId).add(employee);
            } else
            {
                List<Employee> employeeList = new ArrayList<>();
                employeeList.add(employee);
                projectEmployees.put(projectId, employeeList);
            }
        }

        return projectEmployees;
    }


    public List<AssignmentTeam> employeesAtSameTime(List<Long> projectIds, LinkedHashMap<Long,List<Employee>>  projectEmployees)
    {
        List<AssignmentTeam> assignmentTeams = new ArrayList<>();
        for (Long projectId : projectIds)
        {
            List<Employee> employees = projectEmployees.get(projectId);

            for (Employee employee : employees)
            {
                for (Employee employee1 : employees)
                {
                    if ((employee.getDateFrom().compareTo(employee1.getDateFrom()) >= 0) && (employee.getDateFrom().compareTo(employee1.getDateTo()) <= 0 ) && !(employee.getId().equals(employee1.getId())))
                    {
                        Date dateToTogether;
                        if (employee.getDateTo().compareTo(employee1.getDateTo()) <= 0)
                        {
                            dateToTogether = employee.getDateTo();
                        }
                        else
                        {
                            dateToTogether = employee1.getDateTo();
                        }
                        DateTime dateFrom = new DateTime(employee.getDateFrom());
                        DateTime dateTo = new DateTime(dateToTogether);
                        int days = Days.daysBetween(dateFrom, dateTo).getDays();
                        AssignmentTeam assignmentTeam = new AssignmentTeam(employee, employee1, projectId, days);
                        if (!assignmentTeams.contains(assignmentTeam))
                        {
                            assignmentTeams.add(assignmentTeam);
                        }

                    }
                }

            }

        }
        return assignmentTeams;
    }

    public List<AssignmentTeam> getAssignmentTeams()
    {
        return assignmentTeams;
    }

    public void setAssignmentTeams(List<AssignmentTeam> assignmentTeams)
    {
        this.assignmentTeams = assignmentTeams;
    }

}