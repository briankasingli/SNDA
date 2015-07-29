class StaticPagesController < ApplicationController
	def index
		@nda = Nda.find(1);
	end
	def admin
		@nda = Nda.find(1);
		@signed_ndas = SignedDocument.order(id: :desc)
	end
end
