class CreateInquiries < ActiveRecord::Migration
  def change
    create_table :inquiries do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.string :text, null: false

      t.timestamps null: false
    end
  end
end
