player = new Player(0,0)
// player.square = new Square({width:40,height:40})
// player.square.position = player.pos
// Msquare = new Square({width:40,height:40})
// Msquare.position = input.mpos

new Square({pos:new Vector(200,150),width:50,height:50})
new Square({pos:new Vector(600,175),width:50,height:50})
// new Square({pos:new Vector(210,300),width:50,height:50})
//new Square({pos:new Vector(500,400),width:50,height:50})

//Triangel
let triA = new Vector(500,100)
let triB = new Vector(350,300)
let triC = new Vector(32,76)

for(i = 5; i--;) {
	new Enemy(Math.random()*window.innerWidth, Math.random()*window.innerHeight)
}

navDelay = new Cooldown()

bullets = []
health = 100

spawn_setTimer = 100
spawn_timer = 0
function SpawnEnemy() {
	if(spawn_timer>=0) return
	new Enemy(Math.random()*window.innerWidth, Math.random()*window.innerHeight)
	spawn_timer = spawn_setTimer
}

let a1 = new Vector(500,window.innerWidth)
let a2 = new Vector(500,0)
let a3 = input.mpos
let a4 = player.pos
let lpos
//console.log(lpos = Vector.Intersects(a1,a2,a3,a4))

gameid = requestAnimationFrame(Loop)
function Loop() {
	
	//Tick
	spawn_timer--
	Cooldown.TickAll()
	
	//User input
	let x = 0
	let y = 0
	if(input.A) x--
	if(input.D) x++
	if(input.W) y--
	if(input.S) y++
	if(x+y!=x*y) x*=0.707;y*=0.707
	player.pos.Add(x*2,y*2)
	
	if(input.LMB) {
		if(player.currentDelay<=0) {
			bullets.push({
				pos:new Vector(player.pos),
				dir:player.pos.Towards(input.mpos),
				speed:10,
				stopped:false,
				time:500
			})
			player.currentDelay = player.setDelay
		}
	}
	player.currentDelay--
	
	//Reset inputs
	for(const i in input.once) {
		input.once[i] = false
	}
	
	//Game events
	//SpawnEnemy()
	
	//Actions
	for(const entity of entities) {
		if(entity!=player) {
			if(entity.cooldown)
			//entity.target.Set(player.pos)
			//entity.Act()
			if(entity.mode=='target') {
				if(entity.target) {
					let tpos = entity.target
					entity.MoveTowards(tpos.x,tpos.y,entity.speed)
				}
			}
			if(entity.mode=='patrol') {
				if(entity.pos.Distance(player.pos)<200) {
					entity.target = player.pos
					entity.mode = 'target'
				}
			}
		}
	}
	
	//Collisions
	for(a = entities.length-1; a>=0; a--) {
		for(b = bullets.length-1; b>=0; b--) {
			let entity = entities[a]
			let bullet = bullets[b]
			if(entity==player) break
			if(entity.pos.Distance(bullet.pos)<20) {
				console.log('hit')
				entities.splice(a,1)
				bullets.splice(b,1)
				break
			}
		}
	}
	for(const o of GameObject.objects) {
		for(const bullet of bullets) {
			let oPos = o.position
			if(oPos.Distance(bullet.pos)<o.shortheight*1.4) {
				if(!bullet.stopped) {
					bullet.stopped = true
					// for(const edge of Navmesh.edges) {
						// let point = Vector.Intersects(new Vector(0,0),bullet.dir,edge.A,edge.B)
						// if(point.point.Distance(bullet.pos)<bullet.speed) {
							
						// }
					// }
				}
			}
		}
	}
	
	//Navigation Render
	if(navDelay.Get()<=0) {
		//navDelay.Set(100)
		//Navmesh.Compute(GameObject.objects)
	}
	
	//Draw
	Draw.Clear()
	DrawTriangle(triA,triB,triC)
	DrawBullets()
	DrawEntities()
	DrawUI()
	Draw.Line(a1,a2)
	Draw.Line(a3,a4)
	lpos = Vector.Intersects(a1,a2,a3,a4)
	let lpcol = lpos.hit ? 'blue' : 'red'
	Draw.Circle(lpos.point.x,lpos.point.y,5,lpcol)
	GameObject.DrawAll()
	Navmesh.Render(GameObject.objects)
	if(Vector.PointInTriangle(input.mpos,triA,triB,triC)) {
		Draw.Circle(input.mpos,5,'green')
	}
	else {
		Draw.Circle(input.mpos,5,'red')
	}
	for(const poly of Navmesh.polygons) {
		Draw.Line(poly.A,poly.B,'blue')
		Draw.Line(poly.B,poly.C,'blue')
		Draw.Line(poly.C,poly.A,'blue')
	}
	// Draw.Line(input.mpos,triA,'purple')
	// Draw.Line(input.mpos,triB,'purple')
	// Draw.Line(input.mpos,triC,'purple')
	//DrawNavmesh()
	
	//Anim
	gameid = requestAnimationFrame(Loop)
}

function DrawTriangle(p1,p2,p3) {
	Draw.Line(p1,p2,'green')
	Draw.Line(p2,p3,'green')
	Draw.Line(p3,p1,'green')
}

function DrawNavemesh() {
	Navmesh.DrawAll()
	Navmesh.Draw()
	for(const p of Navmesh.intersects) {
		Draw.Circle(p.x,p.y,5,'red')
	}
	for(const edge of Navmesh.edges) {
		let point = Vector.Intersects(edge.A,edge.B,a3,a4)
		if(point.hit==true) {
			let pos = point.point
			Draw.Line(edge.A,edge.B,'red')
			Draw.Circle(pos.x,pos.y,5,'red')
		}
	}
}

function Stop() {
	cancelAnimationFrame(gameid)
	console.log('Game paused')
}

function Start() {
	requestAnimationFrame(Loop)
	console.log('Game resumed.')
}

function DrawBullets() {
	for(i = bullets.length-1; i>=0; i--) {
		let bullet = bullets[i]
		if(!bullet.stopped) bullet.pos.Add(bullet.dir.ScaledBy(bullet.speed))
		bullet.time--
		if(bullet.time<=0) bullets.splice(i,1)
		if(!bullet.stopped) {
			Draw.Line(bullet.pos,bullet.pos.And(bullet.dir.ScaledBy(10)))
		}
		else {
			Draw.Line(bullet.pos,bullet.pos.And(bullet.dir.ScaledBy(4)))
		}
	}
}

function DrawEntities() {
	for(const entity of entities) {
		Draw.Circle(entity.pos.x, entity.pos.y,20,entity.color)
	}
}

function DrawUI() {
	Draw.Square(5,5,200,20)
	Draw.Square(6,6,health/100*198,18,'red')
	if(health>0) {
		health-=0.1
	}
}

function DrawWalls() {
	for(const obj of GameObject.objects) {
		Draw.Square(obj.position.x-obj.shortwidth,obj.position.y-obj.shortwidth,2*obj.shortwidth,2*obj.shortheight)
	}
}