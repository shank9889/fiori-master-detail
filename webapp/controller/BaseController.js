sap.ui.define( ["sap/ui/core/mvc/Controller",
                "sap/m/MessageBox",
                "sap/m/MessageToast"], 
function(Controller,MsgBox,MsgToast){
return Controller.extend("wipro.hr.payroll.BaseController", {
 myConfirm: function(status)
		{
		                   		if(status === "OK"){
		                   			MsgToast.show("The order has been placed successfully");
		                   		}
		                   		else 
		                   		{
		                   			MsgToast.show("Sorry you cancelled it");
		                   		}
		                   	},
		 printData: function(text){
		 	MsgBox.confirm(text,
		 	{
		                   	title: "Confirm to place the order",
		                   	onClose: this.myConfirm
		                   });
		 }
		                   	
 });
 });