$(function(){
    // LOAD HEADER & FOOTER
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

// GESTION DEPLACEMENT CURSOR
$(document).ready(function() {
    $(document).on('mousemove scroll', function(e) {
        $('#cursor').css({
            left: e.pageX - 43.5,
            top: e.pageY - 43.5
        });
    });
});
