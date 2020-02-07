function setup(){
    var myCanvas = createCanvas(800,250);
    background('#4F2339');
    myCanvas.parent(mySketch);
}
    
function draw(){
    let a;
    if(mouseIsPressed){
        background(79,35,57);
    } else{
        a = random(1,70);
        noFill();
        stroke(mouseX+50,0,mouseY+50);
        ellipse(mouseX, mouseY, a, a);
    }
}
