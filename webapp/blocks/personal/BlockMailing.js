sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	const ViewType = coreLibrary.mvc.ViewType;

	return BlockBase.extend("ch.draeyer.mike.portfolio.blocks.personal.BlockMailing", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ch.draeyer.mike.portfolio.blocks.personal.BlockMailing",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "ch.draeyer.mike.portfolio.blocks.personal.BlockMailing",
					type: ViewType.XML
				}
			},
			events: {
				"onPressSendMail": {}
			}
		}

	});
});
