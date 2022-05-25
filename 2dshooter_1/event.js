class Cooldown {
	tick = 0
	static listeners = []
	constructor() {
		Cooldown.listeners.push(this)
	}
	static TickAll() {
		for(const listener of Cooldown.listeners) {
			if(listener.tick>0) {
				listener.tick-=1
			}
		}
	}
	Get() {
		return this.tick
	}
	Set(x) {
		this.tick = x
	}
	Dismantle() {
		c = Cooldown
		c.splice(c.indexOf(this))
	}
}