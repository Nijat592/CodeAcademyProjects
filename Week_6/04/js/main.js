
var shape = function(borderRadius){
	this.borderRadius = borderRadius
}


var size = function(width, height){
	this.width = width,
	this.height = height
}


var color = function(backgroundColor){
	this.backgroundColor = backgroundColor
}


var common = function(backgroundColor,width,height,borderRadius){
	this.yaz = function(){
	document.write("<div style='width:"+this.width+"px;height:"+this.height+"px; border-radius:"+this.borderRadius+"px;background-color:"+this.backgroundColor+"'></div>");
	}

}

size.prototype=new shape(70);
color.prototype=new size(400,300);
common.prototype=new color("#0080ff");


var umumi = new common();
umumi.yaz();




