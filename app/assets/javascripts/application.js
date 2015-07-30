//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(function() {
	"use strict";
	init();

	function init(){
		//start w/ step one
		stepOne();

		//step 1, entering full name
	  $('form.form-home .full-name').on("keyup", function(){
	  	if (($(this).val().length) > 0){
				$(this).closest('.form-home').find('.continue-btn').html('<input class="continue" type="submit" value="Continue">');
			}else{
				$(this).closest('form.form-home').find('.continue-btn').html('');
			}
		});

	  //step 1, clicking on enter
		$('.continue-btn').on('click', function(e){
			e.preventDefault();		
			stepTwo();
			$("p").each(function() {
		    var text = $(this).text();
		    var full_name = $('input[name="full-name"]').val().toLowerCase().capitalize();
		    text = text.replace(/\{full_name\}/g, full_name);
		    $(this).text(text);
			});
			//init signature pad
			$('.sigPad').signaturePad({drawOnly:true});
		});


		//submitting after signing
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

	//ajax for posting nda
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
	    success: function() {
	      stepThree();
	    },
	    error: function() {
	      //there isnt going to be any errors
	    }
	  });
	}
});
