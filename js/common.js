
$(function(){
  var dropHover = $('.list-item'),
      toggleButton = $('.toggle-mnu'),
      fixMenu = $('.fix-menu'),
      dropMenu = $('.fix-menu-list-drop'),
      noneDrop = $('.none-drop'),
      cityDrop = $('.fa-angle-down'),
      firstCity = $('.city-first'),
      cityDropMenu = $('.fix-menu-list-city-dorop'),
      cityDropMenuItem = $('.fix-menu-list-city-dorop-item'),
      mouseIcon = $('.mouse-icon'),
      owlCaruselHor = $('.owl-horizont'),
      owlVertical = $('.owl-vertical');

  dropHover.on('mouseover',function() {
    dropMenu.removeClass('droped').addClass('none-droped');
    $(this).find(dropMenu).addClass('droped');
    $(this).find(dropMenu).on('mouseout',function () {
      $(this).removeClass('droped').addClass('none-droped');
    });
  });
  noneDrop.on('mouseover',function() {
    dropMenu.removeClass('droped').addClass('none-droped');
  });
  cityDrop.on('click',function() {
    cityDropMenu.slideToggle();
    cityDropMenuItem.on('click',function() {
      cityDropMenu.slideUp();
      firstCity.html($(this).clone());
    });
  });
  mouseIcon.on('click', function() {
    $('html,body').animate({
        scrollTop: $('#product').offset().top
      },500);
    });
  owlCaruselHor.owlCarousel({
    loop: true,
    items: 1,
    nav : true,
    navText:  [ '<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>' ],
    smartSpeed: 1000,
    autoplay: true,
    margin: 40,
    responsive : {
      760:{margin: 40}

    }
  });
  // owlVertical.owlCarousel({
  //   loop: true,
  //   items: 1,
  //   navClass: [ 'owl-prev', 'owl-next' ]
  // });
  $('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
  if(document.documentElement.clientWidth < 1198){
    fixMenu.addClass('fix-left');
  }
  toggleButton.on('click',function() {
    $(this).toggleClass("on");
    fixMenu.toggleClass("fix-left");
    $('.on').on('click',function(){
      dropMenu.removeClass('droped').addClass('none-droped')
    });
    });
});
