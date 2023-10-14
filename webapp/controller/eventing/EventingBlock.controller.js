sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("ch.draeyer.mike.portfolio.controller.eventing.EventingBlock", {
					/*
			 Delegate the eventing to the parent block.
			 The outside world will see this event as being triggered by the block itself.
			 */
        onGenerateQrCode: function (oEvent) {
			this.oParentBlock.fireGenerateQr(oEvent.getParameters());
		},

        onQrLiveChange: function (oEvent) {
			this.oParentBlock.fireQrChanged(oEvent.getParameters());
		},

	});
});
