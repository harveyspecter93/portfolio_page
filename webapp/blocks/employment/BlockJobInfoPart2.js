sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockJobInfoPart2 = BlockBase.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart2", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart2",
					type: "XML"
				},
				Expanded: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart2",
					type: "XML"
				}
			}
		}
	});
	return BlockJobInfoPart2;
});
