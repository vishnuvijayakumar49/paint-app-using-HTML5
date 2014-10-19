

document.getElementById("pencil").onclick=function() {
	var canvas = document.querySelector('#mycanvas');
	var ctx=canvas.getContext('2d');
	var sketch = document.querySelector('#canvasDiv');
	var sketch_style = getComputedStyle(sketch);
	
	var tmp_canvas = document.createElement('canvas');
	var tmp_ctx = tmp_canvas.getContext('2d');
	tmp_canvas.id = 'tmp_canvas';
	tmp_canvas.width = canvas.width;
	tmp_canvas.height = canvas.height;
	
	sketch.appendChild(tmp_canvas);
	
	colors(tmp_ctx);
	linewidth(tmp_ctx)

	
	var mouse = {x: 0, y: 0};
	tmp_canvas.addEventListener('mousemove', function(e) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	}, false);
	
	 
	tmp_canvas.addEventListener('mousedown', function(e) {
			tmp_ctx.beginPath();
			tmp_ctx.moveTo(mouse.x, mouse.y);
	 		tmp_canvas.addEventListener('mousemove', onPaint, false);
	}, false);
	 
	tmp_canvas.addEventListener('mouseup', function() {
		tmp_canvas.removeEventListener('mousemove', onPaint, false);
		ctx.drawImage(tmp_canvas, 0, 0);
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height)
	}, false);
	 
	var onPaint = function() {
			tmp_ctx.lineTo(mouse.x, mouse.y);
			tmp_ctx.stroke();
	};
	
}

document.getElementById("circle").onclick=function() {
	
	var canvas = document.querySelector('#mycanvas');
	var ctx = canvas.getContext('2d');
	
	var sketch = document.querySelector('#canvasDiv');
	var sketch_style = getComputedStyle(sketch);
	
	var tmp_canvas = document.createElement('canvas');
	var tmp_ctx = tmp_canvas.getContext('2d');
	tmp_canvas.id = 'tmp_canvas';
	tmp_canvas.width = canvas.width;
	tmp_canvas.height = canvas.height;
	
	sketch.appendChild(tmp_canvas);
	
	colors(tmp_ctx);
	linewidth(tmp_ctx)
	
	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	
	
	
	
	tmp_canvas.addEventListener('mousemove', function(e) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	}, false);
	
	
	
	tmp_canvas.addEventListener('mousedown', function(e) {
		tmp_canvas.addEventListener('mousemove', onPaint, false);
		
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;
		onPaint();
	}, false);
	
	tmp_canvas.addEventListener('mouseup', function() {
		tmp_canvas.removeEventListener('mousemove', onPaint, false);
		ctx.drawImage(tmp_canvas, 0, 0);
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
		
	}, false);
	
	var onPaint = function() {
		
		
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
		
		var radius = Math.max(
			Math.abs(mouse.x - start_mouse.x),
			Math.abs(mouse.y - start_mouse.y)
		) / 2;
		tmp_ctx.beginPath();
		tmp_ctx.arc(start_mouse.x,start_mouse.y, radius, 0, Math.PI*2, false);
		tmp_ctx.stroke();
		
		
	};
	
}

document.getElementById("clear").onclick=function(){
		 ctx=document.getElementById("mycanvas").getContext("2d");
 		 ctx.fillStyle="white";
		 ctx.fillRect(0, 0, 900, 500);  }

document.getElementById("rectangle").onclick=function(){
	
	var canvas = document.querySelector('#mycanvas');
	var ctx = canvas.getContext('2d');
	
	var sketch = document.querySelector('#canvasDiv');
	var sketch_style = getComputedStyle(sketch);
	
	
	
	var tmp_canvas = document.createElement('canvas');
	var tmp_ctx = tmp_canvas.getContext('2d');
	tmp_canvas.id = 'tmp_canvas';
	tmp_canvas.width = canvas.width;
	tmp_canvas.height = canvas.height;
	
	sketch.appendChild(tmp_canvas);
	
	colors(tmp_ctx);
	linewidth(tmp_ctx)
	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};
	
	
	tmp_canvas.addEventListener('mousemove', function(e) {
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	}, false);
	

	
	tmp_canvas.addEventListener('mousedown', function(e) {
		tmp_canvas.addEventListener('mousemove', onPaint, false);
		
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;
		
		onPaint();
	}, false);
	
	tmp_canvas.addEventListener('mouseup', function() {
		tmp_canvas.removeEventListener('mousemove', onPaint, false);
		
		
		ctx.drawImage(tmp_canvas, 0, 0);
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
		
	}, false);
	
	var onPaint = function() {
		
		
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
		
		var x = Math.min(mouse.x, start_mouse.x);
		var y = Math.min(mouse.y, start_mouse.y);
		var width = Math.abs(mouse.x - start_mouse.x);
		var height = Math.abs(mouse.y - start_mouse.y);
		tmp_ctx.strokeRect(x, y, width, height);
		
	};
	
}

document.getElementById("submit").onclick=function(){
	alert(paint_list)
}

function colors(x){

	document.getElementById("blue").onclick=function(){
	x.strokeStyle='blue';  }
	
	document.getElementById("red").onclick=function(){
	x.strokeStyle='red';   }

	document.getElementById("green").onclick=function(){
	x.strokeStyle='green'; }

	document.getElementById("eraser").onclick=function(){
	x.strokeStyle='white'; }
	}

function linewidth(x){
	document.getElementById("1px").onclick=function(){
	x.lineWidth = 1; }
	
	document.getElementById("3px").onclick=function(){
	x.lineWidth = 3; }

	document.getElementById("5px").onclick=function(){
	x.lineWidth = 5; }	

	document.getElementById("7px").onclick=function(){
	x.lineWidth = 7; }
	}
