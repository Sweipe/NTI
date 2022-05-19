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
	Equals(x,y) {
		let target = new Vector(x,y)
		if(this.x==target.x&&this.y==target.y) return true
		return false
	}
	static Intersects(A1,A2,B1,B2) {
		let arg1,arg2,arg3,arg4,point
		
		let yA = (A1.y-A2.y)
		let xA = (A1.x-A2.x)
		
		let yB = (B1.y-B2.y)
		let xB = (B1.x-B2.x)
		
		let kA = true ? yA/xA : yA
		let mA = A1.y-(kA*A1.x)
		
		let kB = true ? yB/xB : yB
		let mB = B1.y-(kB*B1.x)
		
		let x = (mB-mA)/(kA-kB)
		let y = kA*x+mA
		
		//if(xA==0 && xB==0) console.log('Invalid intersection with dual zeroes')
		if(xA==0) {
			point = new Vector(A1.x,kB*A1.x+mB)
		}
		else if(xB==0) {
			point = new Vector(B1.x,kA*B1.x+mA)
		}
		else {
			point = new Vector(x,y)
		}
		
		arg1 = A1.x<=point.x == point.x<=A2.x
		arg2 = A1.y<=point.y == point.y<=A2.y
		arg3 = B1.x<=point.x == point.x<=B2.x
		arg4 = B1.y<=point.y == point.y<=B2.y
		
		if(arg1 && arg2 && arg3 && arg4) {
			return {point:point,hit:true}
		} else {
			return {point:point,hit:false}
		}
		
	}
}