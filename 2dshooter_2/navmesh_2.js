class Navmesh {
	static lines = []
	static corners = []
	static polygons = []
	static Render(gameobjects) {
		let corners = []
		let lines = []
		let intersects = []
		let removed = []
		
		//Corners of map
		corners.push(new Vector(5,5))
		corners.push(new Vector(window.innerWidth-5,5))
		corners.push(new Vector(window.innerWidth-5,window.innerHeight-5))
		corners.push(new Vector(5,window.innerHeight-5))
		
		//Corners of all objects
		for(const gameobject of gameobjects) {
			let pos = gameobject.position
			let h = gameobject.shortheight + 5
			let w = gameobject.shortwidth + 5
			corners.push(pos.And(-h,-w))
			corners.push(pos.And(h,-w))
			corners.push(pos.And(h,w))
			corners.push(pos.And(-h,w))
		}
		
		//Generating polygons
		let polygons = []
		let A,B,C,p,flag
		for(let a = 0; a < corners.length; a++) {
			A = corners[a]
			for(let b = a+1; b < corners.length; b++) {
				B = corners[b]
				for(let c = b+1; c < corners.length; c++) {
					C = corners[c]
					flag = true
					for(let x = c+1; x < corners.length; x++) {
						p = corners[x]
						if(Vector.PointInTriangle(p,A,B,C)) {
							flag = false
							break
						}
					}
					if(flag) {
						// let lines = [{A:A,B:B},{A:B,B:C},{A:C,B:A}]
						// for(const line of lines) {
							// for(const poly of polygons) {
								// let arg1 = Vector.Intersects(line.A,line.B,poly.A,poly.B).hit
								// let arg2 = Vector.Intersects(line.A,line.B,poly.B,poly.C).hit
								// let arg3 = Vector.Intersects(line.A,line.B,poly.C,poly.A).hit
								// if(arg1 || arg2 || arg3) {
									// flag = false
									// break
								// }
							// }
							// if(!flag) break
						// }
						polygons.push({A:A,B:B,C:C})
					}
				}
			}
		}
		Navmesh.polygons = polygons
		
		for(const line of lines) {
			Draw.Line(line.A,line.B,'blue')
		}
		for(const line of removed) {
			//Draw.Line(line.A,line.B,'red')
		}
		for(const corner of intersects) {
			Draw.Circle(corner.x,corner.y,5)
		}
		
		Navmesh.lines = lines
		Navmesh.corners = corners
	}
}