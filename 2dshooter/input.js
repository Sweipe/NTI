var input = {
	A:false,
	W:false,
	S:false,
	D:false,
	LMB:false,
	mpos:new Vector(0,0),
}

document.addEventListener('keydown' ,e=>{
	let key = e.key.toUpperCase()
	if(input[key]!=undefined) input[key]=true
})

document.addEventListener('keyup' ,e=>{
	let key = e.key.toUpperCase()
	if(input[key]!=undefined) input[key]=false
})

document.addEventListener('mousedown', e=>{
	if(e.button==0) input.LMB = true
})

document.addEventListener('mouseup', e=>{
	if(e.button==0) input.LMB = false
})

document.addEventListener('mousemove', e=>{
	input.mpos.Set(e.clientX,e.clientY)
})