class StaticPagesController < ApplicationController
	def index
		@nda = Nda.find(1);
	end
end
