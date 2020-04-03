$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav:true,
        navText : ["",""]
    });
    $("#yakor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    // $(".mobile_menu").on( "click", function() {
    //     $('.mobile_humburger').toggleClass('fixed');
    // });
  });