$(function() {
	if (window.location.pathname.match(/signed_documents/)) {
	  $('.sigPad').signaturePad({displayOnly:true}).regenerate(sig);
	}
});