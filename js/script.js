$(document).ready(function(){

  //configuration
  var width = 500;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM
  var $slider = $("#slider");
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');
  var $previous = $('#previous');
  var $next = $("#next");
  var interval;

  function startSlider(){
    interval = setInterval(function(){
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
        console.log(currentSlide);
        currentSlide++;
        if (currentSlide === 5) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);


      $previous.click(function(){
        $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function(){
          console.log($slides.length);
          console.log("after" + currentSlide);
          currentSlide--;
          if (currentSlide === 0) {
            $slideContainer.animate({'margin-left': -1500}, 0);
            currentSlide = 4;

            console.log(currentSlide);
          }
        });
      });

      $next.click(function(){
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
          currentSlide++;
          console.log("after" + currentSlide);
          if (currentSlide === 5) {
            $slideContainer.css('margin-left', 0);
            currentSlide = 1;
            console.log(currentSlide);
          }
        });
      });

  }

  function stopSlider(){
    clearInterval(interval);
  }


  // $previous.on('click', stopSlider).on('click', startSlider);
  // $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  startSlider();


});
