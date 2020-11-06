class RemoveCategoriesFromExplanations < ActiveRecord::Migration[6.0]
  def change
    remove_column :explanations, :categories, :string
  end
end
