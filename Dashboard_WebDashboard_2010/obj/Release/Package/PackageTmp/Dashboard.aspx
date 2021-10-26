<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Dashboard.aspx.cs" Inherits="Dashboard_WebDashboard_2010.Dashboard" %>

<%@ Register Assembly="DevExpress.Web.v19.2, Version=19.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.Web" TagPrefix="dx" %>

<%@ Register Assembly="DevExpress.Dashboard.v19.2.Web.WebForms, Version=19.2.5.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="Content/scripts.js"></script>
     <script>
         function onBeforeRender(sender) {
             var dashboardControl = sender.GetDashboardControl();
             dashboardControl.registerExtension(new DevExpress.Dashboard.DashboardPanelExtension(dashboardControl));
         }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" 
                    ClientInstanceName = "clientDashboardDesigner1"
                            Height = "100%"
                    WorkingMode = "Viewer"                                           
                >
                <ClientSideEvents
                   CustomizeMenuItems="onCustomizeMenuItems"
                    BeforeRender ="onBeforeRender"
                  DashboardChanged="onDashboardChanged"
                 />
            </dx:ASPxDashboard>

    <div id="popupContainer">
                <div id="textBoxContainer"></div>
    </div>
</asp:Content>


