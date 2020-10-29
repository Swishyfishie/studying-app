class AddUserIdToExplanations < ActiveRecord::Migration[6.0]
  def change
    add_column :explanations, :user_id, :integer
  end
end
