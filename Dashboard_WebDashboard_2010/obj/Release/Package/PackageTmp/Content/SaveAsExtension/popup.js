function createPopup(saveButtonAction, cancelButtonAction) {
    return $("#popupContainer").dxPopup({
        title: "Save As... (Custom Extension)",
        width: 400,
        height: 185,
        toolbarItems: [{
            toolbar: "bottom",
            widget: "dxButton",
            location: "after",
            options: {
                text: "Save",
                onClick: saveButtonAction
            }
        }, {
            toolbar: "bottom",
            widget: "dxButton",
            location: "after",
            options: {
                text: "Cancel",
                onClick: cancelButtonAction
            }
        }]
    }).dxPopup("instance");    
}