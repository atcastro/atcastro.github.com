function setup(){
    var myCanvas = createCanvas(1000,250);
    background('#4F2339');
    myCanvas.parent(mySketch);
}
    
function draw(){
    let a;
    const colors= ["#FF6B6B", "#FFE66D", "#4EDEC4"]
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    if(mouseIsPressed){
        background(79,35,57);
    } else{
        a = random(1,70);
        noFill();
        strokeWeight(3);
        stroke(randomColor);
        ellipse(mouseX, mouseY, a, a);
    }
}
