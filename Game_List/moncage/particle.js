function Particle(x, y, hue, firework){
	this.pos = createVector(x, y);
	//这个可以使每个firework独立出来
	this.firework = firework;
	//粒子寿命
	this.lifespan = 255;
	this.hue = hue;
	
	//炸开前
	if(this.firework){
		//烟花初速度，影响烟花所能到达的最大高度
		this.vel = createVector(0, random(-17,-8));
	}
	//炸开
	else{
		//圆形
		this.vel = p5.Vector.random2D();
		//随机加速，会影响最后炸开的大小
		this.vel.mult(random(2, 17));
	}
	
	
	//加速度
	this.acc = createVector(0, 0);
	
	//施力，改变加速度
	this.applyForce = function(force){
		this.acc.add(force);
	}
	
	this.update = function(){
		//如果爆开了，减慢速度
		if(!this.firework){
			this.vel.mult(0.9);
			this.lifespan -= 4;
		}
		//未爆开前的速度，位置，加速度
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	
	//粒子是否完全淡出
	this.done = function(){
		if (this.lifespan < 0){
			return true;
		}
		else{
			return false;
		}
	}
	
	this.show = function(){
		colorMode(HSB);
		//如果炸开
		if(!this.firework){
			//炸开前粒子大小
			strokeWeight(2);
			//粒子颜色，随着的的减少，亮度降低
			stroke(hue, 255, this.lifespan);
		}
		else{
			//炸开前粒子大小
			strokeWeight(3.5);
			stroke(hue, 255, 255);
		}
		point(this.pos.x, this.pos.y);
	}
}