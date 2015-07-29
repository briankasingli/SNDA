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

init();

function init(){
	//start w/ step one
	stepOne();

  $('form.form-home .full-name').on("keyup", function(){
  	if (($(this).val().length) > 0){
			$(this).closest('.form-home').find('.continue-btn').html('<input class="continue" type="submit" value="Continue">');
		}else{
			$(this).closest('form.form-home').find('.continue-btn').html('');
		}
	});

	$('.continue-btn').on('click', function(e){
		e.preventDefault();		
		stepTwo();
		$("p").each(function() {
	    var text = $(this).text();
	    var full_name = $('input[name="full-name"]').val().toLowerCase().capitalize();
	    text = text.replace(/\{full_name\}/g, full_name);
	    $(this).text(text);
		});
	});

	$('.sigPad').signaturePad({drawOnly:true});

	$( "form.sigPad" ).submit(function(e) {
		e.preventDefault();
		var nda_id = $('input[name="document_id"]').val();
    var nda = $('.nda').html();
    var signature = $('input[name="output"]').val();
    var full_name = $('input[name="full-name"]').val();
		if ($('input[name="output"]').val().length > 0){
			postSignatureNDA(nda_id, nda, signature, full_name);
		}else{
			console.log('signature unsigned');
		}
	});
}

	function stepOne(){
		$('.step2').hide();
		$('.step3').hide();
	}
	function stepTwo(){
		$('.step1').hide();
		$('.step2').show();
		$('.spacers').hide();
	}
	function stepThree(){
		$('.step1').hide();
		$('.step2').hide();
		$('.step3').show();
		$('.spacers').show();
		$('#signaturePop').modal('hide');
	}

	function postSignatureNDA(nda_id, nda, signature, full_name) {
	  $.ajax({
	    url: "/signed_documents",
	    method: "POST",
	    data: {
	      signed_document: {
	        nda_id: nda_id,
	        nda: nda,
	        signature: signature,
	        full_name: full_name
	      }
	    },
	    beforeSend: function() {
	      // Handle the beforeSend event
	    },
	    success: function(data) {
	      stepThree();
	    },
	    error: function() {
	      alert("Error");
	    }
	  });
	}
});
