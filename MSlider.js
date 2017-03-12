$(function(){

  $.fn.MSliding = function(parms){

    // size and style of the slider

    var sliderParams = {
      width : parms.width ? parms.width:"100%",
      height : parms.height ? parms.height:"250px",
      margin : parms.margin ? parms.margin:"5px",
      padding : parms.padding ? parms.padding:"5px",
      style_type : parms.style_type ? parms.style_type:1,
      item:{
        item_width : parms.item_width ? parms.item_width:"250px",
        margin_item: parms.margin_item ? parms.margin_item:"5px",
        padding_item: parms.padding_item ?parms.padding_item:"5px",
      }
    }

    // get main slider
    var slider = $('.MSlider');
    // get slides
    var slides = $('.MSlider-item');

    // wrap slides
    slides.wrapAll("<div id='MSlider-content'/>");

    // put arrows inside slider
    $("#MSlider-content").before('<span id="left"><</span><span id="right">></span>');

    // get slidercontent
    var sliderContent = $("#MSlider-content");

    // get arrows
    var left = $('#MSlider-left');
    var right = $('#MSlider-right');


    // set Style of Slider
  //  setCSSSlides();

    /*
     * elementSize => JSON that contains width and height of each slide
     * type => Style of Slider
     */
    function setCSSSlider(){
      // setStyle
      sliderContent.css(type_1.MSlider_content);
      slider.css({
        "position":'relative',
        "height": sliderParams.height,
        "width": sliderParams.width
      });
    }

  //  setCSSSlider();
    /*
     * height => height of Slider
     * padding => padding of each element in slider
     * width => ...
     * type => Style of slider
     */
    function setCSSSlides()
    {
      slides.css(type_1.MSlider_item)
      // alert(persona);
    }

    // type #1
    var type_1 = {
      "MSlider_content":{
        "width": "100%",
        "height": sliderParams.height,
        "position": "relative",
        "background": "#f1f1f1",
        "overflow-x": "hidden",
        "overflow-y": "hidden",
        "white-space": "nowrap"
      },
      "MSlider_item":{
        "display": "inline-flex",
        "width": "calc("+sliderParams.item.item_width+" - "+sliderParams.item.margin_item.replace("px","")*2+"px)",
        "height": sliderParams.height,
        "align-items": "center",
        "justify-content": "center",
        "margin-left": sliderParams.item.margin_item,
        "margin-right": sliderParams.item.margin_item,
        "box-sizing": "border-box",
        "background": "#fff"
      }
    };

    //console.log(persona);

    // type #2
    var type_2 = {};

    // type #3
    var type_3 = {};


    setCSSSlides();
    setCSSSlider();


  }

  $('.MSlider').MSliding({
    width: "100%",
    height: "200px"
  });


})
