(function(){

    "use strict";

    const myForm = document.querySelector('form');
    const madlib = document.getElementById('madlib');
    

    document.getElementById('myform').addEventListener('submit', function(event){
        const pluralnoun = document.getElementById('pluralnoun').value;
        const year = document.getElementById('year').value;
        const verb = document.getElementById('verb').value;
        const adjective = document.getElementById('adjective').value;
        const store = document.getElementById('store').value;
        event.preventDefault();
        const celebrity = document.getElementById('celebrity').value;
        event.preventDefault();
        const city = document.getElementById('city').value;
        event.preventDefault();
        
        madlib.style.backgroundColor = '#3A506B';
        
        madlib.innerHTML = `<p>In the distant future, the year ${year}, ${pluralnoun} have taken over the planet and rule over the world with an iron fist. As their first decree as emperors of earth, they banned all ${verb} of any kind, taking away the humans’ greatest joy. Next, as a show of their ${adjective} strength, the obliterated the city of ${city} off the face of the Earth. 
        </p>
        <p>Knowing that their very existence as a species was hanging in the balance, the humans formed a resistance against the ${pluralnoun}, led by the humans’ greatest hero, ${celebrity}. Under the wise leadership of ${celebrity}, the humans take their last stand against the ${pluralnoun} and storm the home base in ${store}.</p>
        <p>May God have mercy on their souls...</p>`;

    });

}());