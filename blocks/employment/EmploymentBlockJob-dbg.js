sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var EmploymentBlockJob = BlockBase.extend("ch.draeyer.mike.portfolio.blocks.employment.EmploymentBlockJob", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.EmploymentBlockJobCollapsed",
					type: "XML"
				},
				Expanded: {
					viewName: "ch.draeyer.mike.portfolio.blocks.employment.EmploymentBlockJobExpanded",
					type: "XML"
				}
			}
		}
	});

	return EmploymentBlockJob;
});
