window.onload=function(){
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i<cards.length; i++){
        cards[i].addEventListener('click',flip);
        cards[i].style.order = i
    }
    shuffle();
    var match = [];
    var matched = 0;
    var busy = false;
    var clicks = 0;
    document.getElementById("counter").innerText = clicks
    
    
    function shuffle() {
        var j, x, i;            //j is randomized index, x is a temp, 
        for (i = cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cards[i].style.order   // save curent value
            cards[i].style.order = cards[j].style.order   // set current index to randomized value
            cards[j].style.order = x   // the saved value in temp is assigned to randomized index
        }
        return cards;
    }
    
    function noMatch () { 
        match.forEach(x=> x.classList.toggle("flip"))
        match = [];
        busy = false;
    }

    function flip (){
        if(busy){   // only 2 flips shown
            return;
        }
        if(match[0] === this){  // can't click same thing twice
            return;
        }
        if (match.length === 1){    // 2nd click
            if (this.dataset.dessert === match[0].dataset.dessert){
                busy = true;
                this.classList.toggle("flip");
                clicks++
                document.getElementById("counter").innerText = clicks
                match.push(this);
                match.forEach(x=>x.removeEventListener("click", flip))
                match = [];
                busy = false;
            }
            else {  // not a match
                busy = true;
                this.classList.toggle("flip");
                clicks++
                document.getElementById("counter").innerText = clicks
                match.push(this);
                (setTimeout(function(){noMatch()}, 1000))  // toogle flip back
            }
        }
        else{  // 1st click
            this.classList.toggle("flip");
            clicks++;
            document.getElementById("counter").innerText = clicks
            match.push(this)     
        }
    }
    
   /*
   var button = document.querySelector("button")
    button.addEventListener("click",)           

    so it has to have 3 pieces of functionality
    1. reset the board to everything face down
        classList.remove('flip')
    2. shuffle -order value of css grid using cards variable
        shuffle();
    3. reset clicks
        clicks = 0;
        document.getElementById("counter").innerText = clicks

    */
   var button = document.querySelector("button")
   button.addEventListener("click",newGame)

   function newGame (){
       cards.forEach(x=> {x.removeEventListener("click",flip)
        x.addEventListener("click",flip)
        x.classList.remove('flip')})
        shuffle();
        clicks = 0;
        document.getElementById("counter").innerText = clicks
       
   }
}
