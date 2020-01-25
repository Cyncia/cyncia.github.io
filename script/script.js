// Load Navigation Bar
$(document).ready(function () {
    $("#nav-placeholder").load("../html/navigation.html");
 });


// Load Footer Section
$(document).ready(function () {
    $("#footer-placeholder").load("../html/footer.html");
 });

$(document).ready( function () {
 $('#down').on('click',function () {
  $("html").scrollTop(0);
   $('html, body').animate({
     scrollTop: $('#projects').offset().top
 }, 10);
 });
});

$(function() {
    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                var h = target.offset().top;
         
                if (h == null) {
                    console.log("here")
                    h = 200
                }

                $('html, body').animate({
                    scrollTop: h - 100
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    /*
                    var $target = $(target);
                    $target.focus();

                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };*/
                });
            }
        }
    });

});

/*
function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }
    var anchors = document.getElementByTagName('a');

    for (var idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== windown.location.hostname || anchors[idx].pathname !== windown.location.pathname) {
            continue;
        }

        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;

            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            
            fader.addEventListener('animationend', listener);
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function(event) {
    if (!event.persisted) {
        return;
    }

    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
});

*/

/*
window.addEventListener("beforeunload", function() {
    document.body.classList.add("animate-out");
});
*/

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };