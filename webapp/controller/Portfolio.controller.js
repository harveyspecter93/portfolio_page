sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ch.draeyer.mike.portfolio.controller.Portfolio", {

        //** LIFECYCLE-METHODS */
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

        //** EVENT-HANDLING */
        onPressHelloWorld: _ => alert("Hello World!") 

	});

});