class AddTagToThings < ActiveRecord::Migration
  def change
    add_column :things, :tag, :string, default: ''
  end
end
