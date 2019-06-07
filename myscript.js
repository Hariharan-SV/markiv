jQuery(function($) {
  $(function(){
  	var $animatables=$('.animatable');
    if(document.body.clientHeight<$(window).innerHeight())
    {
    	$animatables.addClass("animate-in");
    }
    $(document).on('scroll',function(){
          $animatables.each(function(i){

              if($(document).scrollTop()<= document.body.clientHeight-$(window).innerHeight())
              {
                  if($(this).offset().top < $(document).scrollTop()+100)
                  {
											 if (!$(this).hasClass('animate-in')) {
													$(this).removeClass('animate-out').css('top', $(this).css('top')).addClass('animate-in');
												}
                  }

									else if ($(this).offset().top  > $(document).scrollTop()+100) {

        						if ($(this).hasClass('animate-in')) {
          						$(this).removeClass('animate-in').css('top', $(this).css('top')).addClass('animate-out');
        						}

      						}
              }
              if($(document).scrollTop()>= document.body.clientHeight-$(window).innerHeight())
              {
									if (!$(this).hasClass('animate-in')) {	
										$(this).removeClass('animate-out').css('top', $(this).css('top')).addClass('animate-in');
									}
              }
          });
     });
  });
});
