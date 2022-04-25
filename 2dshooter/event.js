class Timer {
	static listeners = []
	Add(value, callback) {
		listeners.push({time:value,call:callback})
	}
	Tick() {
		for(i = listeners.length-1; i>=0; i--) {
			listeners[i].time--
			if(listeners[i].time<=0) {
				listeners[i].call()
				listeners.splice(i,1)
			}
		}
	}
}