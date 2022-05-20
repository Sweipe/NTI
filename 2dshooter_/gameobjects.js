class GameObject {
	static objects = []
	position = new Vector(0,0)
	constructor(args) {
		if(args && args.pos) this.position.Set(args.pos)
		GameObject.objects.push(this)
	}
	
	DestroySelf() {
		let index = GameObject.indexOf(this)
		if(i>-1)GameObject.objects.splice(index, 1)
	}
}

class Circle extends GameObject {
	type = 'circle'
	radius = 50
	constructor(args) {
		super(args)
		if(!args) return
		if(args.radius) this.radius = args.radius
	}
}

class Square extends GameObject {
	type = 'square'
	rotation = 0
	shortwidth = 100
	shortheight = 100
	constructor(args) {
		super(args)
		if(!args) return
		if(args.width) this.shortwidth = args.width/2
		if(args.height) this.shortheight = args.height/2
		if(args.rotation) this.rotation = args.rotation
	}
}