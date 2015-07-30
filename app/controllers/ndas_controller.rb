class NdasController < ApplicationController

  def update
    respond_to do |format|
      @nda = Nda.find(params[:ndas][:nda_id]);
      if @nda.update(nda_params)
        format.json { head :no_content }
      end
    end
  end

  private 

  def nda_params
    params.require(:ndas).permit(:nda)
  end
end

