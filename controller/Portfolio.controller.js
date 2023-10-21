sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/library"],function(e,t,r){"use strict";return e.extend("ch.draeyer.mike.portfolio.controller.Portfolio",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());const e=sap.ui.require.toUrl("ch/draeyer/mike/portfolio/model/data.json"),r=sap.ui.require.toUrl("ch/draeyer/mike/portfolio/img/draeyer_mike.png");let o=new t(e);o.dataLoaded().then(e=>{this.getView().byId("avatar").setSrc(r);this.getView().setModel(o,"ObjectPageModel")})},onGeneradteQrCode:function(e){let t=this.getView().getModel("ObjectPageModel");const r=t.getProperty("/QrCode/inputValue");if(!r){return}t.setProperty("/QrCode/isImgVisible",true);t.setProperty("/QrCode/imgSrc",`http://localhost:8005/https://qrtag.net/api/qr_12.svg?url=${r}`)},onQrLiveChange:function(e){const t=e.getParameters().newValue;let r=this.getView().getModel("ObjectPageModel");r.setProperty("/QrCode/isBtnEnabled",!!t);if(!t){r.setProperty("/QrCode/isImgVisible",false)}}})});
//# sourceMappingURL=Portfolio.controller.js.map