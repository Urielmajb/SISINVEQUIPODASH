using DevExpress.DashboardCommon;
using DevExpress.DashboardWeb;
using DevExpress.DataAccess.Sql;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Dashboard_WebDashboard_2010
{
    public partial class Dashboard : System.Web.UI.Page
    {

        WorkingMode WorkingMode
        {
            get
            {
                string workingModeString = this.Request.QueryString["mode"];
                if (!string.IsNullOrEmpty(workingModeString) && workingModeString == "designer")
                    return WorkingMode.Designer;
                return WorkingMode.Viewer;
            }
        }
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsCallback && !IsPostBack)
            {
                ASPxDashboard1.WorkingMode = WorkingMode;
            }
            DashboardFileStorage dashboardFileStorage = new DashboardFileStorage("~/App_Data/Dashboards");
            ASPxDashboard1.SetConnectionStringsProvider(new MyDataSourceWizardConnectionStringsProvider());
            ASPxDashboard1.SetDashboardStorage(dashboardFileStorage);

            DashboardInMemoryStorage dashboardStorage = Session["DashboardStorage"] as DashboardInMemoryStorage;



            //if (!IsCallback && !IsPostBack)
            //{
            //    ASPxDashboard1.WorkingMode = WorkingMode;
            //}
            //ASPxDashboard1.SetConnectionStringsProvider(new MyDataSourceWizardConnectionStringsProvider());

            //DashboardInMemoryStorage dashboardStorage = Session["DashboardStorage"] as DashboardInMemoryStorage;
        }
    }
}