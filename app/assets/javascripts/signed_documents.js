$(function() {
	"use strict";
	//regenerate signature if its the show page
	if (window.location.pathname.match(/signed_documents/)) {
		$('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
	}
});