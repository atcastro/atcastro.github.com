(function(){

    "use strict";

    var title = document.getElementById('title');
    var story = document.getElementById('story');
    var nav1 = document.getElementById('nav1');
    var nav2 = document.getElementById('nav2');

    var quest1 = document.getElementById('quest1');
    var quest2 = document.getElementById('quest2');
    var quest3 = document.getElementById('quest3');
    var quest4 = document.getElementById('quest4');
    var story1 = document.getElementById('story1');

    var mainNav = document.getElementById('backNav');
    var backNav = document.getElementById('backNav');
    var forwardNav = document.getElementById('forwardNav');

    var span1 = document.getElementById('span1');
    var span2 = document.getElementById('span2');
    var span3 = document.getElementById('span3');

    var fname;
    var positive;
    var negative;
    var worldView;

    nav1.addEventListener('click',function(event){
        event.preventDefault();
        quest1.style.display = "block";
        nav1.style.display = "none";
        //title.style.display = "none";
    });

    quest1.addEventListener('submit',function(event){
        event.preventDefault();
        quest1.style.display = "none";
        quest2.style.display = "block";
        var fname = document.getElementById('fname').value
        console.log(fname);
    });

    quest2.addEventListener('submit',function(){
        event.preventDefault();
        var radios1 = document.querySelectorAll('.positive');
        for (var i=0; i<radios1.length; i++) {       
            if ( radios1[i].checked ) {
                positive = radios1[i].value;
            }
        }
        quest2.style.display = "none";
        quest3.style.display = "block";
        console.log(positive);
    });

    quest3.addEventListener('submit',function(){
        event.preventDefault();
        var radios2 = document.querySelectorAll('.negative');
        for (var i=0; i<radios2.length; i++) {       
            if ( radios2[i].checked ) {
                negative = radios2[i].value;
            }
        }
        quest3.style.display = "none";
        quest4.style.display = "block";
        console.log(negative);
    });

    quest4.addEventListener('submit',function(){
        event.preventDefault();
        var radios3 = document.querySelectorAll('.worldView');
        for (var i=0; i<radios3.length; i++) {       
            if ( radios3[i].checked ) {
                worldView = radios3[i].value;
            }
        }
        quest4.style.display = "none";
        story1.style.display = "block";
        mainNav.style.display = "block";
        span1.innerHTML = `${positive}`;
        span2.innerHTML = `${negative}`;
        span3.innerHTML = `${worldView}`;
        console.log(worldView);
        story1.style.display = "block";
        mainNav.style.display = "block";
    });

    backNav.addEventListener('click', function(){
        location.reload();
    });

}());