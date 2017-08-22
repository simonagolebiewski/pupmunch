console.log('This is the Main.js file. It should be the 3rd and final file');

$(function() {
    var div = $(".staticHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 140) {
            div.removeClass('staticHeader').addClass("fixedHeader");
        } else {
            div.removeClass("fixedHeader").addClass('staticHeader');
        }
    });
});
