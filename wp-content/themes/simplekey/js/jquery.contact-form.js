/*
 * Contact Form Jquery
 * Inspired by http://trevordavis.net/blog/wordpress-jquery-contact-form-without-a-plugin
*/

jQuery(document).ready(function($){
	$('form#contactForm').submit(function() {
		$('.error').remove();
		var hasError = false;
		$('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
				var labelText = $(this).attr('placeholder');
				if($('.error')!==''){
				  $(this).parent().before('<span class="error">You forgot to enter '+labelText+'.</span>');
				}
				hasError = true;
			} else if($(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim($(this).val()))) {
					var labelText = $(this).attr('placeholder');
					if($('.error')!==''){
					  $(this).parent().before('<span class="error">You entered an invalid '+labelText+'.</span>');
					}
					hasError = true;
				}
			}
		});
		if(!hasError) {	
			$('#contactForm #submitMsg').fadeOut('normal', function() {
				$(this).parent().append('<img src="'+loadimg+'" alt="Loading&hellip;" />');
			});
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contactForm').slideUp("fast", function() {		   
					$(this).before('<span class="success">Thank you. I\'ll reply as soon as possible.</span>');
				});
			});
		}
		
		return false;
		
	});
});
