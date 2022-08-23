function preload() {

}
function setup() {
   canvas =  createCanvas(700 , 560);
    canvas.position(450 , 150); 
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video , 200 , 150 , 300 , 300);
    fill(255, 0 , 0);
    circle(100 , 100 , 100 ,);
    fill(30 , 144 , 255);
    rect(150 , 80 , 400  , 40);
    fill(255, 0 , 0);
    circle(600 , 100 , 100 ,);
    fill(30 , 144 , 255);
    rect(580 , 150 , 40  , 300);
    fill(255, 0 , 0);
    circle(600 , 500 , 100 ,);
    fill(30 , 144 , 255);
    rect(150 , 480 , 400  , 40);
    fill(255, 0 , 0);
    circle(100 , 500 , 100 ,);
    fill(30 , 144 , 255);
    rect(80 , 150 , 40  , 300);
    
}
function take_snapshot() {
    save('image.png');
}