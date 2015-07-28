class CreateSignedDocuments < ActiveRecord::Migration
  def change
    create_table :signed_documents do |t|
      t.references :document, index: true, foreign_key: true
      t.string :signer_name
      t.string :signer_signature

      t.timestamps null: false
    end
  end
end
