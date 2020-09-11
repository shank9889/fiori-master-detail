sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, MsgToast, MsgBox) {
	"use strict";

	return Controller.extend("wipro.hr.payroll.controller.Add", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData({
				"productData": {
					"PRODUCT_ID": "",
					"TYPE_CODE": "PR",
					"CATEGORY": "Notebooks",
					"NAME": "",
					"DESCRIPTION": "",
					// "SUPPLIER_ID": "",
					"PRICE": "",
					"CURRENCY_CODE": "",
					"PRODUCT_PIC_URL": "/sap/public/bc/NWDEMO_MODEL/IMAGES"
				}
			});
			this.getView().setModel(oModel, "shashank");
		},
		newSave: function(oEvent) {

			var payload = this.getView().getModel("shashank").getProperty("/productData");
			var oDataModel = this.getView().getModel();
			oDataModel.create("/ProductSet", payload, {
				success: function(data) {
					MsgToast.show("We made it bro!!");
				},
				error: function(oErr) {

					// MsgBox.error("Timepass");
					MsgBox.error(JSON.parse(oErr.responseText).error.innererror.errordetails[0].message);
				}
			});
		},
		onSubmit: function(oEvent) {
          var prod = oEvent.getSource().getValue();
          var oDataModel = this.getView().getModel();
          var that = this;
          	oDataModel.read("/ProductSet('" + prod + "')", {
				success: function(data) {
		that.getView().getModel("shashank").setProperty("/productData",data);
					
				},
				error: function(oErr) {
					MsgBox.error(JSON.parse(oErr.responseText).error.innererror.errordetails[0].message);
				}
			});
          
          
		},
		
		onExpensive: function(oEvent) {
		 
		 var that = this;
		 var oDataModel = this.getView().getModel();
		 oDataModel.callFunction("/GetMostExpensive",{
		 	success: function(data){
	 	that.getView().getModel("shashank").setProperty("/productData",data);
		 	},
		 	error: function(oErr){
		 			MsgBox.error(JSON.parse(oErr.responseText).error.innererror.errordetails[0].message);
		 	}
		 })  ;
		
			
		},
		oFragFilter: null,
		inpField: null,
		onItemSel: function(oEvent) {

			var sellItemTitle = oEvent.getParameter("selectedItem").getLabel();
			this.inpField.setValue(sellItemTitle);

		},
		onF4H: function(oEvent) {

			this.inpField = oEvent.getSource();
			// if (!this.oFragFilter) {
			this.oFragFilter = new sap.ui.xmlfragment("idSuppPop",
				"wipro.hr.payroll.fragments.popup",
				this);

			this.getView().addDependent(this.oFragFilter);
			this.oFragFilter.setMultiSelect(false);

			this.oFragFilter.bindAggregation("items", {
				path: '/SupplierSet',
				template: new sap.m.DisplayListItem({
					label: "{BpId}",
					value: "{CompanyName}"
				})
			});
			this.oFragFilter.open();
			// }
		},
		onSearchPop: function(oEvent) {

			var searchVal = oEvent.getParameter("value");

			var oFilter = new sap.ui.model.Filter("CompanyName", sap.ui.model.FilterOperator.EQ, searchVal);

			var aFilter = [oFilter];

			this.oFragFilter.getBinding("items").filter(aFilter);

		}
	});
});