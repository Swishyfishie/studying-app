class CreateExplanations < ActiveRecord::Migration[6.0]
  def change
    create_table :explanations do |t|
      t.text :description
      t.string :keywords
      t.string :future_studies

      t.timestamps
    end
  end
end
