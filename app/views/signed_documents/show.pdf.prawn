@array_paragraphs = @signed_document.nda.gsub('\n','').gsub('\t', '').gsub('</p><p>', 'CCCCC').gsub('<p>', '').gsub('</p>','').split("CCCCC")

@array_paragraphs.each do |paragraph|
	pdf.text("#{paragraph}")
	pdf.text("\n")
end