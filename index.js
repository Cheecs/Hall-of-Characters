$(document).ready(function() {

    controllaLarghezza();

    $(window).resize(function() {
        controllaLarghezza();
    });
});

function controllaLarghezza() {
    let width = $(window).width();
    let cards = $(".character-card");

    if (width <= 1000) {
        cards.removeClass("col-3");
    } else {
        cards.addClass("col-3");
    }
}