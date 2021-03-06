$(function() {
	"use strict";

	//update NDA button
	$('.update-nda').on('click', function(e){
		e.preventDefault();
		$('#editNdaPop').modal('hide');
		var nda_id = $('.nda_id').val();
		var nda = $('#nda_nda').val();
		updateNDA(nda_id, nda);
	});

	//ajax for updating nda
	function updateNDA(nda_id, nda){
		$.ajax({
		  url: "/ndas/" + nda_id,
		  method: "PATCH",
		  data: {
	      ndas: {
	      	nda_id: nda_id,
	        nda: nda
	      }
	    },
		  dataType: "json",
		  success: function() {
		    console.log('success');
		  },
		  error: function() {
		    //there isnt going to be any errors
		  }
		});
	}

	//delete button
	$('.delete-btn').on('click', function(e){
		e.preventDefault();
		var action = confirm('Are you sure you want to delete this signed document entry?');
		if (action){
			$(this).closest('tr').velocity("fadeOut", { duration: 500 });
			deleteSignaturedNDA($(this).data('sid'));
		}
	});

	//ajax for deleting signature
	function deleteSignaturedNDA(sid){
		$.ajax({
		  url: "/signed_documents/" + sid,
		  method: "DELETE",
		  dataType: "json",
		  success: function() {
		    console.log('success');
		  },
		  error: function() {
		    //there isnt going to be any errors
		  }
		});
	}
});