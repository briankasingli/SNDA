class CreateNdas < ActiveRecord::Migration
  def change
    create_table :ndas do |t|
      t.references :user, index: true, foreign_key: true
      t.text :nda

      t.timestamps null: false
    end
  end
end
