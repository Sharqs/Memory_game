window.onload=function(){
    var array = ['1','2','3','4','5','6','7','8','9','10','11','12']; // these may have to be the actual imgs
    var cards = document.querySelectorAll('.card');
    cards.forEach(x=> x.addEventListener('click',flip));
    var match = [];
    var matched = 0;
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
    
    /*
    function noMatch { // flip to front class again

    }
    function flip (e){
        e.preventdefault();
        if (match.length<2){
            if (match.length === 1){    // 2nd click
                if (e.target.classname === match[0]){  //match
                    matched++                   // number of matches
                                            // toggle current on
                    if (matched >= 6) {
                        winner          // result screen if I have time
                    }
                }
                else {
                    (setTimeout(function(){noMatch()}, 1000,ms)  // toogle flip back
                }
            }
            else{ // .toggle
            }
        }
    }
    */
   var button = document.querySelector("button")
    button.addEventListener("click",)           // shuffle/refresh
}