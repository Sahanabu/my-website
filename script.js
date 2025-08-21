$(document).ready(function(){
    // Highlight active menu
    $("nav a").click(function(){
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });

    // Zoom profile image on hover
    $(".profile-img").hover(function(){
        $(this).css("transform", "scale(1.1)");
    }, function(){
        $(this).css("transform", "scale(1)");
    });
});