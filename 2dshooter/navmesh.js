class Navmesh {
	static lines = []
	static edges = []
	static polys = []
	static nodes = []
	static triggered = false
	
	static mask = [
		new Vector(5,5),
		new Vector(window.innerWidth-5,5),
		new Vector(window.innerWidth-5,window.innerHeight-5),
		new Vector(5,window.innerHeight-5)
	]
	
	//debug lines
	static green = []
	static red = []
	static intersects = []
	
	static Compute(gameobjects) {
		Navmesh.lines = []
		Navmesh.edges = []
		Navmesh.red = []
		let corners = []
		let inner = []
		let outer = []
		let lines = Navmesh.lines
		for(const gameobject of gameobjects) {
			let center = gameobject.position
			let w = gameobject.shortwidth
			let h = gameobject.shortheight
			let innerCorners = [
				new Vector(center.x - w,center.y - h),
				new Vector(center.x + w,center.y - h),
				new Vector(center.x + w,center.y + h),
				new Vector(center.x - w,center.y + h),
			]
			w = gameobject.shortwidth +5
			h = gameobject.shortheight +5
			let outerCorners = [
				new Vector(center.x - w,center.y - h),
				new Vector(center.x + w,center.y - h),
				new Vector(center.x + w,center.y + h),
				new Vector(center.x - w,center.y + h),
			]
			corners.push(outerCorners[0])
			corners.push(outerCorners[1])
			corners.push(outerCorners[2])
			corners.push(outerCorners[3])
			
			inner.push(innerCorners)
			outer.push(outerCorners)
		}
		for(const corner of inner) {
			Navmesh.edges.push({A:corner[0],B:corner[1],color:'red'})
			Navmesh.edges.push({A:corner[1],B:corner[2],color:'blue'})
			Navmesh.edges.push({A:corner[2],B:corner[3],color:'green'})
			Navmesh.edges.push({A:corner[3],B:corner[0],color:'yellow'})
		}
		corners.push(Navmesh.mask[0])
		corners.push(Navmesh.mask[1])
		corners.push(Navmesh.mask[2])
		corners.push(Navmesh.mask[3])
		for(a = 0; a < corners.length; a++) {
			for(b = a+1; b < corners.length; b++) {
				let posA = corners[a]
				let posB = corners[b]
				lines.push({A:posA,B:posB})
			}
		}
		for(const edge of Navmesh.mask) {
			for(const corner of corners) {
				lines.push({A:edge,B:corner})
			}
		}
		for(i = lines.length-1; i>=0; i--) {
			let line = lines[i]
			let posA = line.A
			let posB = line.B
			Navmesh.red = []
			Navmesh.green = []
			for(const edge of Navmesh.edges) {
				let point = Vector.Intersects(posA,posB,edge.A,edge.B)
				if(point.hit) {
					Navmesh.lines.splice(i, 1)
					break
				}
			}
		}
		for(a = lines.length - 1; a>=0; a--) {
			for(b = a-1; b>=0; b--) {
				let blue = lines[a]
				let red = lines[b]
				if(red==undefined) break
				if(blue==undefined) break
				if(blue.A.Equals(red.A)) continue
				if(blue.A.Equals(red.B)) continue
				if(blue.B.Equals(red.B)) continue
				let point = Vector.Intersects(blue.A,blue.B,red.A,red.B)
				if(point.hit) {
					if(blue.A.Distance(blue.B)<red.A.Distance(red.B)) {
						Navmesh.lines.splice(b, 1)
					}
					else {
						Navmesh.lines.splice(a, 1)
						break
					}
				}
			}
		}
		let nodes = []
		let liners = []
		for(const line of lines) {
			liners.push({touched:false,line:line})
		}
		
		for(const corner of corners) {
			let node = {
				pos:corner,
				active:false,
				friends:[],
			}
			for(const liner of liners) {
				let line = liner.line
				if(corner == line.A) node.friends.push(liner)
				if(corner == line.B) node.friends.push(liner)
			}
			nodes.push(node)
		}
		if(!Navmesh.triggered) {
			Navmesh.nodes = nodes
			Navmesh.triggered = true
			for(const node of nodes) {
				if(!node.active) {
					for(const friend of node.friends) {
						for(const friend of node.friends) {}
					}
					for(a = 0; a<node.friends.length; a++) {
						for(b = 0; b<node.friends.length; b++) {
							let nodeA = node.friends[a]
							let nodeB = node.friends[b]
							if(!nodeA.active && !nodeB.active) {
								nodeA.active = true
								nodeB.active = true
								Navmesh.polys.push([node,nodeA,nodeB])
							}
							
						}
					}
					node.active = true
				}
			}
		}
	}
	static Draw() {
		for(const pos of Navmesh.lines) {
			Draw.Line(pos.A,pos.B, 'blue')
		}
		for(const pos of Navmesh.green) {
			Draw.Line(pos.A,pos.B, 'darkgreen')
		}
		for(const pos of Navmesh.red) {
			Draw.Line(pos.A,pos.B, 'red')
		}
		for(const edge of Navmesh.edges) {
			Draw.Line(edge.A,edge.B,edge.color)
		}
	}
}