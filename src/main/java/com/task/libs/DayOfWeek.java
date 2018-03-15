package com.task.libs;



public class DayOfWeek
{
    public static Day[] dayCalendar={
            Day.Sunday,
            Day.Monday,
            Day.Tuesday,
            Day.Wednesday,
            Day.Thursday,
            Day.Friday,
            Day.Saturday
    };

    public String getDayOfWeekString(int value)
    {
        String day = "";
        switch (value)
        {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
        }
        return day;
    }

    public int getDayOfWeekInt(String value)
    {
        int day = 0;

        switch (value)
        {
            case "Sunday":
                day = 0;
                break;
            case "Monday":
                day = 1;
                break;
            case "Tuesday":
                day = 2;
                break;
            case "Wednesday":
                day = 3;
                break;
            case "Thursday":
                day = 4;
                break;
            case "Friday":
                day = 5;
                break;
            case "Saturday":
                day = 6;
                break;
        }
        return day;
    }

    /**
     * 1 for Sunday 7 for Saturday
     * @param value
     * @return
     */
    public static Day getDayOfWeekCalendar(int value)
    {
        return DayOfWeek.dayCalendar[value-1];
    }

    /**
     * 0 for Sunday 6 for Saturday
     * @param value
     * @return
     */
    public static Day getDayOfWeek(int value)
    {
        return DayOfWeek.dayCalendar[value];
    }

}