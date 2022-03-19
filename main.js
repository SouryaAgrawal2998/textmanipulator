function setup(){
    video= createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(500,500);
    canvas.position(550,75);
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#969A97');
}
function modelLoaded(){
    console.log("Model has been loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}