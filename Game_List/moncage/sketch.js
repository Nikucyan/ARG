var fireworks = [];
var gravity;

function setup(){
	let cnv = createCanvas(1536, 864);
	//画布绘制时，默认左边和上边会有留白，需要调整
	cnv.position(0,0);
	colorMode(HSB);
	gravity = createVector(0,0.2);
	//绘制设定，包括文字的描边以及烟花的绘制
	//stroke(255);
	//strokeWeight(4);
	//画布背景颜色，这个要写，不然一开始是从白屏再变成黑屏.背景的灰度值，越小越黑。
	background(0);
}

function draw(){
	
	//文字的设定
	//颜色模式
	colorMode(HSB);
	//字体大小
	textSize(100);
	//填充颜色
	fill(0,0,0);
	//不加这个的话，字体描边颜色会被烟花颜色影响，不过有一说一，有点炫
	//noStroke();
	//文字内容和位置
	text('祝笼中窥梦大卖',250,380);
	
	
	
	colorMode(RGB);
	//可变梯度大小？范围越大，残留越不明显.HSB
	background(0, 0, 0, 30);
	//发射烟花的概率
	if (random(1) < 0.05){
	fireworks.push(new Firework());	
	}
	for (var i = fireworks.length-1; i >= 0; i--){
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()){
			fireworks.splice(i, 1);
		}
	}
	//看目前所含的粒子数
	//console.log(fireworks.length);
}