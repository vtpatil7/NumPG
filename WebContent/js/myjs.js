$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

   

});


// function myFunction() {
// 	var x = window.matchMedia("(max-width: 700px)")
// 	var a = document.getElementById("main-nav");
// 	if (x.matches) 
// 	{ // If media query matches

// 		a.style.display="none";
		
// 	} 
// }


  


