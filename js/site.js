AOS.init();

$(document).ready(function() {


  $(window).scroll(function() {
    // STICKY NAVBAR
    var sticky = $(".top-nav"),
    scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass("sticky");
    else sticky.removeClass("sticky");

    // STICKY TOPBAR
    if($('body').hasClass('home')) {
      var topBar = $('.about-fdv .is-title');
      var topBarPosition = topBar.offset().top;
      var aboutSectionHeight = $('.about-fdv').innerHeight();
      if ($(window).scrollTop() > topBarPosition) {
        topBar.addClass('affix');
      } else {
        topBar.removeClass('affix');
      }
    }

    if($(window).scrollTop() > $("#footer").offset().top - 180) {
      $("#footer").addClass("overvalue");
    } else {
      $("#footer").removeClass("overvalue");
    }
  });
});

// HERO SECTION TEXT ANIMATION
$("#morphtext").Morphext({
  animation: "flipInX",
  separator: ",",
  speed: 2000,
});

$(".menu-toggle").click(function () {
  $("#main-navigation-wrapper").addClass("show");
});
$("#main-navigation-wrapper ul li a").click(function () {
  $("#main-navigation-wrapper").removeClass("show");
});
$("#main-navigation-wrapper .fa-close").click(function () {
  $("#main-navigation-wrapper").removeClass("show");
});

$(".open-popup").click(function () {
  $("#contact-form").addClass("show");
  $("#contact-form h3").text($(this).attr('data-subject'))
});
$("#contact-form .fa-close").click(function () {
  $("#contact-form").removeClass("show");
});
$(".privacy-policy-btn").click(function(){
  $("#privacy-policy").addClass("show");
});
$("#privacy-policy .fa-close").click(function () {
  $("#privacy-policy").removeClass("show");
});

$(".error").hide();
$("#send-message").click(function (e) {
  e.preventDefault();
  const sender = $("#email").val();
  const message = $("#message").val();
  const organization = $("#organization").val();
  const name = $("#name").val();

  if (sender == "" || message == "" || name == "" || organization == "") {
    $(".error").show();
  } else {
    sendEmail(sender, message, name);
  }
});

function sendEmail(sender, body, name) {
  $("#contact-form").removeClass("show");
  Email.send({
    SecureToken: "0c847ac9-5a4e-4b74-9a0b-68ddcb6b2f5d",
    To: "info@frostdigi.ai",
    From: sender,
    Subject: "Email from " + name,
    Body: body,
  }).then((message) => {
    toastr.info("Message sent successfully.");
    $("#contact-form form").trigger("reset");
  });
}



$(document).on('click', 'a[href^="#"]', function (event) {
  var headerHeight = $("#header").height();
  var bannerHeight = $("#hero").innerHeight(); 
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - headerHeight
  }, 500);
});

$(document).on('click', 'a[href^="#site-wrapper"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 1077
  }, 500);
});
