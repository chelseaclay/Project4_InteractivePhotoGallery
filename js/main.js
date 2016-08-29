// !!!!!!!!!!!!!!!! Transtions wait until after page load !!!!!!!!!!!!!!!!

$(document).ready(function(){
  $("body").removeClass("preload");
});

// !!!!!!!!!!!!!!!! Lightbox !!!!!!!!!!!!!!!!


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $btnPrev = $('<button id="btnPrev" type="button"> < </button>');
<<<<<<< HEAD
var $btnNext = $('<button id="btnNext" type="button"> > </button>');
var $btnExit = $('<button id="btnExit" type="button"> x </button>');

// Add image to overlay
=======
var $btnNext = $('<button id="btnNext" type="button"> > </button>')
var $btnExit = $('<button id="btnExit" type="button"> x </button>')
//Add image to overlay
>>>>>>> master
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);
//Add left button to overlay
$overlay.append($btnPrev);
//Add right button to overlay
$overlay.append($btnNext);
<<<<<<< HEAD

$overlay.append($btnExit);
//Add overlay to body

//Add overlay
=======
//Add exit button to overlay
$overlay.append($btnExit);
//Add overlay to body
>>>>>>> master
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
  //Finding caption for clicked image
  var $captionLocation = $(this).find(".title").text();
  //Dispalays caption under image
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

<<<<<<< HEAD
=======
});



$(document).on("keydown", function(event) {

  if($("#overlay").css("display") !== 'none') {
    //Left
    if(event.which == "37") {
        navigate(-1);
      //Right
    } else if(event.which == "39") {
        navigate(1);
    }
  }

>>>>>>> master
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
<<<<<<< HEAD
    $("div.active").parent(".gallery").siblings().prev(".link").attr("href").trigger("click");
  } else if (direction == 1) {  //right
    $("div.active").parent(".gallery").siblings().next(".link").attr("href").trigger("click");
=======
    $("div.active").prev().find(".image").trigger("click");
  } else if (direction == 1) {  //right
    $("div.active").next().find(".image").trigger("click");
>>>>>>> master
  }
}


// var $overlay = $('<div id="overlay"></div>');
// var $image = $('<img id = "overlayImg"></img>');
// var $nextImage = $("<img>");
//
// $("body").append($overlay);  //adds the overlay to your body
// $("body").append($image);   //adds the empty overlay image container to your body
//
// $(".gallery").click(function(){  //triggers when you click on one of your gallery images
//     event.preventDefault(); //prevent link from opening in new window
//     $overlay.show(); //show the overlay over your body
//     $('.arrows').show();  //show your previous and next buttons
//     getCurrentImage(this);   //call the function that captures information about the image container you clicked on
//     $image.show();  //show the image you clicked on
// });
//
//
// $('.next').click(function(event) {  //triggers when you click on your next button
//     getNextImage();  //call the function that captures information about the next image inline to be shown
//     $image.show();  //shows the next image
// });
//
// function getCurrentImage (currentImage) {  //receive the image container that was clicked on
//     thisImage = $(currentImage).children().find("a");    //identify the child of the image container i.e. the image itself
//     thisImageLocation = $(thisImage).attr("href");  //capture the href/src information of the image that was clicked
//     $image.attr("src", thisImageLocation);    //update your overlay image info to reflect the image that was clicked
// }
//
//
// function getNextImage() {
//     nextImageParent = $(thisImage).parent().next();  //get the image container of the next image
//     nextImage = $(nextImageParent).children();  //identify the child of the next image container i.e. the second (then 3rd, 4th, etc.) image
//     nextImageLocation = $(nextImage).attr("href");   //capture the href/src information of the second image
//     $image.attr("src", nextImageLocation);    //update your overlay image info to reflect the next image
//     getCurrentImage(nextImageParent);  //call the function that captures information about your new current image
// }
//
//
// $overlay.click(function(){ //hides the overlay and image when you click out
//     $overlay.hide();
//     $image.hide();
//     $image.attr("src", "");
//     $('.arrows').hide();
// });
