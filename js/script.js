'use strict';

var drawShape = function(){
	var stage = new createjs.Stage('myCanvas');
	var shape = new createjs.Shape();
	shape.graphics.beginFill('blue').drawCircle(20,20,10,10);
	stage.addChild(shape);
	stage.update();
}
var drawBitmap = function(){
	var stage = new createjs.Stage('myCanvas');
	var image = new createjs.Bitmap("./assets/spritesheet_grant.png");
	image.scaleX = image.scaleY = 0.4;
	image.shadow = new createjs.Shadow("#FCFCFC",5,5,10);
	stage.addChild(image);
	createjs.Ticker.addEventListener("tick", handleTick);
	function handleTick(event){
		image.x += 1;
		image.y += 1;
		stage.update();
	}
}
var animate = function(){
	var stage = new createjs.Stage('myCanvas');
	var styleSheet = new createjs.SpriteSheet({
		images : ["./assets/MonsterARun.png"],
		frames : {width: 64, height : 64, regX : 0, regY : 0},
		animations : {
			idle : [0, 9]
		}
	});
	var spriteIdle = new createjs.Sprite(styleSheet, "idle");
	spriteIdle.scaleX = spriteIdle.scaleY = 2;
	spriteIdle.x = 0;
	spriteIdle.y = 0;
	stage.addChild(spriteIdle);
	createjs.Ticker.addEventListener("tick", handleTick);
	function handleTick(event){
		stage.update();
	}
}

console.log('link script.js');

animate();