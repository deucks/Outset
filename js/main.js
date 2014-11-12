//some variables
var pwidth;
var pheight;
var backgroundCount = 0;
var timer = 20000;



//when the document has loaded
$(document).ready(function(){
	
	//some preconfig, getting the browser container details also setting the fadingout the options
	//also setting the timer.
	$(".topOver").fadeOut();	
	document.getElementById('timer').value = timer/1000;	
	pwidth = $(window).width();
	pheight = $(window).height();
	$('#allContent').mouseleave(showDetailsEnd);

	
	
	//the timer
	changeImage();
	
	//when the window is resized, it will update the width and height
	$(window).resize(function(){
		pwidth = $(window).width(); 
		pheight = $(window).height();
	});
});

//function for changing the image to the next one, including the new dimensions
//also includes fadeIn and fadeOut animations
function changeImage()
{

	$("#mainImage").fadeOut();
	
	//check if the blur checkbox is ticked
	if (document.getElementById('blur').checked) {
        $('#mainImage').attr('src', 'https://unsplash.it/' + pwidth + '/' + pheight + '/?random&blur&' + backgroundCount);
    } else {
		$('#mainImage').attr('src', 'https://unsplash.it/' + pwidth + '/' + pheight + '/?random&' + backgroundCount);
	}
	
	//when image loaded, start the timer and show image
	$('#mainImage').on('load', function(){
		$("#mainImage").fadeIn();
		restartTimer();
	});
	backgroundCount++;
}

//when hovering over an image show the details.
function showDetails()
{
	$(".topOver").fadeIn();
}


//when not hovering over an image hide details.
function showDetailsEnd()
{	
	$(".topOver").fadeOut();
}

//when the timer is changed, set the new timer variable to what the user has entered, no input validation though
function setTimer()
{	
	var value = document.getElementById('timer').value;
	timer = value * 1000;
}

//basically to start the timer for the clock
function restartTimer()
{
	timePrompt = setTimeout(function(){
		changeImage();	
	}, timer);
}
