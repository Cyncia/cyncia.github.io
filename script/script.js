// Load Navigation Bar
$(document).ready(function () {
    $("#nav-placeholder").load("../html/navigation.html");
 });


// Load Footer Section
$(document).ready(function () {
    $("#footer-placeholder").load("../html/footer.html");
 });


/*
// scroll to projects
$(document).ready(function () {
 $('#down').on('click',function () {
  $("html").scrollTop(0);
   $('html, body').animate({
     scrollTop: $('#projects').offset().top
 }, 10);
 });
});
*/

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    //document.getElementById("top").style.paddingTop = "1.8vw";
    document.getElementById("top").setAttribute('style', 'padding-top: 1.8vw; padding-bottom: 1.8vw; background-color: rgba(255, 255, 255, 0.85);');
  } else {
    document.getElementById("top").setAttribute('style', 'padding-top: 2.2vw; padding-bottom: 2.2vw');
  }
});



//$('html, body').hide();

var jump=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("href");
   } else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top - 125
   },800);

   location.hash = target; //attach the hash (#jumptarget) to the page
}

$(document).ready(function()
{
    $('a[href^="#"]').on("click", jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('html, body').show();
    }
});




/*
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
*/
