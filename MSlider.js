$(function(){


  $.fn.MSliding = function(params){

    // size and style of the slider
    var width = params.width?this:"100%",
        height = params.height?this:"200px",
        style_type = params.style_type?this:1;

    // get main slider
    var slider = $('.MSlider');
    // get slides
    var slides = $('.MSlider-item');

    // wrap slides
    slides.wrapAll("<div id='MSlider-content'/>");

    // put arrows inside slider
    $("#MSlider-content").before('<span id="left"><</span><span id="right">></span>');

    // get arrows
    var left = $('#MSlider-left');
    var right = $('#MSlider-right');



    /*
     * elementSize => JSON that contains width and height of each slide
     * type => Style of Slider
     */
    function setCSSSlides(elementSize, type){
      // setStyle
    }

    /*
     * height => height of Slider
     * padding => padding of each element in slider
     * width => ...
     * type => Style of slider
     */
    function setCSSSlider(height, padding, width, type)
    {

    }

    // type #1
    var type_1 = {};

    // type #2
    var type_2 = {};

    // type #3
    var type_3 = {};



  }

  $('.MSlider').MSliding({
    width: '100%',
    height: '250px'
  });


})
