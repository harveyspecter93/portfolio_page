sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/library"
], function (Controller, JSONModel, mobileLibrary) {
	"use strict";

	const URLHelper = mobileLibrary.URLHelper;

	return Controller.extend("ch.draeyer.mike.portfolio.controller.Portfolio", {

		//** LIFECYCLE-METHODS */
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			const sPath = sap.ui.require.toUrl("ch/draeyer/mike/portfolio/model/data.json"),
				sImgSrcPath = sap.ui.require.toUrl("ch/draeyer/mike/portfolio/img/draeyer_mike.png");
			let oJsonModel = new JSONModel(sPath);

			//debugger;
			oJsonModel.dataLoaded().then(_ => {
				//	oJsonModel.setProperty("/Profile/imgSrc", sImgSrcPath);
				this.getView().byId("avatar").setSrc(sImgSrcPath);
				this.getView().setModel(oJsonModel, "ObjectPageModel");
			});



		},

		//** EVENT-HANDLING */
		onGeneradteQrCode: function (oEvent) {
			let oViewModel = this.getView().getModel("ObjectPageModel");

			const sValue = oViewModel.getProperty("/QrCode/inputValue");

			if (!sValue) { //shouldn't be the case, since button is disabled when no text is entered
				return;
			}

			oViewModel.setProperty("/QrCode/isImgVisible", true);
			oViewModel.setProperty("/QrCode/imgSrc", `http://localhost:8005/https://qrtag.net/api/qr_12.svg?url=${sValue}`);

		},

		onOpenInsta: function () {
			URLHelper.redirect("https://www.instagram.com/michualoha", true);
		},

		onPokemonSelectChange: function (oEvent) {
			const sPokemonIndex = oEvent.getParameters().selectedItem.getKey().split("/").slice(-2)[0];
			let oImage = this.getView().byId("imgPokemon"),
				oText = this.getView().byId("txtFlavor")
			this._getPokemonById(sPokemonIndex).then(oPokemon => {

				let aFlavorTextsEN = oPokemon.species.flavor_text_entries.filter(flavor => flavor.language.name === "en"),
					sRandomFlavor = aFlavorTextsEN.sort(() => 0.5 - Math.random())[0].flavor_text;

				oImage.setSrc(oPokemon.form.sprites.front_default);
				oText.setText(sRandomFlavor);
			});

		},

		onPressSendMail: function () {
			this._getDialog("SendMail").open();
		},

		onSendMail: function (oEvent) {
			const oDialog = oEvent.getSource().getParent(),
				oResourceBundle = oDialog.getModel("i18n").getResourceBundle(),
				oTypeSelect = this._findControl(oDialog, "sap.m.Select"),
				oRBG = this._findControl(oDialog, "sap.m.RadioButtonGroup");

			let sEmail = oTypeSelect.getSelectedItem().getKey(),
				sSubject = oResourceBundle.getText("dialogs.sendmail.presubject") + " " + oRBG.getSelectedButton().getText();

			URLHelper.triggerEmail(sEmail, sSubject);
		},

		onQrLiveChange: function (oEvent) {
			const sValue = oEvent.getParameters().newValue;
			let oViewModel = this.getView().getModel("ObjectPageModel");

			oViewModel.setProperty("/QrCode/isBtnEnabled", !!sValue)

			if (!sValue) {
				oViewModel.setProperty("/QrCode/isImgVisible", false);
			}
		},

		onToggleFooter: function () {
			let oModel = this.getView().getModel("ObjectPageModel"),
				bIsVisible = oModel.getProperty("/isFooterVisible");

			this.getView().getModel("ObjectPageModel").setProperty("/isFooterVisible", !bIsVisible);
		},


		/* searches a dialog content for a specific control by it's name/type */
		_findControl: function (oControl, sControlName) {

			if (oControl.isA(sControlName)) {
				return oControl;
			} else {
				switch (true) {
					case oControl.isA("sap.m.Dialog"):
						for (const oContent of oControl.getContent()) {
							oControl = this._findControl(oContent, sControlName);
							if (oControl) {
								return oControl;
							}
						}
						break;
					case oControl.isA("sap.m.FlexBox"):
						for (const oItem of oControl.getItems()) {
							oControl = this._findControl(oItem, sControlName);
							if (oControl) {
								return oControl;
							}
						}
						break;
					default:
						oControl = undefined;
						break;

				}
			}
		},

		_getDialog: function (sDialogName) {
			let oDialog = this["_o" + sDialogName];

			if (!oDialog) {
				oDialog = sap.ui.xmlfragment(sDialogName, "ch.draeyer.mike.portfolio.view.dialogs." + sDialogName, this);
				oDialog.setModel(this.getView().getModel("i18n"), "i18n");
				oDialog.setModel(this.getView().getModel("ObjectPageModel"), "ObjectPageModel");
				this["_o" + sDialogName] = oDialog;
				this.getView().addDependent(oDialog);
			}
			return oDialog;
		},


		_getPokemonById: async sId => {
			const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${sId}/`);
			const form = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${sId}/`);

			return { species: await species.json(), form: await form.json() };

		},





	});

});