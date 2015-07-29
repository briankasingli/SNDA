class StaticPagesController < ApplicationController
	def index
		@nda = Nda.find(1);
	end
	def admin
		@signed_ndas = SignedDocument.order(id: :desc)

	end
end
