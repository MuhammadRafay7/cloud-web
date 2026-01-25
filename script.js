$(document).ready(() => {

    var rotate = gsap.timeline({
        scrollTrigger: {
            trigger: ".story-sec",
            scrub: 0.2,
            start: 'top top',
            end: '+=10000',
        }
    })
        .to('#scrollImg', {
            rotation: 200 * -1,
            yPercent: -300,
            duration: 1,
            ease: 'none',
        })

    var rotate1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#scrollImg2",
            scrub: 0.2,
            start: 'top top',
            end: '+=10000',
        }
    })
        .to('#scrollImg1', {
            rotation: 200 * -1,
            yPercent: -400,
            duration: 1,
            ease: 'none',
        })
    gsap.set('#product-vid', {
        rotation: 435.4 * 0.9,
        scale: 0.5

    });
    var rotate2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".product-sec",
            scrub: 0.2,
            start: 'top top',
            end: '+=10000',
        }
    })
        .to('#product-vid', {
            rotation: 435.4 * 0.31,
            duration: 1,
            ease: 'none',
            scaleX: 3,
            scaleY: 4
        })


    const items = document.querySelectorAll('.cursor-img')
    items.forEach((el) => {
        const image = el.querySelector('.cursor-img .hoverImg')

        el.addEventListener('mouseenter', (e) => {
            gsap.to(image, {
                autoAlpha: 1
            })
        })

        el.addEventListener('mouseleave', (e) => {
            gsap.to(image, {
                autoAlpha: 0
            })
        })

        el.addEventListener('mousemove', (e) => {
            gsap.set(image, {
                force3D: true,
                x: e.offsetX - 5,
                y: e.offsetY - 5
            })
        })
    })


    $('.awards-imgs img').css({
        'opacity': '0',
        'transform': 'translateY(-10px)'
    });
    $('.awards-item.first').hover(
        function () {
            $('.awards-imgs img.first').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.first').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );
    $('.awards-item.second').hover(
        function () {
            $('.awards-imgs img.second').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.second').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );
    $('.awards-item.third').hover(
        function () {
            $('.awards-imgs img.third').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.third').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );
    $('.awards-item.four').hover(
        function () {
            $('.awards-imgs img.four').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.four').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );
    $('.awards-item.five').hover(
        function () {
            $('.awards-imgs img.five').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.five').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );
    $('.awards-item.six').hover(
        function () {
            $('.awards-imgs img.six').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.six').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );
    $('.awards-item.seven').hover(
        function () {
            $('.awards-imgs img.seven').css({
                'opacity': '1',
                'transform': 'translateY(10px)'
            });
        },
        function () {
            $('.awards-imgs img.seven').css({
                'opacity': '0',
                'transform': 'translateY(-10px)'
            });
        }
    );

    const backToTop = $('#backToTop')
    const amountScrolled = 300

    $(window).scroll(() => {
        $(window).scrollTop() >= amountScrolled ?
            backToTop.fadeIn('fast') :
            backToTop.fadeOut('fast')
    })

    backToTop.click(() => {
        $('body, html').animate({
            scrollTop: 0
        }, 600)
        return false
    })

    function fitElementToParent(el, padding) {
        var timeout = null;

        function resize() {
            if (timeout) clearTimeout(timeout);
            anime.set(el, {
                scale: 1
            });
            var pad = padding || 0;
            var parentEl = el.parentNode;
            var elOffsetWidth = el.offsetWidth - pad;
            var parentOffsetWidth = parentEl.offsetWidth;
            var ratio = parentOffsetWidth / elOffsetWidth;
            timeout = setTimeout(anime.set(el, {
                scale: ratio
            }), 10);
        }
        resize();
        window.addEventListener('resize', resize);
    }

    var sphereAnimation = (function () {

        var sphereEl = document.querySelector('.sphere-animation');
        var spherePathEls = sphereEl.querySelectorAll('.sphere path');
        var pathLength = spherePathEls.length;
        var hasStarted = false;
        var aimations = [];

        fitElementToParent(sphereEl);

        var breathAnimation = anime({
            begin: function () {
                for (var i = 0; i < pathLength; i++) {
                    aimations.push(anime({
                        targets: spherePathEls[i], stroke: {
                            value:
                                ['#e9d700', 'rgba(80,80,80,.35)'], duration: 500
                        }, translateX: [2, -4], translateY: [2, -4], easing: 'easeOutQuad'
                        , autoplay: false
                    }));
                }
            }, update: function (ins) {
                aimations.forEach(function (animation, i) {
                    var percent = (1 -
                        Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2; animation.seek(animation.duration * percent);
                });
            }, duration:
                Infinity, autoplay: false
        }); var introAnimation = anime.timeline({ autoplay: false }).add({
            targets: spherePathEls,
            strokeDashoffset: {
                value: [anime.setDashoffset, 0], duration: 3900, easing: 'easeInOutCirc', delay:
                    anime.stagger(190, { direction: 'reverse' })
            }, duration: 2000, delay: anime.stagger(60, { direction: 'reverse' }),
            easing: 'linear'
        }, 0); var shadowAnimation = anime({
            targets: '#sphereGradient', x1: '25%', x2: '25%', y1: '0%',
            y2: '75%', duration: 30000, easing: 'easeOutQuint', autoplay: false
        }, 0); function init() {
            introAnimation.play(); breathAnimation.play(); shadowAnimation.play();
        } init();
    })();
})

// control window scrolling and Scroll to Top Smoothly 

let button_1 = document.querySelector("#top_btn");

window.addEventListener("scroll", () => {

    let window_scroll = window.pageYOffset;
    // console.log(window_scroll);

    if (window_scroll >= 700) {
        // alert("height is 700");
        button_1.style.display = "flex";
    }
    else {
        button_1.style.display = "none";
    };

    button_1.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    });

});
