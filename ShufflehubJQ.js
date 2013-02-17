$(document).ready(function() {
	
	//shows the filter div
	$("#fltrbtn").click(function() {
		$("#second").fadeIn('slow');
	}); 
	
	// hides the filter div
	$("#fltrhidebtn").click(function() {
		$("#second").fadeOut('slow');
	});

	//changes background of filter boxes when clicked
	$(".filtergrid").click(function() {
	 	$(this).toggleClass("off");
	 });

	//shows the share div
	$(".share").click(function() {
		$(".third").fadeIn('slow');
	}); 

	// hides the share div
	$(".close").click(function() {
		$(".third").fadeOut('slow');
	});


	


	var images = ['bg1.png', 'bg2.png', 'bg5.png'];

	$('#shflbtn').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


	var images = ['bgb1.png', 'bgb4.png', 'bgb6.png', 'bgb7.png'];

	$('#fltrhidebtn').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


	var images = ['fb2.png', 'fb3.png', 'fb4.png', 'fb5.png'];

	$('#fb').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


	var images = ['tw1.png', 'tw2.png', 'tw3.png', 'tw4.png'];

	$('#tw').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


	var images = ['pin1.png', 'pin2.png', 'pin3.png', 'pin4.png', 'pin5.png', 'pin6.png', 'pin7.png'];

	$('#pin').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});


	});