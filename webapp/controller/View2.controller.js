sap.ui.define([
	"wipro/hr/payroll/Controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MsgBox, MsgToast) {
	"use strict";

	return Controller.extend("wipro.hr.payroll.controller.View2", {
		onInit: function() {
     
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis, this);
		},
		herculis: function(oEvent) {
			var fruitId = oEvent.getParameter("arguments").fruitId;
			var sPath = '/' + fruitId;
			this.getView().bindElement({
				path : sPath,
				parameters : {
					expand : "toSupplier"}
				});
			
this.getView().getModel().setProperty("/ProductSet");
this.getView().byId("suppData").bindElement("toSupplier");
this.getView().byId("imageDisplay").setSrc("/sap/opu/odata/sap/ZSH_FIORI_APP_SRV"+ sPath +"/$value");
		},
		onBack: function() {
			var otry = this.getView().getParent();
			otry.to("idView1");
		},
		onApprove: function() {
			MsgBox.confirm("Do you wish to order ?", {
				title: "Confirm to place the order",
				onClose: this.myConfirm
			});
		},

		/*myConfirm: function(status)
			{
			                   		if(status === "OK"){
			                   			MsgToast.show("The order has been placed successfully");
			                   		}
			                   		else 
			                   		{
			                   			MsgToast.show("Sorry you cancelled it");
			                   		}
			                   	},*/

		onDropDownChange: function(oEvent) {
			this.printData(oEvent.getSource().getSelectedKey()); //Implement Laterss
		},
		onMulti: function(oEvent) {
			var oMulti = oEvent.getSource();
			var allItems = oMulti.getSelectedItems();
			var allData = "";
			for (var i = 0; i < allItems.length; i++) {
				allData = allData + "," + allItems[i].getKey();
			}
			this.printData(allData); //Implement Laterss
		},

		onItemPress: function(oEvent) {
			//get the path of selected element
			var sPath = oEvent.getParameter("listItem").getBindingContextPath();

			//get the object of view 3

			var oSplitApp = this.getView().getParent().getParent();

			var oView3 = oSplitApp.getDetailPages()[2];

			//bind view 3 with absolute path of 3rd level view.

			oView3.bindElement(sPath);

			//trigger nav to 3rd level view

			oSplitApp.toDetail("idView3");

		},

		oFragFilter: null,
		oFragCity: null,
		onFilter: function() {
			if (!this.oFragFilter) {
				this.oFragFilter = new sap.ui.xmlfragment("idFilter",
					"wipro.hr.payroll.fragments.popup",
					this);

				this.getView().addDependent(this.oFragFilter);

				this.oFragFilter.bindAggregation("items", {
					path: '/ProductSet',
					template: new sap.m.DisplayListItem({
						label: "{CATEGORY}",
						value: "{CATEGORY}"
					})
				});
			}

			this.oFragFilter.open();
		},
		inpField: null,
		onItemSel: function(oEvent) {

			var allItems = oEvent.getParameter("selectedItems");
			if (allItems.length > 0) {
				var oTable = this.getView().byId("suppTab");
				var aFilter = [];
				for (var i = 0; i < allItems.length; i++) {
					aFilter.push(new sap.ui.model.Filter("CATEGORY",
						sap.ui.model.FilterOperator.EQ, allItems[i].getLabel()));
				}

				var oFilter = new sap.ui.model.Filter({
					filters: aFilter,
					and: false
				});
				oTable.getBinding("items").filter([oFilter]);
			} else {
				var sellItemTitle = oEvent.getParameter("selectedItem").getLabel();
				this.inpField.setValue(sellItemTitle);
			}

		},
		onF4Help: function(oEvent) {
			this.inpField = oEvent.getSource();
			if (!this.oFragCity) {
				this.oFragCity = new sap.ui.xmlfragment("idFilter",
					"wipro.hr.payroll.fragments.popup", this);

				this.getView().addDependent(this.oFragCity);

				this.oFragCity.bindAggregation("items", {
					path: '/cities',
					template: new sap.m.DisplayListItem({
						label: "{name}",
						value: "{name}"
					})
				});

			}
			this.oFragCity.setMultiSelect(false);
			this.oFragCity.open();
		}

	});
});