package com.task.models;

import java.util.Objects;

public class AssignmentTeam
{
    private Employee employee;

    private Employee employeeSecond;

    private Long projectId;

    private Integer daysWorked;

    public AssignmentTeam()
    {
    }

    public AssignmentTeam(Employee employee, Employee employeeSecond, Long projectId, Integer daysWorked)
    {
        this.employee = employee;
        this.employeeSecond = employeeSecond;
        this.projectId = projectId;
        this.daysWorked = daysWorked;
    }

    public Employee getEmployee()
    {
        return employee;
    }

    public void setEmployee(Employee employee)
    {
        this.employee = employee;
    }

    public Employee getEmployeeSecond()
    {
        return employeeSecond;
    }

    public void setEmployeeSecond(Employee employeeSecond)
    {
        this.employeeSecond = employeeSecond;
    }

    public Long getProjectId()
    {
        return projectId;
    }

    public void setProjectId(Long projectId)
    {
        this.projectId = projectId;
    }

    public Integer getDaysWorked()
    {
        return daysWorked;
    }

    public void setDaysWorked(Integer daysWorked)
    {
        this.daysWorked = daysWorked;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AssignmentTeam that = (AssignmentTeam) o;
        return employee.getId().equals(that.employee.getId()) &&
                (employeeSecond.getId().equals(that.employeeSecond.getId())) ||
                employee.getId().equals(that.employeeSecond.getId()) &&
                        (employeeSecond.getId().equals(that.employee.getId())) ;
    }


}
