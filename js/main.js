$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#cursor').css({
            left: e.pageX - 33.5,
            top: e.pageY - 33.5
        });
    })
    $('a').on('mouseover', function() {
        console.log("cc");
        $('#cursor').css("display", "none");
    });
});

