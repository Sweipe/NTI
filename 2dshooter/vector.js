class Vector {
	x
	y
	constructor(x,y) {
		this.Set(x,y)
		return this
	}
	Set(x,y) {
		let arg = typeof x != 'object'
		this.y = arg ? y : x.y
		this.x = arg ? x : x.x
		return this
	}
	Add(x,y) {
		let arg = typeof x != 'object'
		this.y += arg ? y : x.y
		this.x += arg ? x : x.x
		return this
	}
	Subtract(x,y) {
		let arg = typeof x != 'object'
		this.y -= arg ? y : x.y
		this.x -= arg ? x : x.x
		return this
	}
	Multiply(x) {
		this.x*=x
		this.y*=x
		return this
	}
	ScaledBy(x) {
		return new Vector(this.x*x,this.y*x)
	}
	Distance(x,y) {
		let target = new Vector(x,y)
		x = target.x - this.x
		y = target.y - this.y
		return Math.sqrt(x*x+y*y)
	}
	Towards(x,y) {
		let target = new Vector(x,y)
		x = target.x - this.x
		y = target.y - this.y
		let unit = Math.sqrt(x*x+y*y)
		return new Vector(x/unit,y/unit)
	}
	And(x,y) {
		if(typeof x=='object') {y=x.y; x=x.x}
		return new Vector(this.x+x,this.y+y)
	}
}