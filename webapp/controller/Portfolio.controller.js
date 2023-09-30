sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ch.draeyer.mike.portfolio.controller.Portfolio", {

        //** LIFECYCLE-METHODS */
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

			var oJsonModel = new JSONModel(sap.ui.require.toUrl("ch/draeyer/mike/portfolio/model/data.json"));
			this.getView().setModel(oJsonModel, "ObjectPageModel");
		},

        //** EVENT-HANDLING */
        onPressHelloWorld: _ => alert("Hello World!") 

	});

});