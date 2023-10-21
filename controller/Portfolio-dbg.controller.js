sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/library",
], function (Controller, JSONModel, coreLibrary) {
	"use strict";

	return Controller.extend("ch.draeyer.mike.portfolio.controller.Portfolio", {

        //** LIFECYCLE-METHODS */
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			var oJsonModel = new JSONModel(sap.ui.require.toUrl("ch/draeyer/mike/portfolio/model/data.json"));
			this.getView().setModel(oJsonModel, "ObjectPageModel");			
		},

        //** EVENT-HANDLING */
        onGeneradteQrCode: function(oEvent){
			let oViewModel = this.getView().getModel("ObjectPageModel");

			const sValue = oViewModel.getProperty("/QrCode/inputValue");

			if(!sValue){ //shouldn't be the case, since button is disabled when no text is entered
				return;
			}		

			oViewModel.setProperty("/QrCode/isImgVisible", true);
			oViewModel.setProperty("/QrCode/imgSrc", `http://localhost:8005/https://qrtag.net/api/qr_12.svg?url=${sValue}`);

		},

		onQrLiveChange: function(oEvent){
			const sValue = oEvent.getParameters().newValue;
			let oViewModel = this.getView().getModel("ObjectPageModel");

			oViewModel.setProperty("/QrCode/isBtnEnabled", !!sValue)
			
			if(!sValue){
				oViewModel.setProperty("/QrCode/isImgVisible", false);
			}
		}	

	});

});