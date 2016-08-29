// !!!!!!!!!!!!!!!! Transtions wait until after page load !!!!!!!!!!!!!!!!

$(document).ready(function(){
  $("body").removeClass("preload");
});

// !!!!!!!!!!!!!!!! Lightbox !!!!!!!!!!!!!!!!


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $title = $("<p class='overlayTitle'></p>");
var $caption = $("<p></p>");
var $btnPrev = $('<button id="btnPrev" type="button"> < </button>');
var $btnNext = $('<button id="btnNext" type="button"> > </button>')
var $btnExit = $('<button id="btnExit" type="button"> EXIT </button>')

//Add exit button to overlay
$overlay.append($btnExit);
//Add image to overlay
$overlay.append($image);
//Add title to overlay
$overlay.append($title);
//Add caption to overlay
$overlay.append($caption);
//Add left button to overlay
$overlay.append($btnPrev);
//Add right button to overlay
$overlay.append($btnNext);
//Add overlay to body
$("body").append($overlay);

//Prevent Default and capture image to show
$("div.gallery").on("click", function(event){
  event.preventDefault();
  var imageLocation = $(this).find("a").attr("href");
  //Show image on overlay
  $image.attr("src", imageLocation);
  //Remove class active from previous active item
  $("div.active").removeClass("active");
  //Adds active class to active image
  $(this).addClass("active");
  //Finding title for clicked image
  var $titleLocation = $(this).find(".title").text();
  //Finding caption for clicked image
  var $captionLocation = $(this).find(".caption").text();
  //Displays title under image
  $title.text($titleLocation);
  //Displays caption under title
  $caption.text($captionLocation);
  //Show the overlay
  $overlay.show();



});

//When x is clicked
$btnExit.on("click", function(){
  //Hide the overlay
  $overlay.hide();
  //Remove class "active"
  $("div.active").removeClass("active");
});


//Keyboard navigation
$(document).on("keydown", function(event) {
  if($("#overlay").css("display") !== 'none') {
    //Left
    if(event.which == "37") {
        navigate(-1);
      //Right
    } else if(event.which == "39") {
        navigate(1);
      //Esc
    } else if(event.which == "27"){
      //Hide the overlay
      $overlay.hide();
      //Remove class "active"
      $("div.active").removeClass("active");
    }
  }
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
    $("div.active").prev().find(".image").trigger("click");
  } else if (direction == 1) {  //right
    $("div.active").next().find(".image").trigger("click");
  }
}


// !!!!!!!!!!!!!!!! Search !!!!!!!!!!!!!!!!

(function() {                             // Lives in an IIFE
  var $imgs = $('.gallery img');          // Get the images
  var $search = $('#searchBox');      // Get the input element
  var cache = [];                         // Create an array called cache

  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function(img) {         // For each entry in cache pass image
      var index = 0;                      // Set index to 0

      if (query) {                        // If there is some query text
        index = img.text.indexOf(query);  // Find if query text is in there
      }

      $(img.element).parent().parent().toggle(index != -1);  // Show / hide
    });
  }

  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }

}());
