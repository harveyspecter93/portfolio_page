sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/library","sap/m/library"],function(e,t,o,i){"use strict";const r=i.URLHelper;return e.extend("ch.draeyer.mike.portfolio.controller.Portfolio",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());const e=sap.ui.require.toUrl("ch/draeyer/mike/portfolio/model/data.json"),o=sap.ui.require.toUrl("ch/draeyer/mike/portfolio/img/draeyer_mike.png");let i=new t(e);i.dataLoaded().then(e=>{this.getView().byId("avatar").setSrc(o);this.getView().setModel(i,"ObjectPageModel")})},onGeneradteQrCode:function(e){let t=this.getView().getModel("ObjectPageModel");const o=t.getProperty("/QrCode/inputValue");if(!o){return}t.setProperty("/QrCode/isImgVisible",true);t.setProperty("/QrCode/imgSrc",`http://localhost:8005/https://qrtag.net/api/qr_12.svg?url=${o}`)},onOpenInsta:function(){r.redirect("https://www.instagram.com/michualoha",true)},onPressSendMail:function(){this._getDialog("SendMail").open()},onQrLiveChange:function(e){const t=e.getParameters().newValue;let o=this.getView().getModel("ObjectPageModel");o.setProperty("/QrCode/isBtnEnabled",!!t);if(!t){o.setProperty("/QrCode/isImgVisible",false)}},onToggleFooter:function(){let e=this.getView().getModel("ObjectPageModel"),t=e.getProperty("/isFooterVisible");this.getView().getModel("ObjectPageModel").setProperty("/isFooterVisible",!t)},_getDialog:function(e){let t=this["_o"+e];if(!t){t=sap.ui.xmlfragment(e,"ch.draeyer.mike.portfolio.view.dialogs."+e,this);t.setModel(this.getView().getModel("i18n"),"i18n");t.setModel(this.getView().getModel("ObjectPageModel"),"ObjectPageModel");this["_o"+e]=t;this.getView().addDependent(t)}return t}})});
//# sourceMappingURL=Portfolio.controller.js.map