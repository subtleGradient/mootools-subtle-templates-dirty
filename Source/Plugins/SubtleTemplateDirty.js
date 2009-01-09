/*
Script: SubtleTemplateDirty.js
	MooTools - My Object Oriented JavaScript Tools.

License:
	MIT-style license.

Copyright:
	Copyright (c) 2006-2007 [copyright holders](http://).

*/

//
var SubtleTemplateDirty = new Class({
	
	Implements: [Options, Events],
	
	options:{
		mapping:{
			
		}
	},
	
	Properties:{
		html:{set: function(value){ this.set('html',value); }}
	},
	
	initialize: function(element, mapping){
		this.setOptions({ mapping:mapping });
		this.element = $(element);
	},
	
	getSelector: function(key){
		return [
			'#'+key,
			'[name='+key+']',
			'.'+key
		].join(',');
	},
	
	set: function(key, value){
		if (value==undefined && $type(key)=='object') return this.setMultiple(key);
		if (this.Properties[key] && $type(this.Properties[key].set)=='function') return this.Properties[key].set.call(this.element, value);
		
		var el = this.element;
		key.split('.').each(function(k){
			el = el.getElement(this.getSelector(k));
		},this);
		
		if (!el){
			this.Properties[key] = { set:function(value){} };
			return this;
		}else{}
		
		var setWhat = 'text';
		if (/input|select|textarea/.test(el.get('tag'))) setWhat='value';
		
		this.Properties[key] = { set: function(value){ el.set(setWhat, value); }};
		this.Properties[key].set.call(this.element, value)
		return this;
	},
	
	setMultiple: function(obj){
		Hash.each(obj, function(value,key){this.set(key,value)}, this);
		return this;
	}
	
});
