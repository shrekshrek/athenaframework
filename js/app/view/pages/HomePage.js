define(["basePage","siteMap","siteModel","siteRouter","athena","tweenMax","easyBtn"],function(BasePage,SiteMap,SiteModel,SiteRouter,Athena,TweenMax,EasyBtn){
	var view = BasePage.extend({
		id:"home_page",
		className:"page",
		items:null,
		init:function(args){
			BasePage.prototype.init.apply(this,[args]);
			
			this.items = [];
			
			var _self = this;
			_.each(this.$el.find(".item"), function(obj,index){
				var _item = new EasyBtn({el:obj});
				_self.addChild(_item);
				_self.items[index] = _item;
				_self.listenTo(_item, _item.CLICK, function(){
					_self._itemClickHandler(index);
				});
			});
			
		},
		destroy:function(){
			BasePage.prototype.destroy.apply(this);
		},
		resize:function(){
			this.$el.width(Athena.stageRect().width);
			this.$el.height(Athena.stageRect().height);
			
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
		},
		_itemClickHandler:function(index){
			switch(index)
			{
				case 0:
					//Athena.pageTo(SiteMap.fruitNinja);
					window.open("https://github.com/shrekshrek/athenaframework");
					break;
				case 1:
					//Athena.pageTo(SiteMap.fruitNinja);
					SiteRouter.navigate(SiteMap.fruitNinja.title, {trigger: true});
					break;
			}
		}
	});
	return view;
});
