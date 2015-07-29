class SignedDocumentsController < ApplicationController

  def create
     respond_to do |format|
      @signed_document = SignedDocument.new(signed_document_params)
      if @signed_document.save(signed_document_params)
        format.html { render json: @signed_document }
        format.json { render json: @signed_document }
      else
        format.json { render json: @thing.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  private

    def signed_document_params
      params.require(:signed_document).permit(
        :nda_id,
        :nda, 
        :signature,
        :full_name
        )
    end
end
