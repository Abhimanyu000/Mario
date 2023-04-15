function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	CS=loadSound("coin.wav");
	OVER=loadSound("gameover.wav");
	JUMP=loadSound("jump.wav");
	KICK=loadSound("kick.wav");
	DEATH=loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent("cam");
	
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}
