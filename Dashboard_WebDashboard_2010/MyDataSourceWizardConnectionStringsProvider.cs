using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DevExpress.DataAccess.ConnectionParameters;
using DevExpress.DataAccess.Native;
using DevExpress.DataAccess.Web;

namespace Dashboard_WebDashboard_2010
{
    public class MyDataSourceWizardConnectionStringsProvider : IDataSourceWizardConnectionStringsProvider
    {
        public Dictionary<string, string> GetConnectionDescriptions()
        {
            Dictionary<string, string> connections = new Dictionary<string, string>();

            // Customize the loaded connections list.  
            connections.Add("msAccessConnection", "MS Access Connection");
            //connections.Add("msSqlConnection", "Nortwindminwind2021 Database");
            connections.Add("msSqlConnection", "db_a7b993_urielmajb16 Database");

            connections.Add("olapConnection", "Cubo Sql Server");
           
            return connections;
        }

        public DataConnectionParametersBase GetDataConnectionParameters(string name)
        {
            // Return custom connection parameters for the custom connection.
            if (name == "msAccessConnection")
            {
                return new Access97ConnectionParameters("|DataDirectory|nwind.mdb", "", "");
            }
            else if (name == "msSqlConnection")
            {
                //return new MsSqlConnectionParameters("PRESENTACIONES1\\SQLEXPRESS", "DBEquipo", "", "", MsSqlAuthorizationType.Windows);
                //return new MsSqlConnectionParameters("minwind2021.mssql.somee.com", "minwind2021", "urielmajb_SQLLogin_1", "q1r86dec1w", MsSqlAuthorizationType.SqlServer); //conexion nube
                return new MsSqlConnectionParameters("SQL5104.site4now.net", "db_a7b993_urielmajb16", "db_a7b993_urielmajb16_admin", "salome16", MsSqlAuthorizationType.SqlServer); //conexion nube

            }
            else if (name == "olapConnection")
            {
                return new OlapConnectionParameters(@"Provider=MSOLAP;
                                    Data Source=http://demos.devexpress.com/Services/OLAP/msmdpump.dll;  
                                    Initial catalog=Adventure Works DW Standard Edition;
                                    Cube name=Adventure Works;
                                    Query Timeout=100;");

                //return new OlapConnectionParameters(@"Provider=MSOLAP;
                //                    Data Source=http://demos.devexpress.com/Services/OLAP/msmdpump.dll;  
                //                    Initial catalog=Adventure Works DW Standard Edition;
                //                    Cube name=Adventure Works;
                //                    Query Timeout=100;");
            }
            throw new System.Exception("The connection string is undefined.");
        }
    }
}