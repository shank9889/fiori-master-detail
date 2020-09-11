sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"wipro/hr/payroll/model/model"
], function (Controller,myModel) {
	"use strict";

	return Controller.extend("wipro.hr.payroll.controller.App", {
		onInit: function () {
			
  //var oView1 = new sap.ui.view("idView1", 
  //                	{
  //  		viewName: "wipro.hr.payroll.view.View1",
  //  		type: sap.ui.core.mvc.ViewType.XML
  //                   	});
                
  //              var oView2 = new sap.ui.view("idView2", 
  //                	{
  //  		viewName: "wipro.hr.payroll.view.View2",
  //  		type: sap.ui.core.mvc.ViewType.XML
  //                   	});
                     	
  //              var oViewEmpty = new sap.ui.view("idEmpty", 
  //                	{
  //  		viewName: "wipro.hr.payroll.view.Empty",
  //  		type: sap.ui.core.mvc.ViewType.XML
  //                   	});
                     	
  //            var oView3 = new sap.ui.view("idView3", 
  //                	{
  //  		viewName: "wipro.hr.payroll.view.View3",
  //  		type: sap.ui.core.mvc.ViewType.XML
  //                   	});
                     	
  //              var oApp = this.getView().byId("myApp");
                
  //              oApp.addMasterPage(oView1).addDetailPage(oViewEmpty).addDetailPage(oView2).addDetailPage(oView3);
                
         //var oJSONModel = myModel.createNewModel();
           //     this.getView().setModel(oJSONModel);
                
		}
	});
});