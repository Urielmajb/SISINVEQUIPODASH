function SaveAsDashboardExtension(dashboardControl) {
    var _this = this;
    this.name = "save-as";
    this.dashboardControl = dashboardControl;
    this.toolbox = this.dashboardControl.findExtension("toolbox");
    this.newName = "New Dashboard Name";

    this.dashboardControl.registerIcon(TOOLBAR_SAVE_ICON);
    this.dashboardControl.registerIcon(TOOLBAR_SAVE_AS_ICON);

    this._menuSaveAsItem = new DevExpress.Dashboard.DashboardMenuItem("save-as", "Save As...", 120, 0, function() { _this.showPopup(); });
    this._menuSaveAsItem.hasSeparator = true;
    this._menuSaveAsItem.data = _this;

    var toolbarSaveItem = new DevExpress.Dashboard.DashboardToolbarItem("save", function () { _this.dashboardControl.findExtension("save-dashboard").saveDashboard(); }, "toolbar-save", "Save (Custom Extension)");
    var toolbarSaveAsItem = new DevExpress.Dashboard.DashboardToolbarItem("save-as", function () { _this.showPopup(); }, "toolbar-save-as", "Save As... (Custom Extension)");
    this._toolbarSaveGroup = new DevExpress.Dashboard.DashboardToolbarGroup("save", "Save", 60, toolbarSaveItem, toolbarSaveAsItem);

    this.saveAs = function () {
        var newExtension = dashboardControl.findExtension("create-dashboard");
        newExtension.performCreateDashboard(_this.newName, dashboardControl.dashboard().getJSON());
    };
    this.showPopup = function () {
        _this.popup.show();
        $("#textBoxContainer").dxTextBox({
            value: _this.newName,
            onValueChanged: function (e) {
                _this.newName = e.value;
            }
        });
    }
    this.hidePopup = function () {
        _this.dashboardControl.findExtension("toolbox").menuVisible(false);
        _this.popup.hide();
    }
    this.popup = createPopup(function () {
        _this.saveAs();
        _this.hidePopup();
    }, function () {
        _this.hidePopup();
    });
}
SaveAsDashboardExtension.prototype.start = function () {
    this.toolbox.menuItems.push(this._menuSaveAsItem);
    this.toolbox.toolbarGroups.push(this._toolbarSaveGroup);
    this.toolbox.menuItems().filter(function (item) { return item.id === "save" })[0].hasSeparator = false;
};
SaveAsDashboardExtension.prototype.stop = function () {
    this.toolbox.menuItems.remove(this._menuSaveAsItem);
    this.toolbox.toolbarGroups.remove(this._toolbarSaveGroup);
};