define(["backbone","athena","siteMap"],function(BackBone,Athena,SiteMap){
	var router = Backbone.Router.extend({
		routes: {
			"*actions":"defaultRoute"
		},
		defaultRoute:function(actions){
			
			switch(actions){
				case null:
					this.navigate(SiteMap.home.title, {trigger: true});
					break;
				default:
					_.each(SiteMap, function(obj, index){
						if(actions == obj.title){
							if(Athena.getPage(SiteMap.header)){
								Athena.pageTo(obj);
							}else{
								Athena.pageTo([SiteMap.header,SiteMap.footer,obj]);
							}
							
						}
					});
					break;
			}
		}
	});
	return new router;
});