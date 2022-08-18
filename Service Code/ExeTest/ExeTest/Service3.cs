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

namespace ExeTest
{
    public partial class Service3 : ServiceBase
    {
        Timer timer = new Timer(); // name space(using System.Timers;)  
        //SqlConnection conn = new SqlConnection("Data Source = DESKTOP-0HQQFA6;Initial Catalog = ADISDataBase; User ID = ADIS; Password = ADIS1");


        //private async Task delayedWork()
        //{
        //    await Task.Delay(35000);
        //}


        public Service3()
        {
            InitializeComponent();
        }
        protected override void OnStart(string[] args)
        {
            Process ExternalProcess = new Process();
            ExternalProcess.StartInfo.FileName = @"C:\Users\sulem\source\repos\ConsoleApp1\ConsoleApp1\bin\Debug\ConsoleApp1.exe";
            ExternalProcess.StartInfo.WindowStyle = ProcessWindowStyle.Maximized;
            ExternalProcess.Start();
            ExternalProcess.WaitForExit();

            //using (System.Diagnostics.Process process = new System.Diagnostics.Process())
            //{
            //    process.StartInfo = new System.Diagnostics.ProcessStartInfo(@"C:\Users\sulem\source\repos\ConsoleApp1\ConsoleApp1\bin\Debug\ConsoleApp1.exe");
            //    process.StartInfo.CreateNoWindow = true;
            //    process.StartInfo.ErrorDialog = false;
            //    process.StartInfo.RedirectStandardError = true;
            //    process.StartInfo.RedirectStandardInput = true;
            //    process.StartInfo.RedirectStandardOutput = true;
            //    process.StartInfo.UseShellExecute = false;
            //    process.StartInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden;
            //    process.Start();
            //    //// do some other things while you wait...
            //    System.Threading.Thread.Sleep(10000); // simulate doing other things...
            //    process.StandardInput.WriteLine("exit"); // tell console to exit
            //    if (!process.HasExited)
            //    {
            //        process.WaitForExit(120000); // give 2 minutes for process to finish
            //        if (!process.HasExited)
            //        {
            //            process.Kill(); // took too long, kill it off
            //        }
            //    }
            //}

            //conn.Open();
            //String query1 = "SELECT SoftwareName, softwareDirectory FROM RequestTable";
            //SqlDataAdapter sqlda1 = new SqlDataAdapter(query1, conn);
            //sqlda1.SelectCommand.ExecuteNonQuery();
            //DataTable dtbl = new DataTable();
            //sqlda1.Fill(dtbl);

            //foreach (DataRow row in dtbl.Rows)
            //{
            //        string var1 = row["softwareDirectory"].ToString();
            //        string var2 = row["SoftwareName"].ToString();

            //        if (var2.Contains("exe"))
            //        {
            //            ProcessStartInfo psi = new ProcessStartInfo();
            //            psi.Arguments = "/s /v /qn /min";
            //            psi.CreateNoWindow = true;
            //            psi.WindowStyle = ProcessWindowStyle.Hidden;
            //            psi.FileName = var1 + var2;
            //            psi.UseShellExecute = false;
            //            Process.Start(psi);
            //            Task.Delay(35000);
            //        }

            //        conn.Close();
            //        if (row != null)
            //        {
            //            if (conn.State == ConnectionState.Closed)
            //            {
            //                conn.Open();
            //            }

            //            String query3 = "TRUNCATE TABLE RequestTable;";
            //            SqlDataAdapter sqlda3 = new SqlDataAdapter(query3, conn);
            //            sqlda3.SelectCommand.ExecuteNonQuery();
            //            conn.Close();

            //        }
            //    }

            timer.Elapsed += new ElapsedEventHandler(OnElapsedTime);
            timer.Interval = 60000; //number in milisecinds  
            timer.Enabled = true;
        }
        protected override void OnStop()
        {

        }
        private void OnElapsedTime(object source, ElapsedEventArgs e)
        {
            Process ExternalProcess = new Process();
            ExternalProcess.StartInfo.FileName = @"C:\Users\sulem\source\repos\ConsoleApp1\ConsoleApp1\bin\Debug\ConsoleApp1.exe";
            ExternalProcess.StartInfo.WindowStyle = ProcessWindowStyle.Maximized;
            ExternalProcess.Start();
            ExternalProcess.WaitForExit();

            //using (System.Diagnostics.Process process = new System.Diagnostics.Process())
            //{
            //    process.StartInfo = new System.Diagnostics.ProcessStartInfo(@"C:\Users\sulem\source\repos\ConsoleApp2\ConsoleApp2\bin\Debug\ConsoleApp2.exe");
            //    process.StartInfo.CreateNoWindow = true;
            //    process.StartInfo.ErrorDialog = false;
            //    process.StartInfo.RedirectStandardError = true;
            //    process.StartInfo.RedirectStandardInput = true;
            //    process.StartInfo.RedirectStandardOutput = true;
            //    process.StartInfo.UseShellExecute = false;
            //    process.StartInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden;
            //    process.Start();
            //    //// do some other things while you wait...
            //    System.Threading.Thread.Sleep(10000); // simulate doing other things...
            //    process.StandardInput.WriteLine("exit"); // tell console to exit
            //    if (!process.HasExited)
            //    {
            //        process.WaitForExit(120000); // give 2 minutes for process to finish
            //        if (!process.HasExited)
            //        {
            //            process.Kill(); // took too long, kill it off
            //        }
            //    }
            //}


            //conn.Open();
            //String query1 = "SELECT SoftwareName, softwareDirectory FROM RequestTable";
            //SqlDataAdapter sqlda1 = new SqlDataAdapter(query1, conn);
            //sqlda1.SelectCommand.ExecuteNonQuery();
            //DataTable dtbl = new DataTable();
            //sqlda1.Fill(dtbl);

            //foreach (DataRow row in dtbl.Rows)
            //{
            //        string var1 = row["softwareDirectory"].ToString();
            //        string var2 = row["SoftwareName"].ToString();

            //        if (var2.Contains("exe"))
            //        {
            //            ProcessStartInfo psi = new ProcessStartInfo();
            //            psi.Arguments = "/s /v /qn /min";
            //            psi.CreateNoWindow = true;
            //            psi.WindowStyle = ProcessWindowStyle.Hidden;
            //            psi.FileName = var1 + var2;
            //            psi.UseShellExecute = false;
            //            Process.Start(psi);
            //            Task.Delay(35000);
            //        }

            //        conn.Close();
            //        if (row != null)
            //        {
            //            if (conn.State == ConnectionState.Closed)
            //            {
            //                conn.Open();
            //            }
            //            String query6 = "TRUNCATE TABLE RequestTable;";
            //            SqlDataAdapter sqlda6 = new SqlDataAdapter(query6, conn);
            //            sqlda6.SelectCommand.ExecuteNonQuery();
            //            conn.Close();
            //        }
            //    }
        }

    }
}

