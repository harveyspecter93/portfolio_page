sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockEmpDetailPart = BlockBase.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockEmpDetail", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.BlockEmpDetail",
					type: "XML"
				},
				Expanded: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.BlockEmpDetail",
					type: "XML"
				}
			}
		}
	});
	return BlockEmpDetailPart;
});
