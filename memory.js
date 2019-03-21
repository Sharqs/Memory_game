window.onload=function(){
    var cards = document.querySelectorAll('.card');
    cards.forEach(x=> x.addEventListener('click',flip));
    var match = [];
    var matched = 0;
    var busy = false;
    var clicks = 0;


    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    function noMatch () { 
        match.forEach(x=> x.classList.toggle("flip"))
        match = [];
        busy = false;
    }

    function flip (){
        if(busy){
            return;
        }
        if (match.length<2){
            if (match.length === 1){    // 2nd click
                if (this.dessert-type === match[0].dessert-type){  //match
                    matched++                   // number of matches
                    this.classList.toggle("flip");  // toggle current on
                    clicks++
                    match = [];
                    /*
                    if (matched >= 6) {
                        winner          // result screen if I have time
                    }
                    */
                }
                else {
                    busy = true;
                    (setTimeout(function(){noMatch()}, 1000))  // toogle flip back
                }
            }
            else{  // 1st click
                this.classList.toggle("flip");
                clicks++;
                match.push(this)     // .toggle 
            }
        }
    }
   /*
   var button = document.querySelector("button")
    button.addEventListener("click",)           // shuffle/refresh
    */
}
