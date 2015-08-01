class AddImageColumnToSignedDocuments < ActiveRecord::Migration
  def change
  	add_column :signed_documents, :signture_image, :string
  end
end
