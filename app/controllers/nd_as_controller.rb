class NdAsController < ApplicationController
  before_action :set_nda, only: [:show, :edit, :update, :destroy]

  # GET /ndas
  # GET /ndas.json
  def index
    @ndas = Nda.all
  end

  # GET /ndas/1
  # GET /ndas/1.json
  def show
  end

  # GET /ndas/new
  def new
    @nda = Nda.new
  end

  # GET /ndas/1/edit
  def edit
  end

  # POST /ndas
  # POST /ndas.json
  def create
    @nda = Nda.new(nda_params)

    respond_to do |format|
      if @nda.save
        format.html { redirect_to @nda, notice: 'Nda was successfully created.' }
        format.json { render :show, status: :created, location: @nda }
      else
        format.html { render :new }
        format.json { render json: @nda.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ndas/1
  # PATCH/PUT /ndas/1.json
  def update
    respond_to do |format|
      if @nda.update(nda_params)
        format.html { redirect_to @nda, notice: 'Nda was successfully updated.' }
        format.json { render :show, status: :ok, location: @nda }
      else
        format.html { render :edit }
        format.json { render json: @nda.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ndas/1
  # DELETE /ndas/1.json
  def destroy
    @nda.destroy
    respond_to do |format|
      format.html { redirect_to ndas_url, notice: 'Nda was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nda
      @nda = Nda.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def nda_params
      params.require(:nda).permit(:user_id, :nda)
    end
end
