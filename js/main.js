
//Eсли: вниз 1080px от начала документа

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
        document.getElementById("up").style.display = "block";
    } 
    else {
        document.getElementById("up").style.display = "none";
    }
}

/* переход к началу документа */

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}