class AddDescriptionToExplanations < ActiveRecord::Migration[6.0]
  def change
    add_column :explanations, :description, :text
  end
end
