//@ui5-bundle ch/draeyer/mike/portfolio/Component-preload.js
sap.ui.require.preload({
	"ch/draeyer/mike/portfolio/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,t,i){"use strict";return e.extend("ch.draeyer.mike.portfolio.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);let n=new t(i);n.setDefaultBindingMode("OneWay");this.setModel(n,"device");this.getRouter().initialize();this.getPokemons().then(e=>{let i=new t(e);this.setModel(i,"pokemonsAPI")})},getPokemons:async e=>{const t=await fetch("https://pokeapi.co/api/v2/generation/1/");return await t.json()},getContentDensityClass:e=>!i.support.touch?"sapUiSizeCompact":"sapUiSizeCozy"})});
},
	"ch/draeyer/mike/portfolio/blocks/employment/BlockEmpDetail.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var o=e.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockEmpDetail",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockEmpDetail",type:"XML"},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockEmpDetail",type:"XML"}}}});return o});
},
	"ch/draeyer/mike/portfolio/blocks/employment/BlockEmpDetail.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm labelSpanL="4" labelSpanM="4" editable="false"\r\n\t\t\t\t\t  labelSpanS="4" emptySpanL="0" emptySpanM="0" emptySpanS="0"\r\n\t\t\t\t\t  maxContainerCols="2" layout="ResponsiveGridLayout" width="100%"><Label text="{i18n>employment.empdetail.since.label}"/><Text text="{i18n>employment.empdetail.since.text}"/><Label text="{i18n>employment.empdetail.sap.label}"/><Text text="{i18n>employment.empdetail.sap.text}"/><Label text="{i18n>employment.empdetail.noticeperiod.label}"/><Text text="{i18n>employment.empdetail.noticeperiod.text}"/></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/employment/BlockJobInfoPart1.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var o=e.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart1",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart1",type:"XML"},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart1",type:"XML"}}}});return o});
},
	"ch/draeyer/mike/portfolio/blocks/employment/BlockJobInfoPart1.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm labelSpanL="4" labelSpanM="4" editable="false"\r\n\t\t\t\t\t  labelSpanS="4" emptySpanL="0" emptySpanM="0" emptySpanS="0"\r\n\t\t\t\t\t  maxContainerCols="2" layout="ResponsiveGridLayout" width="100%"><Label text="{i18n>employment.jobinfo.classification.label}"/><Text text="{i18n>employment.jobinfo.classification.text}"/><Text text=" "/><Label text="{i18n>employment.jobinfo.jobtitle.label}"/><Text text="{i18n>employment.jobinfo.jobtitle.text}"/><Text text=" "/><Label text="{i18n>employment.jobinfo.localtitle.label}"/><Label text="{i18n>employment.jobinfo.localtitle.text}"/></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/employment/BlockJobInfoPart2.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var o=e.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart2",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart2",type:"XML"},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart2",type:"XML"}}}});return o});
},
	"ch/draeyer/mike/portfolio/blocks/employment/BlockJobInfoPart2.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm labelSpanL="4" labelSpanM="4" editable="false"\r\n\t\t\t\t\t  labelSpanS="4" emptySpanL="0" emptySpanM="0" emptySpanS="0"\r\n\t\t\t\t\t  maxContainerCols="2" layout="ResponsiveGridLayout" width="100%"><Label text="{i18n>employment.jobinfo.empclass.label}"/><Text text="{i18n>employment.jobinfo.empclass.text}"/><Text text=" "/><Label text="{i18n>employment.jobinfo.fte.label}"/><Text text="{i18n>employment.jobinfo.fte.text}"/><Text text=" "/><Label text="{i18n>employment.jobinfo.weeklyhours.label}"/><Text text="{i18n>employment.jobinfo.weeklyhours.text}"/></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/employment/BlockJobInfoPart3.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var o=e.extend("ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart3",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart3",type:"XML"},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.BlockJobInfoPart3",type:"XML"}}}});return o});
},
	"ch/draeyer/mike/portfolio/blocks/employment/BlockJobInfoPart3.view.xml":'<mvc:View\r\n\t\txmlns:mvc="sap.ui.core.mvc"\r\n\t\txmlns:layout="sap.ui.layout"\r\n\t\txmlns="sap.m"><layout:HorizontalLayout class="sapUiSmallMarginTop"><layout:VerticalLayout><Label text="{i18n>employment.jobinfo.manager.title}"/><layout:HorizontalLayout><layout:content><layout:VerticalLayout><Text text="{i18n>employment.jobinfo.manager.name}"/><Text text="{i18n>employment.jobinfo.manager.function}"/></layout:VerticalLayout></layout:content></layout:HorizontalLayout></layout:VerticalLayout></layout:HorizontalLayout></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/employment/EmploymentBlockJob.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var o=e.extend("ch.draeyer.mike.portfolio.blocks.employment.EmploymentBlockJob",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.EmploymentBlockJobCollapsed",type:"XML"},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.employment.EmploymentBlockJobExpanded",type:"XML"}}}});return o});
},
	"ch/draeyer/mike/portfolio/blocks/employment/EmploymentBlockJobCollapsed.view.xml":'<mvc:View\r\n\t\txmlns:mvc="sap.ui.core.mvc"\r\n\t\txmlns:layout="sap.ui.layout"\r\n\t\txmlns="sap.m"><layout:Grid defaultSpan="L4 M6 S12" hSpacing="0" width="100%"><layout:content><layout:VerticalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:content><layout:VerticalLayout><Label text="{emp1>name}"/><Label text="{emp1>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid></layout:HorizontalLayout><layout:layoutData><layout:GridData linebreak="true"/></layout:layoutData><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:VerticalLayout><Label text="{emp2>name}"/><Label text="{emp2>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:Grid></layout:HorizontalLayout></layout:VerticalLayout></layout:content></layout:Grid></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/employment/EmploymentBlockJobExpanded.view.xml":'<mvc:View\r\n\t\txmlns:mvc="sap.ui.core.mvc"\r\n\t\txmlns:layout="sap.ui.layout"\r\n\t\txmlns="sap.m"><layout:Grid defaultSpan="L4 M6 S12" hSpacing="0" width="100%"><layout:content><layout:VerticalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:content><layout:VerticalLayout><Label text="{emp1>name}"/><Label text="{emp1>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid></layout:HorizontalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:VerticalLayout><Label text="{emp2>name}"/><Label text="{emp2>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:Grid></layout:HorizontalLayout></layout:VerticalLayout><layout:VerticalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:content><layout:VerticalLayout><Label text="{emp3>name}"/><Label text="{emp3>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid></layout:HorizontalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:VerticalLayout><Label text="{emp4>name}"/><Label text="{emp4>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:Grid></layout:HorizontalLayout></layout:VerticalLayout><layout:VerticalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:content><layout:VerticalLayout><Label text="{emp5>name}"/><Label text="{emp5>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:content></layout:Grid></layout:HorizontalLayout><layout:HorizontalLayout><layout:Grid defaultSpan="L4 M4 S4" hSpacing="0" width="100%"><layout:VerticalLayout><Label text="{emp6>name}"/><Label text="{emp6>job}"/><layout:layoutData><layout:GridData span="L12 M12 S12"/></layout:layoutData></layout:VerticalLayout></layout:Grid></layout:HorizontalLayout></layout:VerticalLayout></layout:content></layout:Grid></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/goals/GoalsBlock.js":function(){
sap.ui.define(["sap/ui/core/library","sap/uxap/BlockBase"],function(e,o){"use strict";var a=e.mvc.ViewType;var l=o.extend("ch.draeyer.mike.portfolio.blocks.goals.GoalsBlock",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.goals.GoalsBlock",type:a.XML},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.goals.GoalsBlock",type:a.XML}}}});return l});
},
	"ch/draeyer/mike/portfolio/blocks/goals/GoalsBlock.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm editable="false" layout="ColumnLayout"><Label text="{i18n>goals.study.label}" /><Text text="{i18n>goals.study.text}" /><Label text="{i18n>goals.home.label}" /><Text text="{i18n>goals.home.text}" /><Label text="{i18n>goals.consult.label}" /><Text text="{i18n>goals.consult.text}" /></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/interests/QrBlock.js":function(){
sap.ui.define(["sap/ui/core/library","sap/uxap/BlockBase"],function(e,r){"use strict";const t=e.mvc.ViewType;return r.extend("ch.draeyer.mike.portfolio.blocks.interests.QrBlock",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.interests.QrBlock",type:t.XML},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.interests.QrBlock",type:t.XML}},events:{qrChanged:{},generateQr:{}}}})});
},
	"ch/draeyer/mike/portfolio/blocks/interests/QrBlock.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form" xmlns="sap.m" \r\n\t\tcontrollerName="ch.draeyer.mike.portfolio.controller.eventing.EventingBlock"><FlexBox direction="Column" class="sapUiContentPadding sapUiSmallMargin"><Text text="QR codes have revolutionized the way we access information. Scan and discover the world with a simple code!" /><Label text="Enter URL:" /><Input value="{qr>inputValue}" liveChange="onQrLiveChange" width="100%" placeholder="Enter text or URL" /><Button text="Generate QR Code" press="onGenerateQrCode" type="Emphasized" enabled="{qr>isBtnEnabled}" /><Image src="{qr>imgSrc}" visible="{qr>isImgVisible}" mode="InlineSvg" alt="qrtag"/></FlexBox></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/personal/BlockAdresses.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var a=e.extend("ch.draeyer.mike.portfolio.blocks.personal.BlockAdresses",{metadata:{}});return a});
},
	"ch/draeyer/mike/portfolio/blocks/personal/BlockAdresses.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form"\r\n\t\t  xmlns:core="sap.ui.core" xmlns="sap.m"><forms:SimpleForm layout="ColumnLayout" editable="false" width="100%"><core:Title text="{i18n>personal.connect.address.title}"/><Label text="{i18n>personal.connect.address.home.label}"/><Text text="{i18n>personal.connect.address.home.text}"/><Label text="{i18n>personal.connect.address.office.label}"/><Text text="{i18n>personal.connect.address.office.text}"/></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/personal/BlockMailing.js":function(){
sap.ui.define(["sap/ui/core/library","sap/uxap/BlockBase"],function(e,o){"use strict";const a=e.mvc.ViewType;return o.extend("ch.draeyer.mike.portfolio.blocks.personal.BlockMailing",{metadata:{views:{Collapsed:{viewName:"ch.draeyer.mike.portfolio.blocks.personal.BlockMailing",type:a.XML},Expanded:{viewName:"ch.draeyer.mike.portfolio.blocks.personal.BlockMailing",type:a.XML}},events:{onPressSendMail:{}}}})});
},
	"ch/draeyer/mike/portfolio/blocks/personal/BlockMailing.view.xml":'<mvc:View\r\n\t\txmlns:mvc="sap.ui.core.mvc"\r\n\t\txmlns:forms="sap.ui.layout.form"\r\n\t\txmlns:core="sap.ui.core"\r\n\t\txmlns="sap.m"\r\n\t\tcontrollerName="ch.draeyer.mike.portfolio.controller.eventing.EventingBlock"><forms:SimpleForm layout="ColumnLayout" width="100%"><core:Title text="{i18n>personal.connect.mail.title}"/><Label text="{i18n>personal.connect.mail.private.label}"/><Text text="{i18n>personal.connect.mail.private.text}"/><Label text="{i18n>personal.connect.mail.office.label}"/><Text text="{i18n>personal.connect.mail.office.text}"/></forms:SimpleForm><FlexBox class="sapUiSmallMarginBegin"><Button text="{i18n>personal.connect.mail.button.text}" press="onPressSendMail" type="Emphasized" /></FlexBox></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/personal/BlockPhoneNumber.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var a=e.extend("ch.draeyer.mike.portfolio.blocks.personal.BlockPhoneNumber",{metadata:{}});return a});
},
	"ch/draeyer/mike/portfolio/blocks/personal/BlockPhoneNumber.view.xml":'<mvc:View\r\n\t\txmlns:mvc="sap.ui.core.mvc"\r\n\t\txmlns:forms="sap.ui.layout.form"\r\n\t\txmlns:core="sap.ui.core"\r\n\t\txmlns="sap.m"><forms:SimpleForm layout="ColumnLayout" width="100%"><core:Title text="{i18n>personal.connect.phone.title}"/><Label text="{i18n>personal.connect.phone.label}"/><Text text="{i18n>personal.connect.phone.text}"/></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/blocks/personal/BlockSocial.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(e){"use strict";var a=e.extend("ch.draeyer.mike.portfolio.blocks.personal.BlockSocial",{metadata:{}});return a});
},
	"ch/draeyer/mike/portfolio/blocks/personal/BlockSocial.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form"\r\n\t\t  xmlns:core="sap.ui.core" xmlns="sap.m"><forms:SimpleForm editable="false" labelSpanL="4" labelSpanM="4"\r\n\t\t\t\t\t  labelSpanS="4" emptySpanL="0" emptySpanM="0" emptySpanS="0"\r\n\t\t\t\t\t  maxContainerCols="2" width="100%"><core:Title text="Social Media"/><Label text="Xing"/><Text text="/Michael_Draeyer"/><Label text="Instagram"/><Text text="@michualoha"/></forms:SimpleForm></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("ch.draeyer.mike.portfolio.controller.App",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}})});
},
	"ch/draeyer/mike/portfolio/controller/Portfolio.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/library"],function(e,t,o){"use strict";const i=o.URLHelper;return e.extend("ch.draeyer.mike.portfolio.controller.Portfolio",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());const e=sap.ui.require.toUrl("ch/draeyer/mike/portfolio/model/data.json"),o=sap.ui.require.toUrl("ch/draeyer/mike/portfolio/img/draeyer_mike.png");let i=new t(e);i.dataLoaded().then(e=>{this.getView().byId("avatar").setSrc(o);this.getView().setModel(i,"ObjectPageModel")})},onGeneradteQrCode:function(e){let t=this.getView().getModel("ObjectPageModel");const o=t.getProperty("/QrCode/inputValue");if(!o){return}t.setProperty("/QrCode/isImgVisible",true);t.setProperty("/QrCode/imgSrc",`http://localhost:8005/https://qrtag.net/api/qr_12.svg?url=${o}`)},onOpenInsta:function(){i.redirect("https://www.instagram.com/michualoha",true)},onPokemonSelectChange:function(e){const t=e.getParameters().selectedItem.getKey().split("/").slice(-2)[0];let o=this.getView().byId("imgPokemon"),i=this.getView().byId("txtFlavor");this._getPokemonById(t).then(e=>{let t=e.species.flavor_text_entries.filter(e=>e.language.name==="en"),n=t.sort(()=>.5-Math.random())[0].flavor_text;o.setSrc(e.form.sprites.front_default);i.setText(n)})},onPressSendMail:function(){this._getDialog("SendMail").open()},onSendMail:function(e){const t=e.getSource().getParent(),o=t.getModel("i18n").getResourceBundle(),n=this._findControl(t,"sap.m.Select"),r=this._findControl(t,"sap.m.RadioButtonGroup");let s=n.getSelectedItem().getKey(),a=o.getText("dialogs.sendmail.presubject")+" "+r.getSelectedButton().getText();i.triggerEmail(s,a)},onQrLiveChange:function(e){const t=e.getParameters().newValue;let o=this.getView().getModel("ObjectPageModel");o.setProperty("/QrCode/isBtnEnabled",!!t);if(!t){o.setProperty("/QrCode/isImgVisible",false)}},onToggleFooter:function(){let e=this.getView().getModel("ObjectPageModel"),t=e.getProperty("/isFooterVisible");this.getView().getModel("ObjectPageModel").setProperty("/isFooterVisible",!t)},_findControl:function(e,t){if(e.isA(t)){return e}else{switch(true){case e.isA("sap.m.Dialog"):for(const o of e.getContent()){e=this._findControl(o,t);if(e){return e}}break;case e.isA("sap.m.FlexBox"):for(const o of e.getItems()){e=this._findControl(o,t);if(e){return e}}break;default:e=undefined;break}}},_getDialog:function(e){let t=this["_o"+e];if(!t){t=sap.ui.xmlfragment(e,"ch.draeyer.mike.portfolio.view.dialogs."+e,this);t.setModel(this.getView().getModel("i18n"),"i18n");t.setModel(this.getView().getModel("ObjectPageModel"),"ObjectPageModel");this["_o"+e]=t;this.getView().addDependent(t)}return t},_getPokemonById:async e=>{const t=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${e}/`);const o=await fetch(`https://pokeapi.co/api/v2/pokemon-form/${e}/`);return{species:await t.json(),form:await o.json()}}})});
},
	"ch/draeyer/mike/portfolio/controller/eventing/EventingBlock.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("ch.draeyer.mike.portfolio.controller.eventing.EventingBlock",{onGenerateQrCode:function(e){this.oParentBlock.fireGenerateQr(e.getParameters())},onQrLiveChange:function(e){this.oParentBlock.fireQrChanged(e.getParameters())},onPressSendMail:function(e){this.oParentBlock.fireOnPressSendMail(e.getParameters())}})});
},
	"ch/draeyer/mike/portfolio/i18n/i18n.properties":'dialogs.sendmail.title=Send message\r\ndialogs.sendmail.type.label=Receiving Address:\r\ndialogs.sendmail.subject.label=Subject:\r\ndialogs.sendmail.subject.1=Collaboration Opportunity\r\ndialogs.sendmail.subject.2=Project Discussion\r\ndialogs.sendmail.subject.3=Professional Inquiry\r\ndialogs.sendmail.subject.4=Consultation Request\r\ndialogs.sendmail.subject.5=Partnership Proposal\r\ndialogs.sendmail.subject.6=Other subject...\r\ndialogs.sendmail.presubject= PortfolioPageMail: \r\n\r\ndialogs.sendmail.beginButton.text=Send\r\ndialogs.sendmail.endButton.text=Cancel\r\n\r\nheader.action.toggleFooter=Toggle Footer\r\n\r\nheader.content.goals=Achieved goals\r\nheader.content.hello=Hello! I am Michael and I study at BFH\r\nheader.content.location=Uetendorf BE, Switzerland\r\n\r\ngoals.title=Goals Plan\r\ngoals.study.label=Successfully complete study\r\ngoals.study.text=Due July 24\r\ngoals.home.label=Living in own home\r\ngoals.home.text=Since Dec 19\r\ngoals.consult.label=Establish consulting firm\r\ngoals.consult.text=Open\r\n\r\ninterests.title=Interests\r\ninterests.qr.title=QR-Codes\r\ninterests.pokemon.title=Childhood Memories\r\npersonal.title=Personal\r\npersonal.connect.title=Connect\r\n\r\npersonal.connect.address.title=Addresses\r\npersonal.connect.address.home.label=Home \r\npersonal.connect.address.home.text=Flurweg 8, 3661 Uetendorf CH\r\npersonal.connect.address.office.label=Office \r\npersonal.connect.address.office.text=Hilfikerstrasse 1, 3014 Bern CH\r\n\r\npersonal.connect.mail.title=Mail Addresses\r\npersonal.connect.mail.private.label=Private\r\npersonal.connect.mail.private.text=mike.draeyer@gmail.com\r\npersonal.connect.mail.office.label=Office \r\npersonal.connect.mail.office.text=michael.draeyer@sbb.ch\r\npersonal.connect.mail.button.text=Send me a message\r\n\r\npersonal.connect.phone.title=Phone Number\r\npersonal.connect.phone.label=Private / Office\r\npersonal.connect.phone.text=+41 75 402 24 73\r\n\r\n\r\nemployment.title=Employment\r\nemployment.jobinfo.title=Job information\r\nemployment.jobinfo.classification.label=Job classification\r\nemployment.jobinfo.classification.text=Professional SAP UI5 Developer\r\nemployment.jobinfo.jobtitle.label=Job title\r\nemployment.jobinfo.jobtitle.text=BizDevOps Engineer\r\nemployment.jobinfo.localtitle.label=Local Job Title\r\nemployment.jobinfo.localtitle.text=SAP Frontend Develper\r\n\r\nemployment.jobinfo.empclass.label=Employee Class\r\nemployment.jobinfo.empclass.text=Employee\r\nemployment.jobinfo.fte.label=FTE\r\nemployment.jobinfo.fte.text=0.8\r\nemployment.jobinfo.weeklyhours.label=Standard Weekly Hours\r\nemployment.jobinfo.weeklyhours.text=42\r\n\r\nemployment.jobinfo.manager.title=Manager\r\nemployment.jobinfo.manager.name=Pascal Albert\r\nemployment.jobinfo.manager.function=Center Leader\r\n\r\n\r\n\r\n\r\n\r\n\r\nemployment.empdetail.title=Employee Details\r\nemployment.empdetail.since.label=Working for SBB since\r\nemployment.empdetail.since.text=Aug, 2014\r\nemployment.empdetail.sap.label=SAP Experience\r\nemployment.empdetail.sap.text=10 years\r\nemployment.empdetail.noticeperiod.label=Period of notice\r\nemployment.empdetail.noticeperiod.text=3 months\r\n\r\n\r\nemployment.relations.title=Job Relationship\r\n\r\nfooter.button.interconnect=Get to know me..',
	"ch/draeyer/mike/portfolio/manifest.json":'{"_version":"1.0.0","sap.app":{"id":"ch.draeyer.mike.portfolio","type":"application","title":"Portfolio Page","description":"Michael Dräyer","applicationVersion":{"version":"1.0.0"},"dataSources":{}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"ch.draeyer.mike.portfolio.view.App","type":"XML","id":"app"},"dependencies":{"minUI5Version":"1.98.0","libs":{"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ch.draeyer.mike.portfolio.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","type":"View","viewType":"XML","path":"ch.draeyer.mike.portfolio.view","controlId":"app","controlAggregation":"pages"},"routes":[{"pattern":"","name":"portfolio_page","target":"portfolio_page"}],"targets":{"portfolio_page":{"id":"portfolio_page","name":"PortfolioPage"}}}}}',
	"ch/draeyer/mike/portfolio/view/App.view.xml":'<mvc:View\r\n\tcontrollerName="ch.draeyer.mike.portfolio.controller.App"\r\n\txmlns="sap.m"\r\n\txmlns:mvc="sap.ui.core.mvc"\r\n\tdisplayBlock="true"><Shell><App id="app"/></Shell></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/view/PortfolioPage.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc"\r\n\txmlns="sap.uxap"\r\n\txmlns:layout="sap.ui.layout"\r\n\txmlns:core="sap.ui.core"\r\n\txmlns:m="sap.m"\r\n\txmlns:goals="ch.draeyer.mike.portfolio.blocks.goals"\r\n\txmlns:personal="ch.draeyer.mike.portfolio.blocks.personal"\r\n\txmlns:employment="ch.draeyer.mike.portfolio.blocks.employment"\r\n\txmlns:interests="ch.draeyer.mike.portfolio.blocks.interests"\r\n\tcontrollerName="ch.draeyer.mike.portfolio.controller.Portfolio"\r\n\theight="100%"><ObjectPageLayout \r\n\t\tshowTitleInHeaderContent="true"\r\n\t\tupperCaseAnchorBar="false"\r\n\t\tshowFooter="{ObjectPageModel>/isFooterVisible}"><headerTitle><ObjectPageDynamicHeaderTitle><expandedHeading><m:FlexBox><m:Title text="Michael Dräyer" wrapping="true"/><m:ObjectMarker type="Favorite" class="sapUiTinyMarginBegin"/></m:FlexBox></expandedHeading><snappedHeading><m:FlexBox  fitContainer="true" alignItems="Center"><m:Title text="Michael Dräyer" wrapping="true"/></m:FlexBox></snappedHeading><expandedContent><m:Text text="Professional SAP UI5 Developer"/></expandedContent><snappedContent><m:Text text="Professional SAP UI5 Developer"/></snappedContent><snappedTitleOnMobile><m:Title text="Professional SAP UI5 Developer"/></snappedTitleOnMobile><actions><m:Button text="{i18n>header.action.toggleFooter}" press=".onToggleFooter"/></actions></ObjectPageDynamicHeaderTitle></headerTitle><headerContent><m:FlexBox wrap="Wrap"><m:Avatar id="avatar" class="sapUiSmallMarginEnd"  displaySize="L" /><layout:VerticalLayout class="sapUiSmallMarginBeginEnd"><m:Link text="+41 75 402 24 73"/><m:Link text="mike.draeyer@gmail.com"/></layout:VerticalLayout><layout:VerticalLayout class="sapUiSmallMarginBeginEnd"><m:Label text="{i18n>header.content.hello}"/><m:VBox><m:Label text="{i18n>header.content.goals}"/><m:ProgressIndicator percentValue="30" displayValue="30%"/></m:VBox></layout:VerticalLayout><layout:VerticalLayout class="sapUiSmallMarginBeginEnd"><m:Label text="{i18n>header.content.location}"/></layout:VerticalLayout></m:FlexBox></headerContent><sections><ObjectPageSection><subSections><ObjectPageSubSection title="{i18n>goals.title}" titleUppercase="false"><blocks><goals:GoalsBlock id="goalsblock"/></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" title="{i18n>personal.title}"><subSections><ObjectPageSubSection title="{i18n>personal.connect.title}" titleUppercase="false"><personal:BlockAdresses id="adresses"/><personal:BlockPhoneNumber id="phone"/><personal:BlockSocial id="social"/><personal:BlockMailing id="mailing" onPressSendMail="onPressSendMail"/></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" title="{i18n>employment.title}"><subSections><ObjectPageSubSection title="{i18n>employment.jobinfo.title}" titleUppercase="false"><blocks><employment:BlockJobInfoPart1 id="jobinfopart1"/><employment:BlockJobInfoPart2 id="jobinfopart2"/><employment:BlockJobInfoPart3 id="jobinfopart3"/></blocks></ObjectPageSubSection><ObjectPageSubSection title="{i18n>employment.empdetail.title}" titleUppercase="false"><blocks><employment:BlockEmpDetail id="empdetail" columnLayout="1"/></blocks></ObjectPageSubSection><ObjectPageSubSection title="{i18n>employment.relations.title}" titleUppercase="false"><blocks><employment:EmploymentBlockJob id="employmentblockjob" showSubSectionMore="true"><employment:mappings><ModelMapping externalModelName="ObjectPageModel" internalModelName="emp1"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/Employee/0"/><ModelMapping externalModelName="ObjectPageModel" internalModelName="emp2"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/Employee/1"/><ModelMapping externalModelName="ObjectPageModel" internalModelName="emp3"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/Employee/2"/><ModelMapping externalModelName="ObjectPageModel" internalModelName="emp4"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/Employee/3"/><ModelMapping externalModelName="ObjectPageModel" internalModelName="emp5"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/Employee/4"/><ModelMapping externalModelName="ObjectPageModel" internalModelName="emp6"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/Employee/5"/></employment:mappings></employment:EmploymentBlockJob></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="{i18n>interests.title}" titleUppercase="false"><subSections><ObjectPageSubSection title="{i18n>interests.qr.title}" titleUppercase="false"><blocks><interests:QrBlock id="qrblock" generateQr="onGeneradteQrCode" qrChanged="onQrLiveChange"><interests:mappings><ModelMapping externalModelName="ObjectPageModel" internalModelName="qr"\r\n\t\t\t\t\t\t\t\t\t\t\t\t  externalPath="/QrCode"/></interests:mappings></interests:QrBlock></blocks></ObjectPageSubSection><ObjectPageSubSection title="{i18n>interests.pokemon.title}" titleUppercase="false"><m:FlexBox direction="Column"><m:Select items="{pokemonsAPI>/pokemon_species}" forceSelection="false" change="onPokemonSelectChange"><core:Item key="{pokemonsAPI>url}" text="{pokemonsAPI>name}" /></m:Select><m:FlexBox alignItems="Center"><m:Image id="imgPokemon" /><m:Text id="txtFlavor" /></m:FlexBox></m:FlexBox></ObjectPageSubSection></subSections></ObjectPageSection></sections><footer><m:OverflowToolbar><m:ToolbarSpacer /><m:Button text="{i18n>footer.button.interconnect}" type="Emphasized" press=".onOpenInsta" /></m:OverflowToolbar></footer></ObjectPageLayout></mvc:View>\r\n',
	"ch/draeyer/mike/portfolio/view/dialogs/SendMail.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m"><Dialog title="{i18n>dialogs.sendmail.title}" contentWidth="600px"><FlexBox direction="Column" class="sapUiSmallMargin"><Label text="{i18n>dialogs.sendmail.type.label}" /><Select\r\n                    class="sapUiTinyMarginBottom"\r\n\t\t\t\t\titems="{\r\n\t\t\t\t\t\tpath: \'ObjectPageModel>/MailAddresses\'\r\n\t\t\t\t\t}"><core:Item key="{ObjectPageModel>address}" text="{ObjectPageModel>type}" /></Select><Label text="{i18n>dialogs.sendmail.subject.label}" /><RadioButtonGroup columns="3" width="100%" class="sapUiMediumMarginBottom"><RadioButton id="RB1-1" text="{i18n>dialogs.sendmail.subject.1}" /><RadioButton id="RB1-2" text="{i18n>dialogs.sendmail.subject.2}" /><RadioButton id="RB1-3" text="{i18n>dialogs.sendmail.subject.3}" /><RadioButton id="RB1-4" text="{i18n>dialogs.sendmail.subject.4}" /><RadioButton id="RB1-5" text="{i18n>dialogs.sendmail.subject.5}" /><RadioButton id="RB1-6" text="{i18n>dialogs.sendmail.subject.6}" /></RadioButtonGroup></FlexBox><beginButton><Button text="{i18n>dialogs.sendmail.beginButton.text}" press="onSendMail" type="Emphasized"/></beginButton><endButton><Button text="{i18n>dialogs.sendmail.endButton.text}" press="onCancelSendMail"/></endButton></Dialog></core:FragmentDefinition>'
});
//# sourceMappingURL=Component-preload.js.map
