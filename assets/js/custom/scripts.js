jQuery(document).ready(function($) {

	// header fade
	$(function() {
	   var header = $('#header');
	   setTimeout(function(){
	   	header.addClass('show');
	   },800);
	});

	//header background on scroll
	var header = $('#header');
	$(window).on('load scroll resize', function() {
	   var st2 = $(this).scrollTop();
		   		
	   if (st2 > 0) {
	      // console.log(st2);
	      header.addClass('scrolling');
	      
	   } else {
	   	header.removeClass('scrolling');
	   }

	});

    // for smooth scroll
	smoothScroll.init({
		selector: 'a', // Selector for links (must be a class, ID, data attribute, or element tag)
		speed: 500, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInQuad', // Easing pattern to use
		offset: 100 // Integer. How far to offset the scrolling anchor location in pixels
	});

	// for burger menu
	$('.mobile-menu-toggle, .mobile-menu-overlay').on('click', function(){
		$('.mobile-menu-toggle').toggleClass('active');
		$('.mobile-menu-wrap').toggleClass('showing');
		$(document.body).toggleClass('overflow');
	});

    // scroll active link
    var arrayAnchorBlock = $('.anchor-js');
    $(window).on('scroll', function(){
        var curPositionWindow = $(window).scrollTop(),
            curClickElement = $('.main-nav a');

        var arrayValuesPosAnchorElems = [];

        arrayAnchorBlock.each(function(){
            arrayValuesPosAnchorElems.push($(this).offset().top - 75);
        });

        arrayValuesPosAnchorElems.forEach(function(element, index){
            if(curPositionWindow >= element - 150) {
                curClickElement
                    .parent()
                    .eq(index)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            }
            else if(curPositionWindow < arrayValuesPosAnchorElems[0]) {
                curClickElement.parent().removeClass('active');
            }
        });
    });

    //animation section-products
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();

    // Create Animation
    var tween =[ TweenMax.from('.banner-animation-1', 1, { scale: 0, autoAlpha: 0}, '-=1') ];

    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
        triggerElement: '#banner',
        triggerHook: 1,
        //duration: winHeight,
        offset: 255 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tween)
        .addTo(scrollMagicController);

    //animation section-products
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();

    // Create Animation
    var tween =[ TweenMax.from('.product-animation-1', 1, { scale: 0.6, x: -50, autoAlpha: 0}, '-=1'),
        TweenMax.from('.product-animation-2', 1, { scale: 0.6, x: 50, autoAlpha: 0}, '-=1')];

    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
        triggerElement: '#products',
        triggerHook: 1,
        //duration: winHeight,
        offset: 255 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tween)
        .addTo(scrollMagicController);

	//animation section-services
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();

    // Create Animation
    var tween =[ TweenMax.from('.services-animation-1', 1, { scale: 0.6, autoAlpha: 0}, '-=1')];

    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
        triggerElement: '#services',
        triggerHook: 1,
        //duration: winHeight,
        offset: 255 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tween)
        .addTo(scrollMagicController);

    //animation section-about-us
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();

    // Create Animation
    var tween =[ TweenMax.from('.about-animation-1', 1, { scale: 0, autoAlpha: 0}, '-=1'),
        TweenMax.from('.about-animation-2', 1, { x: 50, autoAlpha: 0}, '-=1')];

    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
        triggerElement: '#about-us',
        triggerHook: 1,
        //duration: winHeight,
        offset: 255 /* offset the trigger 150px below #scene's top */
    })
        .setTween(tween)
        .addTo(scrollMagicController);
});