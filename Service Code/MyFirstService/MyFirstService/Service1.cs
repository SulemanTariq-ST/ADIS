using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace MyFirstService
{
    public partial class Service1 : ServiceBase
    {
        Timer timer = new Timer(); // name space(using System.Timers;)  
        SqlConnection conn = new SqlConnection("Data Source = DESKTOP-0HQQFA6;Initial Catalog = ADISDataBase; User ID = ADIS; Password = ADIS1");

        public Service1()
        {
            InitializeComponent();
        }
        protected override void OnStart(string[] args)
        {
            WriteToFile("Service is started at " + DateTime.Now);

            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }

            String query1 = "SELECT SoftwareName, softwareDirectory FROM RequestTable";
            SqlDataAdapter sqlda1 = new SqlDataAdapter(query1, conn);
            sqlda1.SelectCommand.ExecuteNonQuery();
            DataTable dtbl = new DataTable();
            sqlda1.Fill(dtbl);

            foreach (DataRow row in dtbl.Rows)
            {
                if (row == null)
                {
                    WriteToFile("Didn't find a request for installation at" + DateTime.Now);
                }
                else
                {
                    WriteToFile("Found a request for installation at" + DateTime.Now);

                    string var1 = row["softwareDirectory"].ToString();
                    string var2 = row["SoftwareName"].ToString();

                    Process installerProcess = new Process();
                    ProcessStartInfo processInfo = new ProcessStartInfo();
                    processInfo.Arguments = @"/i  " + var1 + "" + var2 + "  /q";
                    processInfo.FileName = "msiexec";
                    installerProcess.StartInfo = processInfo;
                    installerProcess.Start();
                    installerProcess.WaitForExit();

                    conn.Close();
                    if (row != null)
                    {
                        if (conn.State == ConnectionState.Closed)
                        {
                            conn.Open();
                        }

                        String query2 = "TRUNCATE TABLE RequestTable;";
                        SqlDataAdapter sqlda2 = new SqlDataAdapter(query2, conn);
                        sqlda2.SelectCommand.ExecuteNonQuery();
                        conn.Close();

                        WriteToFile("Successfully Completed");

                    }
                    else
                    {
                        Console.WriteLine("It's Already Empty");
                        //Updated.
                    }
                }
            }

            timer.Elapsed += new ElapsedEventHandler(OnElapsedTime);
            timer.Interval = 30000; //number in milisecinds  
            timer.Enabled = true;
        }
        protected override void OnStop()
        {
            WriteToFile("Service is stopped at " + DateTime.Now);
        }
        private void OnElapsedTime(object source, ElapsedEventArgs e)
        {
            WriteToFile("Service is recall at " + DateTime.Now);


            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }

            String query1 = "SELECT SoftwareName, softwareDirectory FROM RequestTable";
            SqlDataAdapter sqlda1 = new SqlDataAdapter(query1, conn);
            sqlda1.SelectCommand.ExecuteNonQuery();
            DataTable dtbl = new DataTable();
            sqlda1.Fill(dtbl);

            foreach (DataRow row in dtbl.Rows)
            {
                if (row == null)
                {
                    WriteToFile("Didn't find a request for installation at" + DateTime.Now);
                }
                else
                {
                    WriteToFile("Found a request for installation at" + DateTime.Now);

                    string var1 = row["softwareDirectory"].ToString();
                    string var2 = row["SoftwareName"].ToString();

                    Process installerProcess = new Process();
                    ProcessStartInfo processInfo = new ProcessStartInfo();
                    processInfo.Arguments = @"/i  " + var1 + "" + var2 + "  /q";
                    processInfo.FileName = "msiexec";
                    installerProcess.StartInfo = processInfo;
                    installerProcess.Start();
                    installerProcess.WaitForExit();

                    conn.Close();
                    if (row != null)
                    {
                        if (conn.State == ConnectionState.Closed)
                        {
                            conn.Open();
                        }

                        String query2 = "TRUNCATE TABLE RequestTable;";
                        SqlDataAdapter sqlda2 = new SqlDataAdapter(query2, conn);
                        sqlda2.SelectCommand.ExecuteNonQuery();
                        conn.Close();

                        WriteToFile("Successfully Completed");

                    }
                    else
                    {
                        WriteToFile("It's Already Empty");
                        //Updated.
                    }

                }
            }

        }
        public void WriteToFile(string Message)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + "\\Logs";
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string filepath = AppDomain.CurrentDomain.BaseDirectory + "\\Logs\\ServiceLog_" + DateTime.Now.Date.ToShortDateString().Replace('/', '_') + ".txt";
            if (!File.Exists(filepath))
            {
                // Create a file to write to.   
                using (StreamWriter sw = File.CreateText(filepath))
                {
                    sw.WriteLine(Message);
                }
            }
            else
            {
                using (StreamWriter sw = File.AppendText(filepath))
                {
                    sw.WriteLine(Message);
                }
            }
        }
    }
}