##clean paragraphs
@array_paragraphs = @signed_document.nda.gsub('\n','').gsub('\t', '').gsub('</p><p>', 'CCCCC').gsub('<p>', '').gsub('</p>','').split("CCCCC")

##render paragraphs
@array_paragraphs.each do |paragraph|
	pdf.text("#{paragraph}")
	pdf.text("\n")
end

##render image
data_url = @signed_document.signture_image
png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
File.open('signature.png', 'wb') { |f| f.write(png) }

signature = "./signature.png" 
image signature, :at => [40,170], :width => 450