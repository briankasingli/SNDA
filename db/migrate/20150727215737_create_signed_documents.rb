class CreateSignedDocuments < ActiveRecord::Migration
  def change
    create_table :signed_documents do |t|
      t.references :nda, index: true, foreign_key: true
      t.string :nda
      t.string :signature
      t.string :full_name

      t.timestamps null: false
    end
  end
end
