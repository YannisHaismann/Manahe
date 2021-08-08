var listWords = ["Obstinées.", "Captivées.", "Polyvalentes.", "Singulières.", "Rêveuses.", "Complémentaires.", "Audacieuses."];

$(document).ready(function() {
    var el = $("#a-propos_audacieuse");
    el.addClass("anim-letter-disapears");
    whileWords(el, listWords);
    setInterval(function (){
        whileWords(el, listWords);
    }, 25000);
});

function whileWords(el, listWords){
    for(var i = 0; i < listWords.length ; i++) {
        changeWords(el, listWords[i], i);
    }
}

function changeWords(el, word, i){
    setTimeout(function (){
        setTimeout(function () {
            el.removeClass("anim-letter-disapears");
            el.css("top", "-60px");
            el.text(word);
            el.addClass("anim-letter-appears");
        }, (2000 * (i + 1)));
        setTimeout(function () {
            el.css("top", "0px");
            el.removeClass("anim-letter-appears");
            el.addClass("anim-letter-disapears");
        }, (2000 * (i + 2)));
    }, 1500 * i);
}