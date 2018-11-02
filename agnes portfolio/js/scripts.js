// Twitter button
window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);

t._e = [];
t.ready = function(f) {
  t._e.push(f);
};

return t;
}(document, 'script', 'twitter-wjs'));

// Facebook button
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.0';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/*User prompt
var userName = prompt("What's your name?");
function sayHello(userName) {
  alert("Hello " + userName + "! Welcome to my website");
};
sayHello(userName);
*/

// Google Maps API
var map;
function initMap() {
  var myLatLng = {lat: 52.5377427, lng: 13.4261765};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Agnes - Web Development'
  });

  var  contentString = '<div id="content">'+
    '<p><b>Agnes - Web Development</b></p>'+
    '<div id="bodyContent">'+
    '<p>Everything you need to have a good-looking, responsive and interactive'+
    'website to make your personal brand or business stand out</p>'+
    '<p>Come visit us at <b>Danziger Str. 94</b> in Berlin</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
    zIndex: 10
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

};



$(document).ready(function() {
  // Navigation bar
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });


  // Tooltip
  $(function () {
    $('#about-contact').tooltip();
  });

   $(function () {
     $('[data-toggle="tooltip"]').tooltip();
   });

   $("#form-submit-button").on('click', function() {
     var name = $('.name-box').val();
     var email = $('.email-box').val();
     var comment = $('.message-box').val();

     // comment missing - message box with red border
     if (comment === "") {
       $(".message-box").css("border", "1px solid red");
     }
     else {
       $('#visible-comment').html(comment);
       $('.message-box').hide();
     };

     $('#visible-name').html(name);
     $('#visible-email').html(email);

     $('#Name').hide();
     $('#Email').hide();

     console.log(name);
     console.log(email);
     console.log(comment);
     return false;


   });

   // message character count
   $(".message-box").on("keyup", function() {
     console.log("keyup happened!");
     var charCount = $(".message-box").val().length;
     console.log(charCount);
     $('#char-count').html(charCount);

     // character count turns red for longer messages
     if (charCount > 50) {
       $('#char-count').css("color", "red");
       $(".message-box").css("color", "red");
     }
     else {
       $('#char-count').css("color", "black");
       $(".message-box").css("color", "black");
     };

   });

   // work section
   for (var i = 0; i < works.length; i++) {
     $("#work-section").append("\
     <div class='col-xs-12 col-sm-4 col-md-3 col-lg-3'>\
        <a href=' " + works[i].url +" ' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
        </a>\
     </div>\
     ");
     var images = $("#work-section img");
     if (i%2 === 0) {
       $(images[i]).css("border", "2px solid #0D7A94");
     }
     else {
       $(images[i]).css("border", "2px solid #C7C7D3");
     };

   };

   $(".work-img").mouseenter( function() {
     $(".info", this).show();
   }).mouseleave(function() {
     $(".info", this).hide();
   });


});
