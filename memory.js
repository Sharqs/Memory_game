window.onload=function(){
    var cards = document.querySelectorAll('.card');
    cards.forEach(x=> x.addEventListener('click',flip));
    var match = [];
    var matched = 0;
    var busy = false;


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
        match.forEach(x=> x.classlist.toggle('first'))
        match = [];
        busy = false;
    }

    function flip (e){
        e.preventdefault();
        if(busy){
            return;
        }
        if (match.length<2){
            if (match.length === 1){    // 2nd click
                if (this.dessert-type === match[0].dessert-type){  //match
                    matched++                   // number of matches
                    this.classlist.toggle('flip')  // toggle current on
                    match = [];
                    if (matched >= 6) {
                        winner          // result screen if I have time
                    }
                }
                else {
                    busy = true;
                    (setTimeout(function(){noMatch()}, 1000,ms)  // toogle flip back
                }
            }
            else{ 
                this.classlist.toggle('flip');
                match.push(this)// .toggle
            }
        }
    }
    */
   /*
   var button = document.querySelector("button")
    button.addEventListener("click",)           // shuffle/refresh
    */
}
