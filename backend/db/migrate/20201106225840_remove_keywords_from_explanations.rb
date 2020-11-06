class RemoveKeywordsFromExplanations < ActiveRecord::Migration[6.0]
  def change
    remove_column :explanations, :keywords, :string
  end
end
