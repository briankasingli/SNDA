//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(function() {
	"use strict";
	init();

	function init(){
		//start w/ step one
		renderStepOne();

		//step 1, entering full name
	  $('form.form-home .full-name').on("keyup", function() {
		  if (($(this).val().length) > 0) {
		    $(this).closest('.form-home').find('.continue-btn').html('<input class="continue" type="submit" value="Continue">');
		    continueStepTwo();
		  } else {
		    $(this).closest('form.form-home').find('.continue-btn').html('');
		  }
		});

		//step 2, entering full name
		$('form.form-home .email-address').on("keyup", function() {

			//entering email
		  $('input.email-address').on("keyup", function() {
		    $('input.validate-email-address').val('');
		    $(this).removeClass('vce');
		    $('input.email-address').removeClass('vce');
		    $(this).closest('form.form-home').find('.continue-btn').html('');

		    //display validate email input
		    if (($(this).val().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/))) {
		      $(this).closest('.form-home').find('.verify-email-address').html('<input name="validate-email-address" class="validate-email-address" type="email" placeholder="Verify Email Address" maxlength="200" autocomplete="off" />');

		      //validate email
		      $('input.validate-email-address').on("keyup", function() {
		        var email = $('input.email-address').val();
		        console.log('working');
		        if (email === $(this).val()) {
		          $(this).addClass('vce');
		          $('input.email-address').addClass('vce');
		          $(this).closest('.form-home').find('.continue-btn').html('<input class="continue" type="submit" value="Continue">');
		          continueStepThree();
		        } else {
		          $(this).removeClass('vce');
		          $('input.email-address').removeClass('vce');
		          $(this).closest('form.form-home').find('.continue-btn').html('');
		        }
		      });
		    } else {
		      $(this).closest('.form-home').find('.verify-email-address').html('');
		    }
		  });
		});
		
		//submitting after signing
		$( "form.sigPad" ).submit(function(e) {
			e.preventDefault();
			var nda_id = $('input[name="document_id"]').val();
	    var nda = $('.nda').html();
	    var signature = $('input[name="output"]').val();
	    var full_name = $('.step1 input').val();
	    var email = $('.step2 input').val();
			if ($('input[name="output"]').val().length > 0){
				var canvas = document.getElementById('canvas');
				var ctx = canvas.getContext("2d");
				var signture_image =  canvas.toDataURL('image/png');
				postSignatureNDA(nda_id, nda, signature, signture_image, full_name, email);
			}else{
				console.log('signature unsigned');
			}
		});
	}

	//Validations to continue to step 2
	function continueStepTwo() {
	  $('.continue').on('click', function(e) {
	    e.preventDefault();
	    if ($('input[name="full-name"]').val().match(/script/)) {
	      alert('Your trying to inject javascript');
	      return false;
	    }
	    renderStepTwo();
	  });
	}

	//Validations to continue to step 3
	function continueStepThree() {
	  $('.continue').on('click', function(e) {
	    e.preventDefault();
	    $("p").each(function() {
	      var text = $(this).text();
	      var full_name = $('.step1 input').val().toLowerCase().capitalize();
	      text = text.replace(/\{full_name\}/g, full_name);
	      $(this).text(text);
	    });
	    //init signature pad
	    $('.sigPad').signaturePad({
	      drawOnly: true,
	      drawBezierCurves: true,
	      lineTop: 100,
	      lineColour: '#F6F6F6'
	    });
	    renderStepThree();
	  });
	}

	//rendering steps
	function renderStepOne(){
		$('.step2').hide();
		$('.step3').hide();
		$('.step4').hide();
	}

	function renderStepTwo(){
		$('.step1').hide();
		$('.step2').show();
		$('.step3').hide();
		$('.step4').hide();
		$('.spacers').show();
	}

	function renderStepThree(){
		$('.step1').hide();
		$('.step2').hide();
		$('.step3').show();
		$('.step4').hide();
		$('.spacers').hide();
	}

	function renderStepFour(){
		$('.step1').hide();
		$('.step2').hide();
		$('.step3').hide();
		$('.step4').show();
		$('.spacers').show();
		$('#signaturePop').modal('hide');
	}

	//ajax for posting nda
	function postSignatureNDA(nda_id, nda, signature, signture_image, full_name, email) {
	  $.ajax({
	    url: "/signed_documents",
	    method: "POST",
	    data: {
	      signed_document: {
	        nda_id: nda_id,
	        nda: nda,
	        signture_image: signture_image,
	        signature: signature,
	        full_name: full_name,
	        email: email
	      }
	    },
	    success: function() {
	      renderStepFour();
	    },
	    error: function() {
	      //there isnt going to be any errors
	    }
	  });
	}
});
