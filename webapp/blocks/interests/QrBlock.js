sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	const ViewType = coreLibrary.mvc.ViewType;

	return BlockBase.extend("ch.draeyer.mike.portfolio.blocks.interests.QrBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ch.draeyer.mike.portfolio.blocks.interests.QrBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "ch.draeyer.mike.portfolio.blocks.interests.QrBlock",
					type: ViewType.XML
				}
			},
			events: {
				"qrChanged": {},
				"generateQr": {}
			}
		}

	});
});
