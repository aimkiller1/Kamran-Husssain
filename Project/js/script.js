


$(function(){
	 $(window).scroll(function(event){
     var y = $(this).scrollTop();
     if(y>=100){
     	$('.nav-custom1').slideDown();
     }
     else{
     	$('.nav-custom1').hide();
     }
     if(y>=300&&y<1180){
     	$('.slide1').addClass('animated rollin');
     }
     if(y>=1200){
     	$('.slide2').addClass('animated rollin');
     }
    });
	 $('.touch').on('click',function(event){
      $('.search').slideDown();
	 });
	 $('.touch1').on('click',function(event){
      $('.search').slideDown();
	 });
	 $('.close-search2').on('click',function(event){
      $('.search').slideUp();
    event.preventDefault();
	 });
	  $('.close-search1').on('click',function(event){
      $('.search').slideUp();
      event.preventDefault();
	 });
	 var form = $("#form");
	$(".modal-title").css("text-color","black");
	 var inputFields = $("input:text, input:password, textarea");
    inputFields.focus(function(){
    $(this).css("box-shadow","0 0 20px grey");
    });
     inputFields.blur(function(){
    $(this).css("box-shadow","none");
    });
    quickresponse(form);
   $('.navbar-custom li').click(function(){
 		$(this).addClass('active').siblings().removeClass('active');
 		$('.navbar-custom li a').css('background','none');
 	});

    //............  slide Text Box......................................//
 $('.custom-caption h1').addClass('animated slideInDown'); 
  $('.custom-caption p').addClass('animated slideInUp'); 
   $('.custom-caption button').addClass('animated slideInUp');                       

$('.header-custom a').on('mouseenter',function(){
$('.header-custom a').addClass('animated zoomIn');

});
$('.header-custom a').on('mouseleave',function(){
$('.header-custom a').removeClass('animated zoomIn');

});

$('.btn-circle-small').on('mouseenter',function(){
$(this).addClass('animated rotateIn');
});
$('.btn-circle-small').on('mouseleave',function(){
	$(this).removeClass('animated rotateIn');
$(this).addClass('animated rubberBand');
});

$('.product').on('mouseenter',function(){
$(this).find('.custom-caption2').show();
$(this).find('button').show();
});
$('.product').on('click','button', function(){
	$(this).find('span').toggleClass('fa-heart fa-check');
});
$('.product').on('mouseleave',function(){
$('.product').find('button').hide();
});
});

$('button').on('mouseenter',function(){
	$(this).addClass('animated rotateIn')
});
$('button').on('mouseleave',function(){
	$(this).removeClass('animated rotateIn')
});
$('.custom-caption').removeClass('animated bounceInDown');

//........................................................................//
jQuery('.carousel[data-type="multi"] .item').each(function(){
		var next = jQuery(this).next();
		if (!next.length) {
			next = jQuery(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo(jQuery(this));
	  
		for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = jQuery(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
	});




//..........................................................................//
	$("#form").submit(function(event){
		//alert("working!");
		var name = $("#name").val();
		var password = $("#password").val();
		var comment = $("#comment").val();
        Checkname(name,event);
        Checkpassword(password,event);
        Checkcomment(comment,event);
	});
function quickresponse(formElement){
	var nameInput = formElement.find("#name");
	var passwordInput = formElement.find("#password");
	var commentInput = formElement.find("#comment");
	nameInput.blur(function(event){
		var name = $(this).val();
		Checkname(name,event);
		if(!isname(name)){
	   $(this).css("box-shadow", "0 0 20px red");
	  // $("#name-feedback").text("*Please Enter at least 2 characters in the name field");
	}else{
		$(this).css("box-shadow","0 0 20px green");
	}

	});
    	passwordInput.blur(function(event){
		var password = $(this).val();
		Checkpassword(password,event);
		if(!isname(password)){
	   $(this).css("box-shadow", "0 0 20px red");
	}else{
		$(this).css("box-shadow","0 0 20px green");
	}

	});
    	commentInput.blur(function(event){
		var comment = $(this).val();
		Checkcomment(comment,event);
		if(!isname(comment)){
	   $(this).css("box-shadow", "0 0 20px red");
	}else{
		$(this).css("box-shadow","0 0 20px green");
	}

	});
}


function Checkname(name,event){
	if(!isname(name)){
	$("#name-feedback").text("*Please Enter at least 2 characters in the name field");
		event.preventDefault();
	}else{
		$("#name-feedback").text("");
	}
}

function Checkpassword(password,event){
	if(!ispassword(password)){
     $("#password-feedback").text("*password should contain atleast 6 characters and a number ");
		event.preventDefault();
	}else{
		$("#password-feedback").text("");
	}
}
function Checkcomment(comment,event){
	if(!iscomment(comment)){
     $("#comment-feedback").text("*please enter the comment in the above section");
		event.preventDefault();
	}else{
		$("#comment-feedback").text("");
	}
	}

function isname(name){
	return name.length>=2;
}

function ispassword(password){
	return password.length>=6 && /.*[0-9&A-Z].*/.test(password);
}
function iscomment(comment){
	return comment.trim() != "";
}
