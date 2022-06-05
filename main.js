function preload() {
	setSprites();
	MarioAnimation();
	world_start = loadSound("world_wav.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(800,400)
	video.parent("game_console")
	posenet = ml5.posenet(video, modelLoaded)
	posenet.on("pose", gotResults)
}

function draw() {
	game()
	
}

function gotPoses(results){
	if(results.length>0){
		console.log(results)
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function modelLoaded(){
	console.log("Model is loaded!")
}








