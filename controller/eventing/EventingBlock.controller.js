sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("ch.draeyer.mike.portfolio.controller.eventing.EventingBlock",{onGenerateQrCode:function(e){this.oParentBlock.fireGenerateQr(e.getParameters())},onQrLiveChange:function(e){this.oParentBlock.fireQrChanged(e.getParameters())},onPressSendMail:function(e){this.oParentBlock.fireOnPressSendMail(e.getParameters())}})});
//# sourceMappingURL=EventingBlock.controller.js.map