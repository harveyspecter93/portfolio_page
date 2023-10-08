sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ch.draeyer.mike.portfolio.controller.App", {

		onInit: function () {
            //set content density to whole app
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		
		}

	});

});