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

    $('.section-services').parallax({ speed: 0.5 });

    function  animation() {
        //set duration for animation
        var duraion = 0.5,
            duraionHero = 1;
        //set offset
         var offset = 60;

        // Init ScrollMagic Controller
        var scrollMagicController = new ScrollMagic();

        // Create Animation for section-products
        var bannerAnimationImg = [TweenMax.from('.banner-animation-img', duraionHero, { scale: 0, autoAlpha: 0}, '-=1')],
            bannerAnimationText = [TweenMax.from('.banner-animation-text', duraionHero, { x: -50, autoAlpha: 0}, '-=1')],
            tweenProductsLeft = [TweenMax.from('.product-animation-left', duraion, { scale: 0.6, x: -50, autoAlpha: 0}, '-=1')],
            tweenProductsRight = [TweenMax.from('.product-animation-right', duraion, { scale: 0.6, x: 50, autoAlpha: 0}, '-=1')],
            tweenServices = [TweenMax.from('.services-animation', duraion, { scale: 0.6, autoAlpha: 0}, '-=1')],
            tweenAboutUsImg = [TweenMax.from('.about-animation-img', duraion, { scale: 0, autoAlpha: 0}, '-=1')],
            tweenAboutUsText = [TweenMax.from('.about-animation-text', duraion, { x: 50, autoAlpha: 0}, '-=1')];

        // Create the Scene and trigger when visible
        var scene = new ScrollScene({triggerElement: '.banner-animation-img', triggerHook: 1, offset: offset, reverse:false}).setTween(bannerAnimationImg).addTo(scrollMagicController);
        var scene = new ScrollScene({triggerElement: '.banner-animation-text', triggerHook: 1, offset: offset, reverse:false}).setTween(bannerAnimationText).addTo(scrollMagicController);
        var scene = new ScrollScene({triggerElement: '.product-animation-left', triggerHook: 1, offset: offset, reverse:false}).setTween(tweenProductsLeft).addTo(scrollMagicController);
        var scene = new ScrollScene({triggerElement: '.product-animation-right', triggerHook: 1, offset: offset, reverse:false}).setTween(tweenProductsRight).addTo(scrollMagicController);
        var scene = new ScrollScene({triggerElement: '.services-animation', triggerHook: 1, offset: offset, reverse:false}).setTween(tweenServices).addTo(scrollMagicController);
        var scene = new ScrollScene({triggerElement: '.about-animation-img', triggerHook: 1, offset: offset, reverse:false}).setTween(tweenAboutUsImg).addTo(scrollMagicController);
        var scene = new ScrollScene({triggerElement: '.about-animation-text', triggerHook: 1, offset: offset, reverse:false}).setTween(tweenAboutUsText).addTo(scrollMagicController);

    }

    animation();

});