sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
	"use strict";

	return UIComponent.extend("ch.draeyer.mike.portfolio.Component", {

		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set device model
			let oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// create the views based on the url/hash
			this.getRouter().initialize();

			this.getPokemons().then( oPokedex => {
				let oPokeModel = new JSONModel(oPokedex);
				this.setModel(oPokeModel, "pokemonsAPI");
			});


		},

		getPokemons : async _ =>  {
			const response = await fetch("https://pokeapi.co/api/v2/generation/1/");
			return await response.json();
		  },

		getContentDensityClass : _ => !Device.support.touch ? "sapUiSizeCompact" : "sapUiSizeCozy"

	});

});