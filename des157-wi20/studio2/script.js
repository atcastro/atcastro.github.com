(function(){

    "use strict";

/*     var sketch = document.getElementById('sketchbook');
    var sketchText = document.getElementById('sketchText');

    sketch.onclick = function(){
        sketchText.style.display = 'block';
    };  */
    var sketchText = document.getElementById('sketchText');
    var lapText = document.getElementById('lapText');
    var keyText = document.getElementById('keyText');

    document.getElementById('sketchbook').onclick = function(){
        sketchText.style.display = 'block';
    };

    document.getElementById('laptop').onclick = function(){
        lapText.style.display = 'block';
    };

    document.getElementById('keys').onclick = function(){
        keyText.style.display = 'block';
    };

    sketchText.onclick = function(){
        sketchText.style.display = 'none';
    };

    lapText.onclick = function(){
        lapText.style.display = 'none';
    };

    keyText.onclick = function(){
        keyText.style.display = 'none';
    };



}());