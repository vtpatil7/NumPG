jQuery(document).ready(function($) {
//  upload images js
  $(document).ready(function() {
    $('input[type="file"]').on("change", function() {
      let filenames = [];
      let files = this.files;
      if (files.length > 1) {
        filenames.push("Total Files (" + files.length + ")");
      } else {
        for (let i in files) {
          if (files.hasOwnProperty(i)) {
            filenames.push(files[i].name);
          }
        }
      }
      $(this)
        .next(".custom-file-label")
        .html(filenames.join(","));
    });
  });
  
  // $(function () {
  //   $("#first_name, #second_name").bind("change keyup",
  // function () {      
  // if ($("#first_name").val() != "" && $("#second_name").val() != "")
  //     $(this).closest("form").find(":submit").prop('disabled', false);
  // else
  //     $('.terms_button').attr('disabled','disabled');    
  // });
  //   }); 

    
    
 
      $("#nextBtn").click(() => $(".carousel").carousel("next"));
      $("#nextBtn1").click(() => $(".carousel").carousel("next"));

      $("#prevBtn").click(() => $(".carousel").carousel("prev"));
      $("#prevBtn1").click(() => $(".carousel").carousel("prev"));
   

  //   $(function () {
  //     $('#first_name').keyup(function () {
  //         if ($(this).val() == '') {
  //             //Check to see if there is any text entered
  //             // If there is no text within the input ten disable the button
  //             $('.terms_button').prop('disabled', true);
  //         } else {
  //             //If there is text in the input, then enable the button
  //             $('.terms_button').prop('disabled', false);
  //         }
  //     });
  // }); 
    
  // jQuery('.left').click(function() {
  //   jQuery('#slider2-19').carousel('prev');
  // });
  
  // jQuery('.right').click(function() {
  //   jQuery('#nextBtn').carousel('next');
  // });
 // NEW FORM JS STARTS HERE................
 //NEW FORM JS ENDS HERE.............

  // var currentTab = 0; // Current tab is set to be the first tab (0)
  // showTab(currentTab); // Display the current tab
  
  // function showTab(n) {
  //   // This function will display the specified tab of the form...
  //   var x = document.getElementsByClassName("item");
  //   x[n].style.display = "block";
  //   //... and fix the Previous/Next buttons:
  //   if (n == 0) {
  //     document.getElementById("prevBtn").style.display = "none";
  //   } else {
  //     document.getElementById("prevBtn").style.display = "inline";
  //   }
  //   if (n == (x.length - 1)) {
  //     document.getElementById("nextBtn").innerHTML = "Submit";
  //   } else {
  //     document.getElementById("nextBtn").innerHTML = "Next";
  //   }
  //   //... and run a function that will display the correct step indicator:
  //   fixStepIndicator(n)
  // }
  
  // function nextPrev(n) {
  //   // This function will figure out which tab to display
  //   var x = document.getElementsByClassName("item");
  //   // Exit the function if any field in the current tab is invalid:
  //   if (n == 1 && !validateForm()) return false;
  //   // Hide the current tab:
  //   x[currentTab].style.display = "none";
  //   // Increase or decrease the current tab by 1:
  //   currentTab = currentTab + n;
  //   // if you have reached the end of the form...
  //   if (currentTab >= x.length) {
  //     // ... the form gets submitted:
  //     document.getElementById("regForm").submit();
  //     return false;
  //   }
  //   // Otherwise, display the correct tab:
  //   showTab(currentTab);
  // }
  
  // function validateForm() {
  //   // This function deals with validation of the form fields
  //   var x, y, i, valid = true;
  //   x = document.getElementsByClassName("tab");
  //   y = x[currentTab].getElementsByTagName("input");
  //   // A loop that checks every input field in the current tab:
  //   for (i = 0; i < y.length; i++) {
  //     // If a field is empty...
  //     if (y[i].value == "") {
  //       // add an "invalid" class to the field:
  //       y[i].className += " invalid";
  //       // and set the current valid status to false
  //       valid = false;
  //     }
  //   }
  //   // If the valid status is true, mark the step as finished and valid:
  //   if (valid) {
  //     document.getElementsByClassName("step")[currentTab].className += " finish";
  //   }
  //   return valid; // return the valid status
  // }
  
  // function fixStepIndicator(n) {
  //   // This function removes the "active" class of all steps...
  //   var i, x = document.getElementsByClassName("step");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].className = x[i].className.replace(" active", "");
  //   }
  //   //... and adds the "active" class on the current step:
  //   x[n].className += " active";
  // }



	'use strict';

      var owl = $("#owl-testimonials");
// FOR SERACH CAROUSEL
      var quantitiy=0;
      $('.quantity-right-plus').click(function(e){
           
           // Stop acting like a button
           e.preventDefault();
           // Get the field name
           var quantity = parseInt($('#quantity').val());
           
           // If is not undefined
               
               $('#quantity').val(quantity + 1 +" Sharing");
   
             
               // Increment
           
       });

       $(function() {
         
		var x = window.matchMedia("(max-width: 700px)")
		var a = document.getElementById("main-nav");
		if (x.matches) 
		{ // If media query matches
		
			$(".tt").click(function(){
				$(".collapse").collapse('toggle');
				//$("#login-form").delay(100).fadeIn(100);
			});
	
	
	} 
  });
  
  // $(document).ready(function() {
  //   $('.terms_button').prop('disabled', true);
  //   $(':input[type="text"]').keyup(function() {
  //      if($("#first_name").val() != "" && $("#second_name").val() != "") {
  //         $(':input[type="submit"]').prop('disabled', false);
  //      }
  //   });
  // });

    
   
        $('.quantity-left-minus').click(function(e){
           // Stop acting like a button
           e.preventDefault();
           // Get the field name
           var quantity = parseInt($('#quantity').val());
           
           // If is not undefined
         
               // Increment
               if(quantity>0){
               $('#quantity').val(quantity - 1+" Sharing");
               }
       });
       


        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});

// this is portfolio section js starts

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, filter;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   
  
  
    document.getElementById(pageName).style.display = "block";
  
  }
  
  document.getElementById("defaultOpen").click();


  // this is portfolio section js ends
  
//  this is register section js start

//  this is register section js ends

