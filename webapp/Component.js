sap.ui.define(
	["sap/ui/core/UIComponent"],
     function(UIComponent)
     {
     	return UIComponent.extend("wipro.hr.payroll.Component",
     	{
     		metadata: {
     			manifest:"json"
     		},
     		init: function()
     		{
     			UIComponent.prototype.init.apply(this);	
     			var oRouter = this.getRouter();
     			oRouter.initialize();
     		}
     	// 	createContent: function()
     	// 	{
     	//      var oView = sap.ui.view("idRoot", 
      //            	{
    	
    		// viewName: "wipro.hr.payroll.view.App",
    		// type: sap.ui.core.mvc.ViewType.XML
      //               	});
                     	
      //               	return oView;
    	
     	// 	}
     		
     	});
     		
     	
     });