sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockJobInfoPart3 = BlockBase.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart3", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart3",
					type: "XML"
				},
				Expanded: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart3",
					type: "XML"
				}
			}
		}
	});

	return BlockJobInfoPart3;

});
