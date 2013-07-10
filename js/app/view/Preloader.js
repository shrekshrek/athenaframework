define(["basePage","siteModel","athena","tweenMax"],function(BasePage,SiteModel,Athena,TweenMax){
	var view = BasePage.extend({
		id:"preloader",
		$bar:null,
		init:function(args){
			BasePage.prototype.init.apply(this,[args]);
			
			this.$bar = $(this.el).find(".loading_bar");
			
			var _self = this;
			$(window).scroll(function(){
				_self.$bar.css({"top":$(window).scrollTop() + Athena.windowRect.height/2});
			});
		},
		resize:function(){
			$(this.el).width(Athena.stageRect().width);
			$(this.el).height(Athena.stageRect().height);
			
			this.$bar.css({"top":$(window).scrollTop() + Athena.windowRect.height/2});
			
			BasePage.prototype.resize.apply(this);
		},
		transitionIn:function(obj){
			BasePage.prototype.transitionIn.apply(this);
			
			if(this.$el.is(":animated")) this.$el.stop(true);
			
			var _self = this;
			if(TweenMax.isTweening(this.$el)) TweenMax.killTweensOf(this.$el);
			TweenMax.to(this.$el, 0.3, {opacity:1, onComplete:function(){
				_self.transitionInComplete();
			}});
			
			this.$bar.css({"width":0,"left":Athena.stageRect().width/2});
		},
		transitionOut:function(obj){
			BasePage.prototype.transitionOut.apply(this);
			
			var _self = this;
			if(TweenMax.isTweening(this.$el)) TweenMax.killTweensOf(this.$el);
			TweenMax.to(this.$el, 0.3, {opacity:0, onComplete:function(){
				_self.transitionOutComplete();
			}});
		},
		progress:function(obj){
			if(this.$el.css("opacity") == 0) TweenMax.to(this.$el, 0.3, {opacity:1});
			
			if(TweenMax.isTweening(this.$bar)) TweenMax.killTweensOf(this.$bar);
			TweenMax.to(this.$bar, 0.3, {width:Athena.stageRect().width*obj.progress, left:Athena.stageRect().width*(1-obj.progress)*0.5});
		}
	});
	return view;
});
