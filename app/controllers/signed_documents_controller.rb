class SignedDocumentsController < ApplicationController
  before_action :set_signed_document, only: [:show, :edit, :update, :destroy]

  # GET /signed_documents
  # GET /signed_documents.json
  def index
    @signed_documents = SignedDocument.all
  end

  # GET /signed_documents/1
  # GET /signed_documents/1.json
  def show
  end

  # GET /signed_documents/new
  def new
    @signed_document = SignedDocument.new
  end

  # GET /signed_documents/1/edit
  def edit
  end

  # POST /signed_documents
  # POST /signed_documents.json
  def create
    @signed_document = SignedDocument.new(signed_document_params)

    respond_to do |format|
      if @signed_document.save
        format.html { redirect_to @signed_document, notice: 'Signed document was successfully created.' }
        format.json { render :show, status: :created, location: @signed_document }
      else
        format.html { render :new }
        format.json { render json: @signed_document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /signed_documents/1
  # PATCH/PUT /signed_documents/1.json
  def update
    respond_to do |format|
      if @signed_document.update(signed_document_params)
        format.html { redirect_to @signed_document, notice: 'Signed document was successfully updated.' }
        format.json { render :show, status: :ok, location: @signed_document }
      else
        format.html { render :edit }
        format.json { render json: @signed_document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /signed_documents/1
  # DELETE /signed_documents/1.json
  def destroy
    @signed_document.destroy
    respond_to do |format|
      format.html { redirect_to signed_documents_url, notice: 'Signed document was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_signed_document
      @signed_document = SignedDocument.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def signed_document_params
      params.require(:signed_document).permit(:document_id, :signer_name, :signer_signature)
    end
end
