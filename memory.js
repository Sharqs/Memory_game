window.onload=function(){
    var array = ['1','2','3','4','5','6','7','8','9','10','11','12'];
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
    function noMatch { // make class front visible

    }
    function flip (e){
        e.preventdefault();
        
        if (match.length === 1){    // 2nd click
            if (e.target.classname === match[0]){  //match
                matched++                   // number of matches
                if (matched >= 6) {
                    winner          // result screen if I have time
                }
            }
            else {
                (setTimeout(function(){noMatch()}, 1000,ms)  //flip back
            }
        }
        else{ // 1st or 3rd click
            if (match === undefined){ // 1st click
                match.push(e.target.classname)
            }
        }
            else{                   // 3rd click (aka they clicked again before 1 sec timeout fired)
                noMatch();
                flip(e)
            }
        }
    }

}