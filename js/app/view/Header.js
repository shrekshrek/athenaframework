define(["basePage","siteMap","siteModel","siteRouter","athena","tweenMax","easyBtn"],function(BasePage,SiteMap,SiteModel,SiteRouter,Athena,TweenMax,EasyBtn){
	var view = BasePage.extend({
		id:"header",
		className:"page",
		btnLogo:null,
		init:function(args){
			BasePage.prototype.init.apply(this,[args]);
			
			this.btnLogo = new EasyBtn({el:this.$el.find("h1")});
			this.addChild(this.btnLogo);
			this.listenTo(this.btnLogo, this.btnLogo.CLICK, function(){
				SiteRouter.navigate(SiteMap.home.title, {trigger: true});
			});
		},
		destroy:function(){
			BasePage.prototype.destroy.apply(this);
		},
		resize:function(){
			//this.$el.width(Athena.stageRect().width);
			//this.$el.height(Athena.stageRect().height);
			BasePage.prototype.resize.apply(this);
		},
		transitionIn:function(){
			BasePage.prototype.transitionIn.apply(this);
			var _self = this;
			if(TweenMax.isTweening(this.$el)) TweenMax.killTweensOf(this.$el);
			TweenMax.to(this.$el, 0.3, {opacity:1, ease:Linear.easeNone, onComplete:function(){
				_self.transitionInComplete();
			}});
		},
		transitionOut:function(){
			BasePage.prototype.transitionOut.apply(this);
			var _self = this;
			if(TweenMax.isTweening(this.$el)) TweenMax.killTweensOf(this.$el);
			TweenMax.to(this.$el, 0.3, {opacity:0, ease:Linear.easeNone, onComplete:function(){
				_self.transitionOutComplete();
			}});
		}
	});
	return view;
});
