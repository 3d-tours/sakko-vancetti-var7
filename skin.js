// Garden Gnome Software - Skin
// Pano2VR 5.0.1/15068
// Filename: ???????0.ggsk
// Generated Пт июл 11 17:33:01 2025

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._button_direction=document.createElement('div');
		this._button_direction.ggId="button_direction";
		this._button_direction.ggLeft=-94;
		this._button_direction.ggTop=-80;
		this._button_direction.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_direction.ggVisible=true;
		this._button_direction.className='ggskin ggskin_container ';
		this._button_direction.ggType='container';
		hs ='';
		hs+='height : 62px;';
		hs+='left : -94px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		this._button_direction.setAttribute('style',hs);
		this._button_direction.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		me._button_direction.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_direction.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_image_right=document.createElement('div');
		this._button_image_right__img=document.createElement('img');
		this._button_image_right__img.className='ggskin ggskin_svg';
		this._button_image_right__img.setAttribute('src',basePath + 'images/button_image_right.svg');
		this._button_image_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_right__img['ondragstart']=function() { return false; };
		this._button_image_right.appendChild(this._button_image_right__img);
		this._button_image_right__imgo=document.createElement('img');
		this._button_image_right__imgo.className='ggskin ggskin_svg';
		this._button_image_right__imgo.setAttribute('src',basePath + 'images/button_image_right__o.svg');
		this._button_image_right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_right__imgo['ondragstart']=function() { return false; };
		this._button_image_right.appendChild(this._button_image_right__imgo);
		this._button_image_right.ggId="button_image_right";
		this._button_image_right.ggLeft=-31;
		this._button_image_right.ggTop=-47;
		this._button_image_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_right.ggVisible=true;
		this._button_image_right.className='ggskin ggskin_svg ';
		this._button_image_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -31px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_right.setAttribute('style',hs);
		this._button_image_right.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_right.onmouseover=function () {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		this._button_image_right.onmouseout=function () {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.onmousedown=function () {
			me.elementMouseDown['button_image_right']=true;
		}
		this._button_image_right.onmouseup=function () {
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.ontouchend=function () {
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_right);
		this._button_image_left=document.createElement('div');
		this._button_image_left__img=document.createElement('img');
		this._button_image_left__img.className='ggskin ggskin_svg';
		this._button_image_left__img.setAttribute('src',basePath + 'images/button_image_left.svg');
		this._button_image_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_left__img['ondragstart']=function() { return false; };
		this._button_image_left.appendChild(this._button_image_left__img);
		this._button_image_left__imgo=document.createElement('img');
		this._button_image_left__imgo.className='ggskin ggskin_svg';
		this._button_image_left__imgo.setAttribute('src',basePath + 'images/button_image_left__o.svg');
		this._button_image_left__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_left__imgo['ondragstart']=function() { return false; };
		this._button_image_left.appendChild(this._button_image_left__imgo);
		this._button_image_left.ggId="button_image_left";
		this._button_image_left.ggLeft=-83;
		this._button_image_left.ggTop=-47;
		this._button_image_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_left.ggVisible=true;
		this._button_image_left.className='ggskin ggskin_svg ';
		this._button_image_left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -83px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_left.setAttribute('style',hs);
		this._button_image_left.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_left.onmouseover=function () {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		this._button_image_left.onmouseout=function () {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.onmousedown=function () {
			me.elementMouseDown['button_image_left']=true;
		}
		this._button_image_left.onmouseup=function () {
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.ontouchend=function () {
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_left);
		this._button_image_down=document.createElement('div');
		this._button_image_down__img=document.createElement('img');
		this._button_image_down__img.className='ggskin ggskin_svg';
		this._button_image_down__img.setAttribute('src',basePath + 'images/button_image_down.svg');
		this._button_image_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_down__img['ondragstart']=function() { return false; };
		this._button_image_down.appendChild(this._button_image_down__img);
		this._button_image_down__imgo=document.createElement('img');
		this._button_image_down__imgo.className='ggskin ggskin_svg';
		this._button_image_down__imgo.setAttribute('src',basePath + 'images/button_image_down__o.svg');
		this._button_image_down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_down__imgo['ondragstart']=function() { return false; };
		this._button_image_down.appendChild(this._button_image_down__imgo);
		this._button_image_down.ggId="button_image_down";
		this._button_image_down.ggLeft=-57;
		this._button_image_down.ggTop=-31;
		this._button_image_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_down.ggVisible=true;
		this._button_image_down.className='ggskin ggskin_svg ';
		this._button_image_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_down.setAttribute('style',hs);
		this._button_image_down.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_down.onmouseover=function () {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		this._button_image_down.onmouseout=function () {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.onmousedown=function () {
			me.elementMouseDown['button_image_down']=true;
		}
		this._button_image_down.onmouseup=function () {
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.ontouchend=function () {
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_down);
		this._button_image_up=document.createElement('div');
		this._button_image_up__img=document.createElement('img');
		this._button_image_up__img.className='ggskin ggskin_svg';
		this._button_image_up__img.setAttribute('src',basePath + 'images/button_image_up.svg');
		this._button_image_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_up__img['ondragstart']=function() { return false; };
		this._button_image_up.appendChild(this._button_image_up__img);
		this._button_image_up__imgo=document.createElement('img');
		this._button_image_up__imgo.className='ggskin ggskin_svg';
		this._button_image_up__imgo.setAttribute('src',basePath + 'images/button_image_up__o.svg');
		this._button_image_up__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_up__imgo['ondragstart']=function() { return false; };
		this._button_image_up.appendChild(this._button_image_up__imgo);
		this._button_image_up.ggId="button_image_up";
		this._button_image_up.ggLeft=-57;
		this._button_image_up.ggTop=-63;
		this._button_image_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_up.ggVisible=true;
		this._button_image_up.className='ggskin ggskin_svg ';
		this._button_image_up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : -63px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_image_up.setAttribute('style',hs);
		this._button_image_up.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_up.onmouseover=function () {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		this._button_image_up.onmouseout=function () {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.onmousedown=function () {
			me.elementMouseDown['button_image_up']=true;
		}
		this._button_image_up.onmouseup=function () {
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.ontouchend=function () {
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_direction.appendChild(this._button_image_up);
		this.divSkin.appendChild(this._button_direction);
		this._button_auto_rotate=document.createElement('div');
		this._button_auto_rotate.ggId="button_auto_rotate";
		this._button_auto_rotate.ggLeft=-137;
		this._button_auto_rotate.ggTop=-65;
		this._button_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_auto_rotate.ggVisible=true;
		this._button_auto_rotate.className='ggskin ggskin_container ';
		this._button_auto_rotate.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._button_auto_rotate.setAttribute('style',hs);
		this._button_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		me._button_auto_rotate.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_auto_rotate.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._stop_rotate_image=document.createElement('div');
		this._stop_rotate_image__img=document.createElement('img');
		this._stop_rotate_image__img.className='ggskin ggskin_svg';
		this._stop_rotate_image__img.setAttribute('src',basePath + 'images/stop_rotate_image.svg');
		this._stop_rotate_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._stop_rotate_image__img['ondragstart']=function() { return false; };
		this._stop_rotate_image.appendChild(this._stop_rotate_image__img);
		this._stop_rotate_image__imgo=document.createElement('img');
		this._stop_rotate_image__imgo.className='ggskin ggskin_svg';
		this._stop_rotate_image__imgo.setAttribute('src',basePath + 'images/stop_rotate_image__o.svg');
		this._stop_rotate_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._stop_rotate_image__imgo['ondragstart']=function() { return false; };
		this._stop_rotate_image.appendChild(this._stop_rotate_image__imgo);
		this._stop_rotate_image.ggId="stop_rotate_image";
		this._stop_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stop_rotate_image.ggVisible=false;
		this._stop_rotate_image.className='ggskin ggskin_svg ';
		this._stop_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._stop_rotate_image.setAttribute('style',hs);
		this._stop_rotate_image.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stop_rotate_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stop_rotate_image.onclick=function () {
			me.player.stopAutorotate();
			me._stop_rotate_image.style[domTransition]='none';
			me._stop_rotate_image.style.visibility='hidden';
			me._stop_rotate_image.ggVisible=false;
			me._start_rotate_image.style[domTransition]='none';
			me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
			me._start_rotate_image.ggVisible=true;
		}
		this._stop_rotate_image.onmouseover=function () {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['stop_rotate_image']=true;
		}
		this._stop_rotate_image.onmouseout=function () {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['stop_rotate_image']=false;
		}
		this._stop_rotate_image.ontouchend=function () {
			me.elementMouseOver['stop_rotate_image']=false;
		}
		this._stop_rotate_image.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate0=document.createElement('div');
		this._tt_stop_auto_rotate0__text=document.createElement('div');
		this._tt_stop_auto_rotate0.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate0.ggTextDiv=this._tt_stop_auto_rotate0__text;
		this._tt_stop_auto_rotate0.ggId="tt_stop_auto_rotate";
		this._tt_stop_auto_rotate0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate0.ggVisible=false;
		this._tt_stop_auto_rotate0.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate0.setAttribute('style',hs);
		this._tt_stop_auto_rotate0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate0__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate0__text.innerHTML="\u0421\u0442\u043e\u043f 360";
		this._tt_stop_auto_rotate0.appendChild(this._tt_stop_auto_rotate0__text);
		me._tt_stop_auto_rotate0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible = -1;
		this._tt_stop_auto_rotate0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['stop_rotate_image'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate0.style[domTransition]='';
				if (me._tt_stop_auto_rotate0.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate0.style.visibility=(Number(me._tt_stop_auto_rotate0.style.opacity)>0||!me._tt_stop_auto_rotate0.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate0.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate0.style.visibility="hidden";
					me._tt_stop_auto_rotate0.ggVisible=false;
				}
			}
		}
		this._tt_stop_auto_rotate0.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate_white0=document.createElement('div');
		this._tt_stop_auto_rotate_white0__text=document.createElement('div');
		this._tt_stop_auto_rotate_white0.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate_white0.ggTextDiv=this._tt_stop_auto_rotate_white0__text;
		this._tt_stop_auto_rotate_white0.ggId="tt_stop_auto_rotate_white";
		this._tt_stop_auto_rotate_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate_white0.ggVisible=true;
		this._tt_stop_auto_rotate_white0.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate_white0.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate_white0__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white0__text.innerHTML="\u0421\u0442\u043e\u043f 360";
		this._tt_stop_auto_rotate_white0.appendChild(this._tt_stop_auto_rotate_white0__text);
		me._tt_stop_auto_rotate_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_stop_auto_rotate_white0.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate0.appendChild(this._tt_stop_auto_rotate_white0);
		this._stop_rotate_image.appendChild(this._tt_stop_auto_rotate0);
		this._button_auto_rotate.appendChild(this._stop_rotate_image);
		this._start_rotate_image=document.createElement('div');
		this._start_rotate_image__img=document.createElement('img');
		this._start_rotate_image__img.className='ggskin ggskin_svg';
		this._start_rotate_image__img.setAttribute('src',basePath + 'images/start_rotate_image.svg');
		this._start_rotate_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._start_rotate_image__img['ondragstart']=function() { return false; };
		this._start_rotate_image.appendChild(this._start_rotate_image__img);
		this._start_rotate_image__imgo=document.createElement('img');
		this._start_rotate_image__imgo.className='ggskin ggskin_svg';
		this._start_rotate_image__imgo.setAttribute('src',basePath + 'images/start_rotate_image__o.svg');
		this._start_rotate_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._start_rotate_image__imgo['ondragstart']=function() { return false; };
		this._start_rotate_image.appendChild(this._start_rotate_image__imgo);
		this._start_rotate_image.ggId="start_rotate_image";
		this._start_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._start_rotate_image.ggVisible=true;
		this._start_rotate_image.className='ggskin ggskin_svg ';
		this._start_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._start_rotate_image.setAttribute('style',hs);
		this._start_rotate_image.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._start_rotate_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._start_rotate_image.onclick=function () {
			me.player.startAutorotate(0.1,5,1);
			me._start_rotate_image.style[domTransition]='none';
			me._start_rotate_image.style.visibility='hidden';
			me._start_rotate_image.ggVisible=false;
			me._stop_rotate_image.style[domTransition]='none';
			me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
			me._stop_rotate_image.ggVisible=true;
		}
		this._start_rotate_image.onmouseover=function () {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['start_rotate_image']=true;
		}
		this._start_rotate_image.onmouseout=function () {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['start_rotate_image']=false;
		}
		this._start_rotate_image.ontouchend=function () {
			me.elementMouseOver['start_rotate_image']=false;
		}
		this._start_rotate_image.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate0=document.createElement('div');
		this._tt_start_auto_rotate0__text=document.createElement('div');
		this._tt_start_auto_rotate0.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate0.ggTextDiv=this._tt_start_auto_rotate0__text;
		this._tt_start_auto_rotate0.ggId="tt_start_auto_rotate";
		this._tt_start_auto_rotate0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate0.ggVisible=false;
		this._tt_start_auto_rotate0.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate0.setAttribute('style',hs);
		this._tt_start_auto_rotate0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate0__text.setAttribute('style',hs);
		this._tt_start_auto_rotate0__text.innerHTML="\u0421\u0442\u0430\u0440\u0442 360";
		this._tt_start_auto_rotate0.appendChild(this._tt_start_auto_rotate0__text);
		me._tt_start_auto_rotate0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_start_auto_rotate0.ggCurrentLogicStateVisible = -1;
		this._tt_start_auto_rotate0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['start_rotate_image'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate0.style[domTransition]='';
				if (me._tt_start_auto_rotate0.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate0.style.visibility=(Number(me._tt_start_auto_rotate0.style.opacity)>0||!me._tt_start_auto_rotate0.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate0.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate0.style.visibility="hidden";
					me._tt_start_auto_rotate0.ggVisible=false;
				}
			}
		}
		this._tt_start_auto_rotate0.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate_white0=document.createElement('div');
		this._tt_start_auto_rotate_white0__text=document.createElement('div');
		this._tt_start_auto_rotate_white0.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate_white0.ggTextDiv=this._tt_start_auto_rotate_white0__text;
		this._tt_start_auto_rotate_white0.ggId="tt_start_auto_rotate_white";
		this._tt_start_auto_rotate_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate_white0.ggVisible=true;
		this._tt_start_auto_rotate_white0.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate_white0.setAttribute('style',hs);
		this._tt_start_auto_rotate_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate_white0__text.setAttribute('style',hs);
		this._tt_start_auto_rotate_white0__text.innerHTML="\u0421\u0442\u0430\u0440\u0442 360";
		this._tt_start_auto_rotate_white0.appendChild(this._tt_start_auto_rotate_white0__text);
		me._tt_start_auto_rotate_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_start_auto_rotate_white0.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate0.appendChild(this._tt_start_auto_rotate_white0);
		this._start_rotate_image.appendChild(this._tt_start_auto_rotate0);
		this._button_auto_rotate.appendChild(this._start_rotate_image);
		this.divSkin.appendChild(this._button_auto_rotate);
		this._button_1=document.createElement('div');
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.ggId="Button 1";
		this._button_1.ggLeft=-183;
		this._button_1.ggTop=-65;
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button ';
		this._button_1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		this._button_1.setAttribute('style',hs);
		this._button_1.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		me._button_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_1.onclick=function () {
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility=(Number(me._button_2.style.opacity)>0||!me._button_2.style.opacity)?'inherit':'hidden';
			me._button_2.ggVisible=true;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
		}
		this._button_1.onmouseover=function () {
			me.elementMouseOver['button_1']=true;
		}
		this._button_1.onmouseout=function () {
			me.elementMouseOver['button_1']=false;
		}
		this._button_1.ontouchend=function () {
			me.elementMouseOver['button_1']=false;
		}
		this._button_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_start_auto_rotate=document.createElement('div');
		this._tt_start_auto_rotate__text=document.createElement('div');
		this._tt_start_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate.ggTextDiv=this._tt_start_auto_rotate__text;
		this._tt_start_auto_rotate.ggId="tt_start_auto_rotate";
		this._tt_start_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate.ggVisible=false;
		this._tt_start_auto_rotate.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate.setAttribute('style',hs);
		this._tt_start_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate__text.setAttribute('style',hs);
		this._tt_start_auto_rotate__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate__text);
		me._tt_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_start_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_start_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_1'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate.style[domTransition]='';
				if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate.style.visibility=(Number(me._tt_start_auto_rotate.style.opacity)>0||!me._tt_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate.style.visibility="hidden";
					me._tt_start_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_start_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate_white=document.createElement('div');
		this._tt_start_auto_rotate_white__text=document.createElement('div');
		this._tt_start_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate_white.ggTextDiv=this._tt_start_auto_rotate_white__text;
		this._tt_start_auto_rotate_white.ggId="tt_start_auto_rotate_white";
		this._tt_start_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate_white.ggVisible=true;
		this._tt_start_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_start_auto_rotate_white.setAttribute('style',hs);
		this._tt_start_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_start_auto_rotate_white__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_start_auto_rotate_white.appendChild(this._tt_start_auto_rotate_white__text);
		me._tt_start_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_start_auto_rotate_white.ggUpdatePosition=function () {
		}
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate_white);
		this._button_1.appendChild(this._tt_start_auto_rotate);
		this.divSkin.appendChild(this._button_1);
		this._button_2=document.createElement('div');
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.ggId="Button 2";
		this._button_2.ggLeft=-183;
		this._button_2.ggTop=-65;
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=false;
		this._button_2.className='ggskin ggskin_button ';
		this._button_2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -183px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		this._button_2.setAttribute('style',hs);
		this._button_2.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		me._button_2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_2.onclick=function () {
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
			me._button_1.ggVisible=true;
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility='hidden';
			me._button_2.ggVisible=false;
		}
		this._button_2.onmouseover=function () {
			me.elementMouseOver['button_2']=true;
		}
		this._button_2.onmouseout=function () {
			me.elementMouseOver['button_2']=false;
		}
		this._button_2.ontouchend=function () {
			me.elementMouseOver['button_2']=false;
		}
		this._button_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_stop_auto_rotate=document.createElement('div');
		this._tt_stop_auto_rotate__text=document.createElement('div');
		this._tt_stop_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate.ggTextDiv=this._tt_stop_auto_rotate__text;
		this._tt_stop_auto_rotate.ggId="tt_stop_auto_rotate";
		this._tt_stop_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate.ggVisible=false;
		this._tt_stop_auto_rotate.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate.setAttribute('style',hs);
		this._tt_stop_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate__text);
		me._tt_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_stop_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_2'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate.style[domTransition]='';
				if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate.style.visibility=(Number(me._tt_stop_auto_rotate.style.opacity)>0||!me._tt_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate.style.visibility="hidden";
					me._tt_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_stop_auto_rotate.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate_white=document.createElement('div');
		this._tt_stop_auto_rotate_white__text=document.createElement('div');
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate_white.ggTextDiv=this._tt_stop_auto_rotate_white__text;
		this._tt_stop_auto_rotate_white.ggId="tt_stop_auto_rotate_white";
		this._tt_stop_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate_white.ggVisible=true;
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		this._tt_stop_auto_rotate_white.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u0435\u043d\u0442\u0443 \u0444\u043e\u0442\u043e";
		this._tt_stop_auto_rotate_white.appendChild(this._tt_stop_auto_rotate_white__text);
		me._tt_stop_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_stop_auto_rotate_white.ggUpdatePosition=function () {
		}
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate_white);
		this._button_2.appendChild(this._tt_stop_auto_rotate);
		this.divSkin.appendChild(this._button_2);
		this._dropdown_menu=document.createElement('div');
		this._dropdown_menu.ggId="Dropdown Menu";
		this._dropdown_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu.ggVisible=true;
		this._dropdown_menu.className='ggskin ggskin_container ';
		this._dropdown_menu.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 382px;';
		this._dropdown_menu.setAttribute('style',hs);
		this._dropdown_menu.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		me._dropdown_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._dropdown_menu.ggCurrentLogicStateVisible = -1;
		this._dropdown_menu.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().height <= 340)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_menu.style[domTransition]='';
				if (me._dropdown_menu.ggCurrentLogicStateVisible == 0) {
					me._dropdown_menu.style.visibility="hidden";
					me._dropdown_menu.ggVisible=false;
				}
				else {
					me._dropdown_menu.style.visibility=(Number(me._dropdown_menu.style.opacity)>0||!me._dropdown_menu.style.opacity)?'inherit':'hidden';
					me._dropdown_menu.ggVisible=true;
				}
			}
		}
		this._dropdown_menu.ggUpdatePosition=function () {
			me._dropdown_menu.ggUpdateConditionResize();
		}
		this._dropdown_background=document.createElement('div');
		this._dropdown_background.ggId="Dropdown Background";
		this._dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_background.ggVisible=false;
		this._dropdown_background.className='ggskin ggskin_rectangle ';
		this._dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 380px;';
		this._dropdown_background.setAttribute('style',hs);
		this._dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_background.onclick=function () {
			me._dropdown_menu_title_background.onclick();
		}
		this._dropdown_background.ggUpdatePosition=function () {
		}
		this._dropdown_scrollarea=document.createElement('div');
		this._dropdown_scrollarea__content=document.createElement('div');
		this._dropdown_scrollarea.ggContent=this._dropdown_scrollarea__content;
		this._dropdown_scrollarea.appendChild(this._dropdown_scrollarea__content);
		hs ='';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._dropdown_scrollarea__content.setAttribute('style',hs);
		this._dropdown_scrollarea.ggId="Dropdown Scrollarea";
		this._dropdown_scrollarea.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_scrollarea.ggVisible=true;
		this._dropdown_scrollarea.className='ggskin ggskin_scrollarea ';
		this._dropdown_scrollarea.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 115px;';
		hs+='left : 2px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 374px;';
		this._dropdown_scrollarea.setAttribute('style',hs);
		this._dropdown_scrollarea.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_scrollarea.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_scrollarea.ggUpdatePosition=function () {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._dropdown_cloner=document.createElement('div');
		this._dropdown_cloner.ggNumRepeat = 1;
		this._dropdown_cloner.ggWidth = 1149;
		this._dropdown_cloner.ggHeight = 25;
		this._dropdown_cloner.ggUpdating = false;
		this._dropdown_cloner.ggFilter = [];
		this._dropdown_cloner.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._dropdown_cloner.ggFilter = filter;
			} else {
				filter = me._dropdown_cloner.ggFilter;
			};
			if (me._dropdown_cloner.hasChildNodes() == true) {
				while (me._dropdown_cloner.firstChild) {
					me._dropdown_cloner.removeChild(me._dropdown_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._dropdown_cloner__node = document.createElement('div');
					me._dropdown_cloner.appendChild(me._dropdown_cloner__node);
					me._dropdown_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._dropdown_cloner.ggHeight) + 'px; left:' + (column * me._dropdown_cloner.ggWidth) + 'px; height: ' + me._dropdown_cloner.ggHeight + 'px; width: ' + me._dropdown_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me);
					me._dropdown_cloner__node.appendChild(inst.__div);
					me._dropdown_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._dropdown_cloner.ggUpdating = false;
		}
		this._dropdown_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				stack.push(me._dropdown_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._dropdown_cloner.ggTags = [];
		this._dropdown_cloner.ggId="Dropdown Cloner";
		this._dropdown_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_cloner.ggVisible=true;
		this._dropdown_cloner.className='ggskin ggskin_cloner ';
		this._dropdown_cloner.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1148px;';
		this._dropdown_cloner.setAttribute('style',hs);
		this._dropdown_cloner.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._dropdown_cloner.ggUpdatePosition=function () {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._dropdown_cloner.ggLastSize) || (me._dropdown_cloner.ggLastSize.w!=w) || (me._dropdown_cloner.ggLastSize.h!=h)) {
				me._dropdown_cloner.ggLastSize={ w:w, h:h };
				me._dropdown_cloner.ggUpdate();
			}
		}
		this._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		this._dropdown_scrollarea__content.appendChild(this._dropdown_cloner);
		this._dropdown_background.appendChild(this._dropdown_scrollarea);
		this._dropdown_menu.appendChild(this._dropdown_background);
		this._dropdown_menu_title_background=document.createElement('div');
		this._dropdown_menu_title_background.ggId="Dropdown Menu Title Background";
		this._dropdown_menu_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title_background.ggVisible=true;
		this._dropdown_menu_title_background.className='ggskin ggskin_rectangle ';
		this._dropdown_menu_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 380px;';
		this._dropdown_menu_title_background.setAttribute('style',hs);
		this._dropdown_menu_title_background.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title_background.onclick=function () {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((me._dropdown_background.ggVisible)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((me._dropdown_open.ggVisible)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((me._dropdown_close.ggVisible)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		this._dropdown_menu_title_background.onmouseover=function () {
			me.elementMouseOver['dropdown_menu_title_background']=true;
		}
		this._dropdown_menu_title_background.onmouseout=function () {
			me.elementMouseOver['dropdown_menu_title_background']=false;
		}
		this._dropdown_menu_title_background.ontouchend=function () {
			me.elementMouseOver['dropdown_menu_title_background']=false;
		}
		me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = -1;
		this._dropdown_menu_title_background.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_title_background'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color none';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		this._dropdown_menu_title_background.ggUpdatePosition=function () {
		}
		this._dropdown_menu_title=document.createElement('div');
		this._dropdown_menu_title__text=document.createElement('div');
		this._dropdown_menu_title.className='ggskin ggskin_textdiv';
		this._dropdown_menu_title.ggTextDiv=this._dropdown_menu_title__text;
		this._dropdown_menu_title.ggId="Dropdown Menu Title";
		this._dropdown_menu_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title.ggVisible=true;
		this._dropdown_menu_title.className='ggskin ggskin_text ';
		this._dropdown_menu_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 354px;';
		this._dropdown_menu_title.setAttribute('style',hs);
		this._dropdown_menu_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 354px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_title__text.setAttribute('style',hs);
		this._dropdown_menu_title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		this._dropdown_menu_title.appendChild(this._dropdown_menu_title__text);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title.ggUpdatePosition=function () {
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_menu_title);
		this._dropdown_open=document.createElement('div');
		this._dropdown_open__img=document.createElement('img');
		this._dropdown_open__img.className='ggskin ggskin_svg';
		this._dropdown_open__img.setAttribute('src',basePath + 'images/dropdown_open.svg');
		this._dropdown_open__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_open__img['ondragstart']=function() { return false; };
		this._dropdown_open.appendChild(this._dropdown_open__img);
		this._dropdown_open.ggId="Dropdown Open";
		this._dropdown_open.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_open.ggVisible=true;
		this._dropdown_open.className='ggskin ggskin_svg ';
		this._dropdown_open.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 267px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 202px;';
		this._dropdown_open.setAttribute('style',hs);
		this._dropdown_open.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_open.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_open.ggUpdatePosition=function () {
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_open);
		this._dropdown_close=document.createElement('div');
		this._dropdown_close__img=document.createElement('img');
		this._dropdown_close__img.className='ggskin ggskin_svg';
		this._dropdown_close__img.setAttribute('src',basePath + 'images/dropdown_close.svg');
		this._dropdown_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_close__img['ondragstart']=function() { return false; };
		this._dropdown_close.appendChild(this._dropdown_close__img);
		this._dropdown_close.ggId="Dropdown Close";
		this._dropdown_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_close.ggVisible=false;
		this._dropdown_close.className='ggskin ggskin_svg ';
		this._dropdown_close.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 267px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 202px;';
		this._dropdown_close.setAttribute('style',hs);
		this._dropdown_close.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_close.ggUpdatePosition=function () {
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_close);
		this._dropdown_menu.appendChild(this._dropdown_menu_title_background);
		this.divSkin.appendChild(this._dropdown_menu);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._dropdown_cloner.ggUpdate(me._dropdown_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._dropdown_cloner.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['button_image_right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseOver['stop_rotate_image']) {
		}
		me._tt_stop_auto_rotate0.ggUpdateConditionTimer();
		if (me.elementMouseOver['start_rotate_image']) {
		}
		me._tt_start_auto_rotate0.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_1']) {
		}
		me._tt_start_auto_rotate.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_2']) {
		}
		me._tt_stop_auto_rotate.ggUpdateConditionTimer();
		me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['dropdown_menu_title_background']) {
		}
		me._dropdown_menu_title_background.ggUpdateConditionTimer();
		me._dropdown_menu_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="\u0421\u0442\u0440\u0435\u043b\u043a\u0430";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 252px;';
			hs+='position : absolute;';
			hs+='top : 316px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"$cur");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._image_1=document.createElement('div');
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image ';
			this._image_1.ggType='image';
			hs ='';
			hs+='height : 51px;';
			hs+='left : -25px;';
			hs+='position : absolute;';
			hs+='top : -29px;';
			hs+='visibility : inherit;';
			hs+='width : 51px;';
			this._image_1.setAttribute('style',hs);
			this._image_1.style[domTransform + 'Origin']='50% 50%';
			this._image_1.style[domTransform]=parameterToTransform(this._image_1.ggParameter);
			me._image_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_1.onmouseover=function () {
				me.elementMouseOver['image_1']=true;
			}
			this._image_1.onmouseout=function () {
				me._text_1.style[domTransition]='none';
				me._text_1.style.visibility='hidden';
				me._text_1.ggVisible=false;
				me.elementMouseOver['image_1']=false;
			}
			this._image_1.ontouchend=function () {
				me.elementMouseOver['image_1']=false;
			}
			this._image_1.ggUpdatePosition=function () {
			}
			this._text_1=document.createElement('div');
			this._text_1__text=document.createElement('div');
			this._text_1.className='ggskin ggskin_textdiv';
			this._text_1.ggTextDiv=this._text_1__text;
			this._text_1.ggId="Text 1";
			this._text_1.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1 };
			this._text_1.ggVisible=false;
			this._text_1.className='ggskin ggskin_text ';
			this._text_1.ggType='text';
			hs ='';
			hs+='height : 37px;';
			hs+='left : -38px;';
			hs+='position : absolute;';
			hs+='top : -47px;';
			hs+='visibility : hidden;';
			hs+='width : 130px;';
			this._text_1.setAttribute('style',hs);
			this._text_1.style[domTransform + 'Origin']='50% 50%';
			this._text_1.style[domTransform]=parameterToTransform(this._text_1.ggParameter);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 130px;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			hs+='overflow-y: auto;';
			this._text_1__text.setAttribute('style',hs);
			this._text_1.ggUpdateText=function() {
				var hs=me.ggUserdata.title;
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._text_1.ggUpdateText();
			this._text_1.appendChild(this._text_1__text);
			me._text_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._text_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._text_1.ggUpdatePosition=function () {
			}
			this._image_1.appendChild(this._text_1);
			this.__div.appendChild(this._image_1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1']) {
					me._text_1.style[domTransition]='none';
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				me._text_1.ggUpdateText();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_dropdown_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 1149px; height: 25px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._dropdown_menu_text=document.createElement('div');
		this._dropdown_menu_text__text=document.createElement('div');
		this._dropdown_menu_text.className='ggskin ggskin_textdiv';
		this._dropdown_menu_text.ggTextDiv=this._dropdown_menu_text__text;
		this._dropdown_menu_text.ggId="Dropdown Menu Text";
		this._dropdown_menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_text.ggVisible=true;
		this._dropdown_menu_text.className='ggskin ggskin_text ';
		this._dropdown_menu_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 1111px;';
		this._dropdown_menu_text.setAttribute('style',hs);
		this._dropdown_menu_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1111px;';
		hs+='height: 20px;';
		hs+='background: #444444;';
		hs+='background: rgba(68,68,68,0.784314);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._dropdown_menu_text__text.setAttribute('style',hs);
		this._dropdown_menu_text__text.innerHTML=me.ggUserdata.title;
		this._dropdown_menu_text.appendChild(this._dropdown_menu_text__text);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_text.onclick=function () {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._dropdown_menu_text.onmouseover=function () {
			me.elementMouseOver['dropdown_menu_text']=true;
		}
		this._dropdown_menu_text.onmouseout=function () {
			me.elementMouseOver['dropdown_menu_text']=false;
		}
		this._dropdown_menu_text.ontouchend=function () {
			me.elementMouseOver['dropdown_menu_text']=false;
		}
		me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		this._dropdown_menu_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._dropdown_menu_text.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color none';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		this._dropdown_menu_text.ggUpdatePosition=function () {
		}
		this.__div.appendChild(this._dropdown_menu_text);
		this._dropdown_checkmark=document.createElement('div');
		this._dropdown_checkmark__img=document.createElement('img');
		this._dropdown_checkmark__img.className='ggskin ggskin_svg';
		this._dropdown_checkmark__img.setAttribute('src',basePath + 'images/dropdown_checkmark.svg');
		this._dropdown_checkmark__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_checkmark__img['ondragstart']=function() { return false; };
		this._dropdown_checkmark.appendChild(this._dropdown_checkmark__img);
		this._dropdown_checkmark.ggId="Dropdown Checkmark";
		this._dropdown_checkmark.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_checkmark.ggVisible=true;
		this._dropdown_checkmark.className='ggskin ggskin_svg ';
		this._dropdown_checkmark.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		this._dropdown_checkmark.setAttribute('style',hs);
		this._dropdown_checkmark.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_checkmark.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dropdown_checkmark.ggCurrentLogicStateAlpha = -1;
		this._dropdown_checkmark.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true) || 
				(me._dropdown_checkmark.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity none, visibility none';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		this._dropdown_checkmark.ggUpdatePosition=function () {
		}
		this.__div.appendChild(this._dropdown_checkmark);
	};
	this.addSkin();
};