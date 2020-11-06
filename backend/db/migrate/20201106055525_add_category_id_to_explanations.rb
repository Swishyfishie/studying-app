class AddCategoryIdToExplanations < ActiveRecord::Migration[6.0]
  def change
        add_column :explanations, :category_id, :integer
  end
end
