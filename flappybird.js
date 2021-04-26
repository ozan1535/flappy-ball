var oyuncu = document.getElementById("player");
var oyuncuKonum = 250;
var dusman1 = document.getElementById("enemy1");
var gecit1 = document.getElementById("enemy2");
var dusman2 = document.getElementById("enemy3");
var gecit2 = document.getElementById("enemy4");
gecitrandom = Math.floor(Math.random() * 451);
gecit1.style.top = gecitrandom + "px";
gecitrandom2 = Math.floor(Math.random() * 451);
gecit2.style.top = gecitrandom2 + "px";
var konum1 = 500;
var konum2 = 850;

dusmanHareket = setInterval(function() {
    
    dusman1.style.left = konum1 + "px";
    gecit1.style.left = konum1 + "px";
    dusman2.style.left = konum2 + "px";
    gecit2.style.left = konum2 + "px";

    konum1--;
    konum2--;

    if(konum1 == -100){
        gecitrandom = Math.floor(Math.random() * 451);
        konum1 = 600;
        gecit1.style.top = gecitrandom + "px";
    }
    if(konum2 == -100){
        gecitrandom2 = Math.floor(Math.random() * 451);
        gecit2.style.top = gecitrandom2 + "px";
        konum2 = 600;
    }

}, 1);

oyuncuHareket = setInterval(function() {
    
    oyuncu.style.top = oyuncuKonum + "px";
    oyuncuKonum = oyuncuKonum + 1;

}, 5);

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        ziplama();
    }
});

window.addEventListener("click", ziplama);

function ziplama() {
    oyuncuKonum = oyuncuKonum - 75;
}

/*var dusmanHareket = setInterval(function() {
    
    dusman1.style.left = konum1 + "px";
    gecit1.style.left = konum1 + "px";
    dusman2.style.left = konum2 + "px";
    gecit2.style.left = konum2 + "px";

    konum1--;
    konum2--;

    if(konum1 == -100){
         gecitrandom = Math.floor(Math.random() * 451);
        konum1 = 600;
        gecit1.style.top = gecitrandom + "px";
    }
    if(konum2 == -100){
         gecitrandom2 = Math.floor(Math.random() * 451);
        gecit2.style.top = gecitrandom2 + "px";
        konum2 = 600;
    }
    
}, 1);
*/

gameover = setInterval(() => {
    if(oyuncuKonum == 651 || (konum1 >= 0 && konum1 <= 150 && oyuncuKonum < gecitrandom) || (konum2 >= 0 && konum2 <= 150 && oyuncuKonum < gecitrandom2) || (konum1 >= 0 && konum1 <= 150 && oyuncuKonum > gecitrandom + 150) || (konum2 >= 0 && konum2 <= 150 && oyuncuKonum > gecitrandom2 + 150))
    {
         clearInterval(oyuncuHareket);
         clearInterval(dusmanHareket); 
         console.log("game over");
         console.log(konum1 + " " + konum2 + " " + oyuncuKonum + " " + gecitrandom + " " + gecitrandom2);
         clearInterval(gameover);
    }
 }, 1);