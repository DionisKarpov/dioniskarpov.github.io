$(window).resize(function () {
    if($(window).width() >= 950){
        $('.menu').css('display', 'block');
    };
});

$(window).resize(function () {
    if($(window).width() < 950){
        $('.menu').css('display', 'none');
    };
});


$(".menu-btn").click(function(){
  $(".menu").toggle();
});




$(document).ready(function() {
  $(".works-2").hide();
});

$(".load").click(function(){
  $(".works-2").toggle();
});

//--------------------------------------------------------

$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
  $('#go').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('#modal_form')
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '60%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('#overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });
});

$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
  $('.go').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('#modal_form')
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '60%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('#overlay').fadeOut(400); // скрывaем пoдлoжку
        }
      );
  });
});




//--------------------------------------------------------

// hide placeholder
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

// on page load...
moveProgressBar();
// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

// on page load...
moveProgressBar1();
// on browser resize...
$(window).resize(function() {
    moveProgressBar1();
});

// on page load...
moveProgressBar2();
// on browser resize...
$(window).resize(function() {
    moveProgressBar2();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
  console.log("moveProgressBar");
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 3500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}

// SIGNATURE PROGRESS
function moveProgressBar1() {
  console.log("moveProgressBar1");
    var getPercent1 = ($('.progress-wrap-1').data('progress-percent-1') / 100);
    var getProgressWrapWidth1 = $('.progress-wrap-1').width();
    var progressTotal1 = getPercent1 * getProgressWrapWidth1;
    var animationLength1 = 3500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar-1').stop().animate({
        left: progressTotal1
    }, animationLength1);
}



// SIGNATURE PROGRESS
function moveProgressBar2() {
  console.log("moveProgressBar2");
    var getPercent2 = ($('.progress-wrap-2').data('progress-percent-2') / 100);
    var getProgressWrapWidth2 = $('.progress-wrap-2').width();
    var progressTotal2 = getPercent2 * getProgressWrapWidth2;
    var animationLength2 = 3500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar-2').stop().animate({
        left: progressTotal2
    }, animationLength2);
}

// sidebar

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');

    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 8000);
  }

  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});

//--------------------------------------------------------
