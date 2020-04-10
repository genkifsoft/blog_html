$('document').ready(function() {
    $(".c-scroll").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 200) {
            $(".c-scroll").fadeIn();
        } else {
            $(".c-scroll").fadeOut();
        }
    });

    $(".c-menu__icon").click(function() {
        console.log(this);
        var existClassHidden = $(".close").hasClass("__hidden");
        if (existClassHidden) {
            $(this).children().removeClass("__hidden");
            $(".open").addClass("__hidden");
        } else {
            $('.open').removeClass("__hidden");
            $(".close").addClass("__hidden");
        }
    })
});