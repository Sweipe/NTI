canvas = document.getElementById('canvas')
c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

Draw = {
	Circle: (x,y,r,color) => {
		if(typeof x=='object') {
			color = r
			r = y
			y = x.y
			x = x.x
		}
		c.beginPath()
		c.arc(x,y,r,0,2*Math.PI)
		c.strokeStyle = color ? color : 'black'
		c.stroke()
	},
	Square: (x,y,w,h,color) => {
		c.beginPath()
		c.rect(x,y,w,h)
		c.strokeStyle = color ? color : 'black'
		c.stroke()
	},
	Line: (x,y,x2,y2,color)=> {
		if(typeof x=='object') {
			color = x2
			y2=y.y
			x2=y.x
			y=x.y
			x=x.x
		}
		c.beginPath()
		c.strokeStyle = color ? color : 'black'
		c.moveTo(x,y)
		c.lineTo(x2,y2)
		c.stroke()
	},
	Clear: ()=>{
		c.clearRect(0,0,window.innerWidth,window.innerHeight)
	}
}