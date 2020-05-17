$(function() {
   

	$('.popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>What\'s up? </small>';
			}
		}
	});

	$('.modal-btn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.modal__close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	

	$('.fade').slick({
        infinite: true,
        slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.png" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.png" alt="">',    
		
	});
	

	$('.yourfile').change(function() {
		if($(this).val() != '') {
			$(this).prev().css('background-color', 'rgba(255, 199, 0, 0.26)');
			$(this).prev().prev().text('Выбрано файлов: ' + $(this)[0].files.length);
		}
	});


	$('.footer__center a, .header__top-nav li a:nth-child(1)').on('click', function() {
		var elementClick = $(this).attr('href');
		var destination = $(elementClick).offset().top-0;
		$('html, body').animate({scrollTop: destination}, 600);
		return false;
	});


	$('.nav-btn').on('click', function() {
		var ml = $('.header__top-nav').css('margin-left');
		if(ml < '-2') {
			$('.header__top-nav').animate(
				{'margin-left': '-2px'},500
			)
		} else {
			$('.header__top-nav').animate(
				{'margin-left': '-145px'},100
			)
		}
	});
});