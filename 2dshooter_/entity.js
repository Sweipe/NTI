entities = []

class Entity {
	color='black'
	faction='neutral'
	mode="idle"
	constructor(x,y,args) {
		this.pos = new Vector(x,y)
		entities.push(this)
	}
	MoveTowards(x,y,step=1) {
		let target = new Vector(x,y)
		if(this.pos.Distance(target)<step) {
			this.pos.Set(target)
		}
		else {
			let dir = this.pos.Towards(target).Multiply(step)
			this.pos.Add(dir)
		}
	}
	Target(obj) {
		
	}
}

class Player extends Entity {
	color='lime'
	currentDelay=0
	setDelay=10
	constructor(x,y) {
		super(x,y)
	}
}

class Enemy extends Entity {
	mode = 'patrol'
	color='red'
	dir = new Vector(0,0)
	target = null
	speed = 1
	faction = 'enemy'
	
	action_setDelay = 1
	action_currentDelay = 0
	
	attack_setDelay = 1
	attack_currentDelay = 0
	
	// delays = {
		// attack: new Delay(),
		// action: new Delay(),
	// }
	
	constructor(x,y) {
		super(x,y)
	}
}