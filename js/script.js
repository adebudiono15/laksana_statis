$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({scrollTop: elemenTujuan.offset().top - 90
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});

$(window).on('load', function(){
	$('.display-4').addClass('muncul');
	$('.lead-dua').addClass('muncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();


	// Panel
	if (wScroll > $('.info-panel').offset().top -500) {
		$('.info-panel .col-lg-4').each(function(i){
			setTimeout(function(){
			 $('.info-panel .col-lg-4').eq(i).addClass('muncul');
			},400 * (i+1));	
		});
	}
});