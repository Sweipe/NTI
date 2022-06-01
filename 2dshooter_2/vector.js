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
	static Distance(a,b) {
		return a.Distance(b)
	}
	static Intersects(A1,A2,B1,B2) {
		
		// if(A1.Equals(B1)) return {point:new Vector(A1),hit:false}
		// if(A1.Equals(B2)) return {point:new Vector(A1),hit:false}
		// if(A2.Equals(B1)) return {point:new Vector(A2),hit:false}
		// if(A2.Equals(B2)) return {point:new Vector(A2),hit:false}
		// if(B1.Equals(B2)) return {point:new Vector(B2),hit:false}
		
		let arg1,arg2,arg3,arg4,point
		
		let yA = (A1.y-A2.y)
		let xA = (A1.x-A2.x)
		
		let yB = (B1.y-B2.y)
		let xB = (B1.x-B2.x)
		
		if(xA==0 && yA==0) return {point:new Vector(0,0),hit:false}
		if(xA==0 && xB==0) return {point:new Vector(0,0),hit:false}
		if(yA==0 && yB==0) return {point:new Vector(0,0),hit:false}
		if(xB==0 && yB==0) return {point:new Vector(0,0),hit:false}
		
		let x,y
		if(xA!=0&&xB!=0) {
			let kA = yA/xA
			let mA = A1.y-(kA*A1.x)
			
			let kB = yB/xB
			let mB = B1.y-(kB*B1.x)
			
			x = (mB-mA)/(kA-kB)
			y = kA*x+mA
		}
		else {
			let kA = xA/yA
			let mA = A1.x-(kA*A1.y)
			
			let kB = xB/yB
			let mB = B1.x-(kB*B1.y)
			
			y = (mB-mA)/(kA-kB)
			x = kA*y+mA
		}
		
		
		
		point = new Vector(x,y)
		
		arg1 = A1.x<point.x == point.x<A2.x
		arg2 = A1.y<point.y == point.y<A2.y
		arg3 = B1.x<point.x == point.x<B2.x
		arg4 = B1.y<point.y == point.y<B2.y
		
		if(arg1 && arg2 && arg3 && arg4) {
			return {point:point,hit:true}
		} else {
			return {point:point,hit:false}
		}
	}
	
	static PointInTriangle(p,a,b,c) {
		let w1, w2, up, down
		up = a.x*(c.y-a.y)+(p.y-a.y)*(c.x-a.x)-p.x*(c.y-a.y)
		down = (b.y-a.y)*(c.x-a.x)-(b.x-a.x)*(c.y-a.y)
		w1 = up/down
		w2 = (p.y-a.y-w1*(b.y-a.y))/(c.y-a.y)
		// console.log('////////////')
		// console.log(w1)
		// console.log(w2)
		if(w1>=0 && w2>=0 && w1+w2<=1) return true
		else return false
	}
}