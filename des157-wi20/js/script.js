function setup(){
    var myCanvas = createCanvas(800,250);
    background(50,0,50);
    myCanvas.parent(mySketch);
    }
    
function draw(){
    if(mouseIsPressed){
        background(50,0,50);
    } else{
        noStroke();
        fill(mouseX+50,0,mouseY+50);
        ellipse(mouseX, mouseY, random(1,50), random(1,50));
    }
}
