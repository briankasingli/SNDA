class SignedDocumentsController < ApplicationController

  def show
    authenticate_user!
    @signed_document = SignedDocument.find(params[:id])
  end

  def create
     respond_to do |format|
      @signed_document = SignedDocument.new(signed_document_params)
      
      if @signed_document.save(signed_document_params)
        format.html { render json: @signed_document }
      else
        format.json { render json: @thing.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    SignedDocument.find(params[:id]).destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

    def signed_document_params
      params.require(:signed_document).permit(
        :nda_id,
        :nda, 
        :signature,
        :signture_image,
        :full_name,
        :email
        )
    end
end
