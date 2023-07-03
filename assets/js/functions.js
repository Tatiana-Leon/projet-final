
//1.  menu-fluide
$( document ).ready(function() {
	
	function nav(){
		
		$('.nav-toggle').click(function(){
			
			$('.nav').toggleClass('open');
			
		});
	
		$('.nav a').click(function(event) {
			event.preventDefault();
	  
			const targetId = $(this).attr('href');
			const targetPosition = $(targetId).offset().top;
	  
			$('html, body').animate(
			  {
				scrollTop: targetPosition
			  },
			  'fluide',
			);
		  });
		
	}
	
	nav();
	
	});
	
