sap.ui.define([
	"wipro/hr/payroll/Controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("wipro.hr.payroll.controller.View1", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();

		},
		
		onNext: function(address){
			// var otry = this.getView().getParent().getParent();
			// otry.toDetail("idView2");
			// router will take care
			var myFruit = address.split("/")[address.split("/").length - 1] ;
			this.oRouter.navTo("detail",{
				fruitId: myFruit
			});
			
		},
		onDelete: function(oEvent)
		{
			var oItemToBeDeleted = oEvent.getParameter("listItem");
			var oList = oEvent.getSource();
			oList.removeItem(oItemToBeDeleted);
			
		},
		onSearch:function(oEvent)
		{
			var searchVal = oEvent.getParameter("query");
			
			if (!searchVal)
			{
				 searchVal = oEvent.getParameter("newValue");
			}
			var oFilter = new sap.ui.model.Filter("CATEGORY",sap.ui.model.FilterOperator.EQ,searchVal);
			// var oCat = new sap.ui.model.Filter("mstat",sap.ui.model.FilterOperator.Contains,searchVal);
			// var oKombi = new sap.ui.model.Filter(
			// 	{
			// 		filters: [oFilter,oCat],
			// 		and : false
			// 	});
			var aFilter = [oFilter];
			var oList = this.getView().byId("List1");
			oList.getBinding("items").filter(aFilter);
			
		},
		
		onPress: function(oEvent){
			var oSelectedItem = oEvent.getParameter("listItem");
			var address = oSelectedItem.getBindingContextPath();
			// var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
			//  oView2.bindElement(address);
			this.onNext(address);                 
		},
		onAdd: function() {
			this.oRouter.navTo("add");
		}
		
	});
});