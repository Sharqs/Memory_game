window.onload=function(){
    var cards = document.querySelectorAll('.card');
    cards.forEach(x=> x.addEventListener('click',flip));
    var match = [];
    var matched = 0;
    var busy = false;
    var clicks = 0;
    document.getElementById("counter").innerText = clicks
    


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
    button.addEventListener("click",)           // shuffle/refresh
    */
}
