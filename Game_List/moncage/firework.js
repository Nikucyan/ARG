function Firework(){
	
	//色度。在这个位置，是因为得在创造烟花之前定色相。否则发射出来都是白色的，而粒子是彩色的
	this.hue = random(255);
	//新的烟花
	this.firework = new Particle(random(width), height, this.hue, true);
	//未爆炸
	this.exploded = false;
	//炸开后的每个粒子
	this.particles = [];
	
	
	this.done = function(){
		//如果爆炸了，粒子列表里元素个数为0
		if (this.exploded && this.particles.length == 0){
			return true;
		}
		else{
			return false;
		}
	}
	
	this.update = function(){
		//如果未炸开
		if (!this.exploded){
			this.firework.applyForce(gravity);
			this.firework.update();
			
			//最高点
			if (this.firework.vel.y >= 0){
				//炸开
				this.exploded = true;
				this.explode();
			}
		}
		//炸开后的每个粒子
		for (var i = this.particles.length-1; i >= 0; i--){
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			//如果粒子完全淡出，则在列表里删去粒子
			if (this.particles[i].done()){
				this.particles.splice(i, 1);
			}
		}
	}
	
	
	//炸开
	this.explode = function(){
		for (var i = 0; i < 100; i++){
			//下面这个函数需要输入3个变量，但是在JS里，不输入的话undefine可视为false
			var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false);
			this.particles.push(p);
		}
	}
	
	
	this.show = function(){
		if (!this.exploded){
			this.firework.show();
		}
		//下面写i<this.particles.length而不是100，是因为要爆炸后才有100，一开始就100，show会变得没有定义
		for (var i = 0; i < this.particles.length; i++){
			this.particles[i].show();
		}
	}		
}