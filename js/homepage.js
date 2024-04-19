
/* Homepage Scripts
================================================================ */

$(document).ready(function() {
    if (window.matchMedia("(min-width: 940px)").matches) {
        var heroTitle = $(".parallax-title .title-wrapper, .video-bg .title-wrapper");
        $(window).on("scroll", function() {
            var st = $(this).scrollTop();
            heroTitle.css({
                transform: "translate3d(0px," + st / 2.5 + "px, 0px)",
                opacity: 1 - st / 700
            });
            $(".mouse").css({
                opacity: 1 - st / 700
            });
        });
        var heroBg = $(".parallax-bg .hero");
        $(window).on("scroll", function() {
            var st = $(this).scrollTop();
            heroBg.css({
                "background-position": "0 " + st / 1.5 + "px, 0 0"
            });
        });
        $(".hero-fixed").css({
            "padding-top": $(".hero").height() + "px"
        });
        var hero = $(".hero-fixed .hero");
        $(window).on("scroll", function() {
            var st = $(this).scrollTop();
            hero.css({
                opacity: 1 - st / 1e3
            });
        });
        $(".video-bg .hero-vid, .video-bg .hero-overlay").show();
    }
});