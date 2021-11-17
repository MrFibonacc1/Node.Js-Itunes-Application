// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})



function openLoginForm(){
	document.body.classList.add("showLoginForm");
  }
  function closeLoginForm(){
	document.body.classList.remove("showLoginForm");
  }
  
  function openSignupForm(){
	document.body.classList.add("showSignupForm");
  }
  function closeSignupForm(){
	document.body.classList.remove("showSignupForm");
  }
  
  
