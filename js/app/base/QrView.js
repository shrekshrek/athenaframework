define(["baseView","siteModel","athena","jquery.qrcode"],function(BaseView,SiteModel,Athena){
	var view = BaseView.extend({
		_siteUrl:null,
		init:function(args){
			BaseView.prototype.init.apply(this,[args]);
			
			var _self = this;
			this.listenTo(Athena, Athena.FLOW_COMPLETE, function(obj){
				if(obj.data.depth == 0){
					_self.initQr();
				}
			});
			this.initQr();
			
			$(document).on("keydown",function(event){
				switch(event.keyCode){
					case 81:
						_self.toggle();
						break;
				}
			});
			
			this.toggle();
		},
		destroy:function(){
			this.clearQr();
			$(document).off("keydown");
			
			BaseView.prototype.destroy.apply(this);
		},
		initQr:function(){
			var _url = window.location.href;
			if(this._siteUrl != _url){
				this.$el.empty();
				this.$el.qrcode({
					width: 128,
					height: 128,
					text: _url
				});
				this._siteUrl = _url;
			}
		},
		clearQr:function(){
			this.$el.empty();
		},
		toggle:function(){
			if(this.$el.css("display") == "none"){
				this.$el.css({"display":"inline"});
			}else{
				this.$el.css({"display":"none"});
			}
		}
	});
	return view;
});