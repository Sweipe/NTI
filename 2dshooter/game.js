// player = {
	// pos:new Vector(0,0),
	// draw:(pos)=>{Draw.Circle(pos.x,pos.y,20)},
	// currentDelay: 0,
	// setDelay: 10,
// }
player = new Player(0,0)

new Enemy(Math.random()*window.innerWidth, Math.random()*window.innerHeight)
new Enemy(Math.random()*window.innerWidth, Math.random()*window.innerHeight)
new Enemy(Math.random()*window.innerWidth, Math.random()*window.innerHeight)

bullets = []

spawn_setTimer = 100
spawn_timer = 0
function SpawnEnemy() {
	if(spawn_timer>=0) return
	new Enemy(Math.random()*window.innerWidth, Math.random()*window.innerHeight)
	spawn_timer = spawn_setTimer
}

gameid = requestAnimationFrame(Loop)
function Loop() {
	
	//Tick
	spawn_timer--
	
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
				time:500
			})
			player.currentDelay = player.setDelay
		}
	}
	player.currentDelay--
	
	//Game events
	SpawnEnemy()
	
	
	
	//Actions
	for(const entity of entities) {
		if(entity!=player) {
			//entity.target.Set(player.pos)
			entity.Act()
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
	
	//Draw
	Draw.Clear()
	//player.draw(player.pos)
	DrawBullets()
	DrawEntities()
	
	//Anim
	gameid = requestAnimationFrame(Loop)
}

function DrawBullets() {
	for(i = bullets.length-1; i>=0; i--) {
		let bullet = bullets[i]
		bullet.pos.Add(bullet.dir.ScaledBy(10))
		bullet.time--
		if(bullet.time<=0) bullets.splice(i,1)
		Draw.Line(bullet.pos,bullet.pos.And(bullet.dir.ScaledBy(10)))
	}
}

function DrawEntities() {
	for(const entity of entities) {
		Draw.Circle(entity.pos.x,entity.pos.y,20,entity.color)
	}
}