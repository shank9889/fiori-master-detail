sap.ui.define(["sap/ui/model/json/JSONModel"],function(JSONModel){
	return {
		
			createNewModel:function()
			{
		   var oModel = new JSONModel();
			oModel.loadData("model/mockData/catalog.json");
			return oModel;
			}
		
	};
});