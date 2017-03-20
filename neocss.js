$(document).ready(function() {
    // TOGGLE TOGGLE EFFECT
    // *data-toggle*
    // *data-target*
    $("[data-toggle='toggle']").each(function() {
        $(this).click(function() {
            var target = $(this).data("target");
            $(target).toggle();
        });
    });

    // TOGGLE COLLAPSE EFFECT
    // *class 'toggle'*
    $("[data-toggle='collapse']").each(function() {
        $(this).click(function() {
            var target = $(this).data("target");
            $(target).slideToggle();
        });
    });

    $(".neo.button.close").each(function() {
        $(this).click(function() {
            $(this).parent().hide();
        });
    });
    $(".neo.button.close-1").each(function() {
        $(this).click(function() {
            $(this).parent().parent().hide();
        });
    });


    // CIRCLE BUTTON
    // $(".circle").each(function() {
        // $(this).css("height", $(this).css("width"));
        // $(this).css("line-height", $(this).css("height"));
        // $(this).css("vertical-align", "middle");
    // });
});
