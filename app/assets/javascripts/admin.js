$(function() {
	//delete button
	$('.delete-btn').on('click', function(){
		var action = confirm('Are you sure you want to delete this signed document entry?');
		$(this).closest('tr').velocity("fadeOut", { duration: 500 });
		if (action){
			deleteSignaturedNDA($(this).data('sid'));
		}
	});

	//ajax for deleting signature
	function deleteSignaturedNDA(sid){
		$.ajax({
		  url: "/signed_documents/" + sid,
		  method: "DELETE",
		  dataType: "json",
		  beforeSend: function() {
		    // Handle the beforeSend event
		  },
		  success: function(data) {
		    console.log('success');
		  },
		  error: function() {
		    //there isnt going to be any errors
		  }
		});
	}
});