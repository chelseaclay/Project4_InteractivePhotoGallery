// !!!!!!!!!!!!!!!! Transtions wait until after page load !!!!!!!!!!!!!!!!

$(document).ready(function(){
  $("body").removeClass("preload");
});

// !!!!!!!!!!!!!!!! Lightbox !!!!!!!!!!!!!!!!

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");
var $btnPrev = $('<button id="btnPrev" type="button"> < </button>');
var $btnNext = $('<button id="btnNext" type="button"> > </button>')

// Add image to overlay
$overlay.append($image);

//A caption to the overlay
$overlay.append($caption);

//A arrows to the overlay
$overlay.append($btnPrev);
$overlay.append($btnNext);

//Add overlay
$("body").append($overlay);


//Capture the click event on a link to an image
$(".container a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //Remove class active from previous active item
  $("#overlay").removeClass("active");
  //Adds active class to active image
  $("#overlay").addClass("active");

  //Show the overlay
  $overlay.show();
  //Get child's alt attribute and set caption
  var titleText = $(this).children("img").attr("alt");
  $caption.text(titleText);
});

//When overlay is clicked
$overlay.click(function (){
  //Hide the overlay
  $overlay.hide();
  //Remove class active from previous active item
  $("#overlay").removeClass("active");
});


//Click based navigation
$btnPrev.on("click", function(){
  navigate(-1);
});

$btnNext.on("click", function(){
  navigate(1);
});


function navigate(direction){
  if(direction == -1) {  // left
    $("div.active").prev().find("div.gallery a").trigger("click");
  } else if (direction == 1) {  //right
    $("div.active").next().find("div.gallery a").trigger("click");
  }
}
