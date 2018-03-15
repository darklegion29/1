package com.task.libs;

import org.joda.time.DateTime;
import org.joda.time.Weeks;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeBetween
{
    private Date dateFrom;

    private Date dateTo;

    private static final String FORMAT = "yyyy-MM-dd H:mm:ss";

    public TimeBetween(Date dateFrom, Date dateTo)
    {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }

    public TimeBetween(String dateFrom, String dateTo)
    {
        Date dateFromObj = null;
        try {
            dateFromObj = new SimpleDateFormat(FORMAT).parse(dateFrom);
        } catch (ParseException e) {

            e.printStackTrace();
        }

        Date dateToObj = null;
        try
        {
            dateToObj = new SimpleDateFormat(FORMAT).parse(dateTo);
        } catch (ParseException e)
        {
            e.printStackTrace();
        }

        this.dateFrom = dateFromObj;
        this.dateTo = dateToObj;
    }

    public Float getDays()
    {
        long difference = this.dateTo.getTime() -  this.dateFrom.getTime();
        float daysBetween = (difference / (1000*60*60*24));
        return daysBetween;
    }
    public Float getHours()
    {
        long difference = this.dateTo.getTime() - this.dateFrom.getTime();
        float hoursBetween = (difference / (1000 * 60 * 60));
        return hoursBetween;
    }

    public int getWeeks()
    {
        DateTime dateFrom = new DateTime(this.dateFrom);
        DateTime dateTo = new DateTime(this.dateTo);
        return Weeks.weeksBetween(dateFrom, dateTo).getWeeks();
    }


    public Date getDateFrom()
    {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom)
    {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo()
    {
        return dateTo;
    }

    public void setDateTo(Date dateTo)
    {
        this.dateTo = dateTo;
    }

    public static String getFORMAT()
    {
        return FORMAT;
    }
}
