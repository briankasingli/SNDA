$(function() {
	"use strict";
	//datatables settings
	$('#signed_documents').dataTable( {
	  responsive: true,
	  "lengthMenu": [ [25, 50, 100, 250, -1], [25, 50, 100, 250, "All"] ],

	  "oLanguage": {
	  "sLengthMenu": '_MENU_',
	  "sSearch": "_INPUT_"
	  }
	});

	//datatables editing placeholder values
	$('.dataTables_filter input').attr("placeholder", "Search");

	//overwriting the string prototype
	String.prototype.capitalize = function(){
		return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase();
		});
	};
	
});