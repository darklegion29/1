package com.task.models;

import java.util.LinkedHashMap;
import java.util.List;

public interface EmployeesTogether
{

    public List<AssignmentTeam> employeesAtSameTime(List<Long> projectIds, LinkedHashMap<Long,List<Employee>> projectEmployees);
    public LinkedHashMap<Long, List<Employee>> projectEmployees(List<Employee>employees);
    public AssignmentTeam getTopTeam();
}
