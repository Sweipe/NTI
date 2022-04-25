entities = []

class Entity {
	color='black'
	constructor(x,y,args) {
		this.pos = new Vector(x,y)
		entities.push(this)
	}
}

class Player extends Entity {
	color='lime'
	currentDelay=0
	setDelay=10
	constructor(x,y) {
		super(x,y)
		// player = {
			// pos:new Vector(0,0),
			// draw:(pos)=>{Draw.Circle(pos.x,pos.y,20)},
			// currentDelay: 0,
			// setDelay: 10,
		// }
	}
}

class Enemy extends Entity {
	mode = 'patrol'
	color='red'
	dir = new Vector(0,0)
	target = null
	speed = 1
	constructor(x,y) {
		super(x,y)
	}
	Act() {
		if(!this.target) return
		if(this.pos.Distance(this.target)>this.speed) {
			let dir = this.pos.Towards(this.target)
			this.pos.Add(dir.Multiply(this.speed))
		}
		else {
			this.pos.Set(target)
			this.target = null
			if(this.mode=='patrol'){
				let angle = Math.random*Math.PI*2
				let x = Math.cos(angle)
				let y = Math.sin(angle)
			}
		}
	}
}