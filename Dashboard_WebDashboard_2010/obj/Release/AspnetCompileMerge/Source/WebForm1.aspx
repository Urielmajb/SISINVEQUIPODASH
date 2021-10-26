<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" 
         Inherits="Dashboard_WebDashboard_2010.WebForm1" %>

<%@ Register Assembly="DevExpress.Web.v19.2, Version=19.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a"
    Namespace="DevExpress.Web" TagPrefix="dx" %>

<%@ Register Assembly="DevExpress.Dashboard.v19.2.Web.WebForms, Version=19.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a"
    Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">


    <title></title>

    <link href="Scripts/styles.css" rel="stylesheet" />
    <script src="Scripts/scripts.js"></script>
   
</head>
<body>
    <form id="form1" runat="server">
    <!--region #SwitchWorkingModes-->
    <%--<div style="position: absolute; left: 80px; right: 0; top:0; bottom:30px;">
        <dx:ASPxButton ID="ASPxButton1" runat="server" Text="Switch to Viewer" 
            ClientInstanceName="button"
            AutoPostBack="False">
            <ClientSideEvents Click="function(s, e) {
	            var workingMode = webDashboard.GetWorkingMode();
	            if (workingMode == 'designer') {
		            webDashboard.SwitchToViewer();
		            button.SetText('Switch to Designer');
                }
                else {
		            webDashboard.SwitchToDesigner();
		            button.SetText('Switch to Viewer');
                }
            }" />
        </dx:ASPxButton>
    </div>--%>


    <%--<div style="position: absolute; left: 0; right: 0; top:30px; bottom:0;">--%>
  <div class="content" >
        <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" Width="100%" Height="100%" 
        ClientInstanceName="webDashboard" DashboardStorageFolder="~/App_Data/Dashboards" WorkingMode="Viewer" >
        </dx:ASPxDashboard>
    </div>
    <!--endregion #SwitchWorkingModes-->
    </form>
</body>
</html>
