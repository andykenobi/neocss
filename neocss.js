$(document).ready(function() {
    // TOGGLE TOGGLE EFFECT
    // *data-toggle*
    // *data-target*
    $("[data-toggle='toggle']").click(function() {
        var target = $(this).data("target");
        $(target).toggle();
    });
    // TOGGLE COLLAPSE EFFECT
    // *class 'toggle'*
    $("[data-toggle='collapse']").click(function() {
        var target = $(this).data("target");
        $(target).slideToggle();
    });
});
