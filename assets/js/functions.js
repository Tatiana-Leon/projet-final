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
	
	//2.  slider
	
	document.addEventListener('DOMContentLoaded', function() {
		var slider = document.getElementById('full-slide');
		var slides = Array.from(slider.querySelectorAll('.banner li'));
		var currentIndex = slides.findIndex(function(slide) {
		  return slide.classList.contains('active');
		});
	  
		function showSlide(index) {
		  slides.forEach(function(slide) {
			slide.classList.remove('active');
		  });
	  
		  slides[index].classList.add('active');
		}
	  
		function nextSlide() {
		  currentIndex = (currentIndex + 1) % slides.length;
		  showSlide(currentIndex);
		}
	  
		function prevSlide() {
		  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		  showSlide(currentIndex);
		}
	  
		slider.querySelector('.next').addEventListener('click', nextSlide);
		slider.querySelector('.prev').addEventListener('click', prevSlide);
	  
		showSlide(currentIndex);
	  });