class RemoveFutureStudiesFromExplanations < ActiveRecord::Migration[6.0]
  def change
    remove_column :explanations, :future_studies, :string
  end
end
