
/* Application Scripts
================================================================ */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var styleMedia = window.styleMedia || window.media;
    if (!styleMedia) {
        var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
        style.type = "text/css";
        style.id = "matchmediajs-test";
        script.parentNode.insertBefore(style, script);
        info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
        styleMedia = {
            matchMedium: function(media) {
                var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }
                return info.width === "1px";
            }
        };
    }
    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || "all"),
            media: media || "all"
        };
    };
}());

$(document).ready(function() {
    if (window.matchMedia("(min-width: 940px)").matches) {
        $(window).load(function() {
            $(".loading-wrapper").removeClass("active");
            setTimeout(function() {
                $("section.hero").removeClass("inactive");
            }, 600);
        });
    } else {
        $(".loading-wrapper").removeClass("active");
    }
    if (window.matchMedia("(min-width: 940px)").matches) {
        var shTitle = $(".sh-title-wrapper");
        $(window).on("scroll", function() {
            var st = $(this).scrollTop();
            shTitle.css({
                transform: "translate3d(0px, " + st / 3 + "px, 0px)",
                opacity: 1 - st / 250
            });
        });
    }
    if (window.matchMedia("(min-width: 940px)").matches) {
        $(window).bind("load scroll", function() {
            if ($(this).scrollTop() > 350) {
                $(".scroll-top, #cp-trigger, .opera-trigger").addClass("visible");
            } else {
                $(".scroll-top, #cp-trigger, .opera-trigger").stop().removeClass("visible");
            }
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $(".scroll-top").stop().removeClass("visible");
            }
        });
    }
    $(".app-header").clone().removeAttr("id").appendTo(".fixed-header-container");
    $(window).bind("load scroll", function() {
        if ($(this).scrollTop() > 350) {
            $("body").addClass("fh-visible");
        } else {
            $("body").removeClass("fh-visible");
        }
        if ($(".fixed-header-container").css("opacity") == "1" && $("body").hasClass("fh-visible")) {
            $(".flyout-trigger").css({
                top: "0.7em"
            });
        } else {
            $(".flyout-trigger").css({
                top: "1.5em"
            });
        }
    });
    $(".search-toggle").click(function() {
        $("body").addClass("search-active");
        setTimeout(function() {
            $(".main-search input").focus();
        }, 400);
    });
    $(".search-close").click(function() {
        $("body").removeClass("search-active");
    });
    if ($("#s-contact").length != 0) {
        var $contact = $(".h5-valid input");
        if ($contact.val().length != 0) {
            $contact.find("~ label").hide();
        }
        $contact.blur(function() {
            if ($(this).val().length != 0) {
                $(this).find("~ label").hide();
            } else {
                $(this).find("~ label").fadeIn();
            }
        });
    }
    if (window.matchMedia("(min-width: 940px)").matches) {
        tiles = $(".inactive");
        $(window).bind("load scroll", function(d, h) {
            tiles.each(function(i) {
                a = $(this).offset().top + $(this).height();
                b = $(window).scrollTop() + $(window).height();
                if (a < b) $(this).removeClass("inactive").addClass("active");
            });
        });
    } else {
        $(".inactive").removeClass("inactive");
    }
    $("a[href*=#]").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top
                }, 1200);
                return false;
            }
        }
    });
    $(".modal-image").magnificPopup({
        type: "image"
    });
    $(".modal-gallery").magnificPopup({
        type: "image",
        delegate: "a",
        gallery: {
            enabled: true
        }
    });
    $(".inline-modal").magnificPopup({
        type: "inline",
        midClick: true
    });
    $(".tooltip").tipr({
        speed: 300,
        mode: "top"
    });
    $(".progress").each(function() {
        attrProgress = $(this).attr("data-progress");
        $(this).css({
            width: attrProgress
        });
    });
    $(".portfolio-items").magnificPopup({
        type: "image",
        delegate: ".icon-view",
        gallery: {
            enabled: true
        },
        callbacks: {
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass("mfp-open");
                }
            }
        }
    });
    $("#project-gallery").magnificPopup({
        type: "image",
        delegate: "a",
        gallery: {
            enabled: true
        },
        callbacks: {
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass("mfp-open");
                }
            }
        }
    });
    $(".section.team").magnificPopup({
        type: "image",
        delegate: ".mask [class^='icon-']",
        gallery: {
            enabled: true
        },
        callbacks: {
            change: function() {
                if (this.isOpen) {
                    this.wrap.addClass("mfp-open");
                }
            }
        }
    });
    var portfolioCarousel = $(".portfolio-carousel");
    portfolioCarousel.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        slideBy: 1
    });
    $(".section.latest-works .nav-next").click(function() {
        portfolioCarousel.trigger("next.owl.carousel");
    });
    $(".section.latest-works .nav-prev").click(function() {
        portfolioCarousel.trigger("prev.owl.carousel");
    });
    var projectCarousel = $(".single-project .previews");
    projectCarousel.owlCarousel({
        items: 1,
        dots: false,
        loop: false,
        nav: false,
        autoplay: true,
        slideBy: 1
    });
    $(".project-carousel .nav-next").click(function() {
        projectCarousel.trigger("next.owl.carousel");
    });
    $(".project-carousel .nav-prev").click(function() {
        projectCarousel.trigger("prev.owl.carousel");
    });
    var testimonialCarousel = $(".testimonials-slider");
    testimonialCarousel.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        margin: 60,
        slideBy: 1
    });
    $(".section.testimonials .nav-next").click(function() {
        testimonialCarousel.trigger("next.owl.carousel");
    });
    $(".section.testimonials .nav-prev").click(function() {
        testimonialCarousel.trigger("prev.owl.carousel");
    });
    var wfCarousel = $(".welcome-features-carousel");
    wfCarousel.owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        nav: false,
        margin: 20,
        slideBy: 1,
        responsive: {
            960: {
                items: 3
            }
        }
    });
    var servicesCarousel = $(".services-slider");
    servicesCarousel.owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        nav: false,
        margin: 20,
        slideBy: 1,
        responsive: {
            720: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });
    $(".section.services .nav-next").click(function() {
        servicesCarousel.trigger("next.owl.carousel");
    });
    $(".section.services .nav-prev").click(function() {
        servicesCarousel.trigger("prev.owl.carousel");
    });
    $(".clients-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        margin: 35,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 4e3,
        autoplayHoverPause: true,
        responsive: {
            460: {
                items: 2
            },
            720: {
                items: 3
            }
        }
    });
    $(".footer-testimonials").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [],
        margin: 20,
        slideBy: 1
    });
});

function accordion() {
    $(".accordion > * > *:first-child").click(function() {
        var $parent = $(this).parent();
        $parent.toggleClass("active");
        $parent.siblings().removeClass("active");
        $parent.siblings().find("> *:first-child ~ *").slideUp(420);
        $(this).find("~ *").slideToggle(420);
    });
}

$(accordion);

function tabs() {
    $(".tabs .nav li").click(function() {
        var $section = $(this).parents(".tabs").find("section");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $section.slideUp(420);
        $section.eq($(this).index()).slideDown(420);
        return false;
    });
}

$(tabs);

(function($) {
    $.fn.tipr = function(options) {
        var set = $.extend({
            speed: 200,
            mode: "bottom"
        }, options);
        return this.each(function() {
            var tipr_cont = ".tipr_container_" + set.mode;
            $(this).hover(function() {
                var out = '<div class="tipr_container_' + set.mode + '"><div class="tipr_point_' + set.mode + '"><div class="tipr_content">' + $(this).attr("data-tip") + "</div></div></div>";
                $(this).append(out);
                var w_t = $(tipr_cont).outerWidth();
                var w_e = $(this).width();
                var m_l = w_e / 2 - w_t / 2;
                $(tipr_cont).css("margin-left", m_l + "px");
                $(this).removeAttr("title");
                $(tipr_cont).fadeIn(set.speed);
            }, function() {
                $(tipr_cont).remove();
            });
        });
    };
})(jQuery);

$(document).ready(function() {
    var cpContainer = $("#cp-nav");
    function cpNav() {
        $("#cp-trigger").detach().prependTo("body");
        $("#logo").clone().removeAttr("id").prependTo(cpContainer);
        $("#app-header .main-nav > ul").clone().appendTo(cpContainer);
        $("#copyright").clone().removeAttr("id").appendTo(cpContainer);
    }
    $(cpNav);
});

$(window).load(function() {
    function toggleCP(state) {
        var scaleFactorWhenNavActive = .65;
        var vPos = $("html").scrollTop();
        if (vPos == 0) vPos = $("body").scrollTop();
        var screenHeight = $(window).height();
        var screenHeightFactor = screenHeight * .15;
        if ($("body").hasClass("cp-active")) {
            if (state != 1) {
                $("body").toggleClass("cp-active");
                $(".cp-trigger").toggleClass("nav-trigger-animate");
                $("body,html").animate({
                    scrollTop: Number((vPos + screenHeightFactor) / scaleFactorWhenNavActive) + 1
                }, 0);
            }
        } else {
            if (state != 0) {
                $("body").toggleClass("cp-active");
                $(".cp-trigger").toggleClass("nav-trigger-animate");
                $("body,html").animate({
                    scrollTop: Number(vPos * scaleFactorWhenNavActive - screenHeightFactor)
                }, 0);
            }
        }
    }
    $("#cp-trigger").click(function() {
        toggleCP();
    });
    $("#cp-nav a").click(function() {
        toggleCP(0);
    });
});

$(document).ready(function() {
    var fnContainer = $("#flyout-nav");
    function flyoutNav() {
        $("#flyout-trigger").detach().prependTo("body");
        $("#app-header .main-nav > ul").clone().appendTo(fnContainer);
        $("#app-header .logo").clone().prependTo(fnContainer);
    }
    $(flyoutNav);
});

$(window).load(function() {
    function toggleFlyout(state) {
        if ($("body").hasClass("flyout-active")) {
            if (state != 1) {
                $("body").toggleClass("flyout-active");
                $("#flyout-trigger").toggleClass("nav-trigger-animate");
                $("#site-overlay").toggleClass("invisible");
            }
        } else {
            if (state != 0) {
                $("body").toggleClass("flyout-active");
                $("#flyout-trigger").toggleClass("nav-trigger-animate");
                $("#site-overlay").toggleClass("invisible");
            }
        }
    }
    $("#flyout-trigger").click(function() {
        toggleFlyout();
    });
    $("#flyout-nav a, .site-overlay").click(function() {
        toggleFlyout(0);
    });
});

$(document).ready(function() {
    function operaNav() {
        $("#cp-trigger").hide();
        $("#flyout-trigger").show().addClass("opera-trigger");
    }
    if (isOpera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0) {
        operaNav();
    } else {}
});

if ($("#s-welcome").length > 0) {
    $(document).ready(function() {
        $(".earth .pin").click(function() {
            var $this = $(this);
            $(".earth .pin").removeClass("active");
            $this.addClass("active");
            $(".welcome-content").removeClass("active");
            setTimeout(function() {
                if ($this.is(":nth-child(1)")) {
                    $(".welcome-content:nth-child(1)").addClass("active");
                } else if ($this.is(":nth-child(2)")) {
                    $(".welcome-content:nth-child(2)").addClass("active");
                } else if ($this.is(":nth-child(3)")) {
                    $(".welcome-content:nth-child(3)").addClass("active");
                }
            }, 200);
        });
        pin1 = $(".earth .pin:nth-child(1)");
        pin2 = $(".earth .pin:nth-child(2)");
        pin3 = $(".earth .pin:nth-child(3)");
        $(".section.welcome .nav-next").click(function() {
            $(".welcome-content").removeClass("active");
            if (pin1.hasClass("active")) {
                pin1.removeClass("active");
                pin3.addClass("active");
                setTimeout(function() {
                    $(".welcome-content:nth-child(3)").addClass("active");
                }, 200);
            } else if (pin2.hasClass("active")) {
                pin2.removeClass("active");
                pin1.addClass("active");
                setTimeout(function() {
                    $(".welcome-content:nth-child(1)").addClass("active");
                }, 200);
            } else if (pin3.hasClass("active")) {
                pin3.removeClass("active");
                pin2.addClass("active");
                setTimeout(function() {
                    $(".welcome-content:nth-child(2)").addClass("active");
                }, 200);
            }
        });
        $(".section.welcome .nav-prev").click(function() {
            $(".welcome-content").removeClass("active");
            if (pin1.hasClass("active")) {
                pin1.removeClass("active");
                pin2.addClass("active");
                setTimeout(function() {
                    $(".welcome-content:nth-child(2)").addClass("active");
                }, 200);
            } else if (pin2.hasClass("active")) {
                pin2.removeClass("active");
                pin3.addClass("active");
                setTimeout(function() {
                    $(".welcome-content:nth-child(3)").addClass("active");
                }, 200);
            } else if (pin3.hasClass("active")) {
                pin3.removeClass("active");
                pin1.addClass("active");
                setTimeout(function() {
                    $(".welcome-content:nth-child(1)").addClass("active");
                }, 200);
            }
        });
        if (window.matchMedia("(min-width: 940px)").matches) {
            $(window).bind("load scroll", function() {
                welcome = $(".welcome-titles");
                welcomeA = welcome.offset().top + welcome.height();
                welcomeB = $(window).scrollTop() + $(window).height();
                if (welcomeA < welcomeB) {
                    $(".welcome header:first-of-type").addClass("active");
                }
            });
        } else {
            $(".welcome .pin").css({
                opacity: 1
            });
            $(".welcome header:first-of-type").addClass("active");
        }
    });
}

$(window).load(function() {
    var highest = null;
    var hi = 0;
    $(".welcome-content").each(function() {
        var h = $(this).outerHeight();
        if (h > hi) {
            hi = h;
            highest = $(this);
        }
        $(this).css("height", hi);
    });
});

(function($) {
    var reverse = function(value) {
        return value.split("").reverse().join("");
    };
    var defaults = {
        numberStep: function(now, tween) {
            var floored_number = Math.floor(now), target = $(tween.elem);
            target.text(floored_number);
        }
    };
    var handle = function(tween) {
        var elem = tween.elem;
        if (elem.nodeType && elem.parentNode) {
            var handler = elem._animateNumberSetter;
            if (!handler) {
                handler = defaults.numberStep;
            }
            handler(tween.now, tween);
        }
    };
    if (!$.Tween || !$.Tween.propHooks) {
        $.fx.step.number = handle;
    } else {
        $.Tween.propHooks.number = {
            set: handle
        };
    }
    var extract_number_parts = function(separated_number, group_length) {
        var numbers = separated_number.split("").reverse(), number_parts = [], current_number_part, current_index, q;
        for (var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
            current_number_part = "";
            for (q = 0; q < group_length; q++) {
                current_index = i * group_length + q;
                if (current_index === separated_number.length) {
                    break;
                }
                current_number_part = current_number_part + numbers[current_index];
            }
            number_parts.push(current_number_part);
        }
        return number_parts;
    };
    var remove_precending_zeros = function(number_parts) {
        var last_index = number_parts.length - 1, last = reverse(number_parts[last_index]);
        number_parts[last_index] = reverse(parseInt(last, 10).toString());
        return number_parts;
    };
    $.animateNumber = {
        numberStepFactories: {
            append: function(suffix) {
                return function(now, tween) {
                    var floored_number = Math.floor(now), target = $(tween.elem);
                    target.prop("number", now).text(floored_number + suffix);
                };
            },
            separator: function(separator, group_length) {
                separator = separator || " ";
                group_length = group_length || 3;
                return function(now, tween) {
                    var floored_number = Math.floor(now), separated_number = floored_number.toString(), target = $(tween.elem);
                    if (separated_number.length > group_length) {
                        var number_parts = extract_number_parts(separated_number, group_length);
                        separated_number = remove_precending_zeros(number_parts).join(separator);
                        separated_number = reverse(separated_number);
                    }
                    target.prop("number", now).text(separated_number);
                };
            }
        }
    };
    $.fn.animateNumber = function() {
        var options = arguments[0], settings = $.extend({}, defaults, options), target = $(this), args = [ settings ];
        for (var i = 1, l = arguments.length; i < l; i++) {
            args.push(arguments[i]);
        }
        if (options.numberStep) {
            var items = this.each(function() {
                this._animateNumberSetter = options.numberStep;
            });
            var generic_complete = settings.complete;
            settings.complete = function() {
                items.each(function() {
                    delete this._animateNumberSetter;
                });
                if (generic_complete) {
                    generic_complete.apply(this, arguments);
                }
            };
        }
        return target.animate.apply(target, args);
    };
})(jQuery);

stat = $('[id^="stat-"]');

var statsDone = true;

$(window).on("load scroll", function(d, h) {
    stat.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        statSep = $.animateNumber.numberStepFactories.separator(",");
        attrStat = $(this).attr("data-val");
        if (a < b) {
            $(this).animateNumber({
                number: attrStat,
                numberStep: statSep
            }, 2e3);
        }
    });
});

if ($("body").hasClass("index-single")) {
    $(window).load(function() {
        var lastId, topMenu = $(".main-nav ul, #cp-nav ul"), topMenuHeight = topMenu.outerHeight() + 15, menuItems = topMenu.find("a"), scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href").replace(/\//g, ""));
            if (item.length) {
                return item;
            }
        });
        $(window).scroll(function() {
            var fromTop = $(this).scrollTop() + topMenuHeight;
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) return this;
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                menuItems.parent().removeClass("active").end().filter("[href=#" + id + "]").parent().addClass("active");
            }
        });
    });
}

/******************************************************************
Smooth Scroll
******************************************************************/

// $('a[href*=#]').click(function() { // target all links except the off-canvas nav links
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//         || location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 1200);
//             return false;
//         }
//     }
// });
