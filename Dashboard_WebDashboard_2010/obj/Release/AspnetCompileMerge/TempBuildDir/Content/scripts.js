function saveToUrl(key, value) {
    var uri = location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    var newParameterValue = value ? key + "=" + encodeURIComponent(value) : "";
    var newUrl;
    if (uri.match(re)) {
        var separator = !!newParameterValue ? '$1' : "";
        newUrl = uri.replace(re, separator + newParameterValue + '$2');
    }
    else if (!!newParameterValue) {
        newUrl = uri + separator + newParameterValue;
    }
    if (newUrl) {
        history.replaceState({}, "", newUrl);
    }
}

function onCustomizeMenuItems(designer, eventArgs) {
    if(!designer.cpIsSqlExpressInstalled) {
        var itemNew = eventArgs.FindById('new');
        if(itemNew) {
            itemNew.template = 'dx-dshd-form-new-disallowed';
        }
    }
}

function onBeforeRender(sender, eventArgs) {
    if (sender) {
        var dashboardControl = sender.getDashboardControl();
        saveToUrl("mode", sender.GetWorkingMode());
        dashboardControl.isDesignMode.subscribe(function (value) {
            saveToUrl("mode", sender.GetWorkingMode());
        });
        dashboardControl.registerExtension(new DevExpress.Dashboard.DashboardPanelExtension(dashboardControl));

        /*          Custom Item Extensions         */
        dashboardControl.registerExtension(new funnelD3ItemExtension(dashboardControl));
        dashboardControl.registerExtension(new CustomItems.WebPageItemExtension(dashboardControl));
        dashboardControl.registerExtension(new CustomItems.OnlineMapItemExtension(dashboardControl));
    }
}

function onDashboardChanged(sender, args) {
    var dashboardId = args.DashboardId,
        dashboardControl = sender.getDashboardControl();
    if (dashboardId === "CustomItemExtensions") {
        dashboardControl.registerExtension(new SaveAsDashboardExtension(dashboardControl));
    } else {
        dashboardControl.unregisterExtension("save-as");
    }
}