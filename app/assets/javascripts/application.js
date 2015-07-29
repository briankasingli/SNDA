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


	 if (window.location.pathname.match(/signed_documents/)) {
      $('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
    }
	$('#signed_documents').dataTable( {
	    responsive: true,
	    "lengthMenu": [ [25, 50, 100, 250, -1], [25, 50, 100, 250, "All"] ],

	    "oLanguage": {
	    "sLengthMenu": '_MENU_',
	    "sSearch": "_INPUT_"
	    }
	});
	$('.dataTables_filter input').attr("placeholder", "Search");

	stepOne();
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
		$('#signaturePop').modal('hide')
	}
	String.prototype.capitalize = function(){
		return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase();
		} );
	};

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
	    text = text.replace(/\[INSERTNAMEHERE\]/g, full_name);
	    $(this).text(text);
		});
	});

	$('.sigPad').signaturePad({drawOnly:true});
	$( "form.sigPad" ).submit(function( event ) {
		event.preventDefault();
		if ($('input[name="output"]').val().length > 0){
		 $.ajax({
	    url: "/signed_documents",
	    method: "POST",
	    data: {signed_document:{
	      nda_id: $('input[name="document_id"]').val(),
	      nda: $('.nda').html(),
	      signature: $('input[name="output"]').val(),
	      full_name: $('input[name="full-name"]').val()
	    }},
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

		}else{
			console.log('signature unsigned');
		}
	});

	$('.modal-footer button')
});
