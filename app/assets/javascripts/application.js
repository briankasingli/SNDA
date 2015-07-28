// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(function() {
  $('form .full-name').on("keyup", function(){
  	if (($(this).val().length) > 0){
			$(this).closest('.form-home').find('.submit').html('<input class="continue" type="submit" value="Continue">');
		}else{
			$(this).closest('.form-home').find('.submit').html('');
		}
	});
	$('.submit').on('click', function(e){
		e.preventDefault();		
		$('.col-sm-8').empty();
		$('.col-sm-8').append('shit')
	});
});
