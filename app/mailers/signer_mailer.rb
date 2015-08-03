class SignerMailer < ActionMailer::Base

  default from: "\"Electronic NDA\" <ruby@brianli.ca>"

  def signed_nda(signed_nda)    
		generatePDF(signed_nda)
		mail(:to => 'brian.kasing.li@gmail.com', :subject => "#{signed_nda.full_name}, Here is your signed NDA")
  end

  private 

  def generatePDF(signed_nda)
  	pdf = Prawn::Document.new
		@array_paragraphs = signed_nda.nda.gsub('\n','').gsub('\t', '').gsub('</p><p>', 'CCCCC').gsub('<p>', '').gsub('</p>','').split("CCCCC")

		@array_paragraphs.each do |paragraph|
			pdf.text("#{paragraph}")
			pdf.text("\n")
		end

		data_url = signed_nda.signture_image
		png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
		File.open('signature.png', 'wb') { |f| f.write(png) }

		signature = "./signature.png" 
		pdf.image signature, :at => [40,170], :width => 450

		attachments["#{signed_nda.full_name}.pdf"] = { :mime_type => 'application/pdf', :content => pdf.render }
  end

end



