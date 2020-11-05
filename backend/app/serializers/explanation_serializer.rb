class ExplanationSerializer < ActiveModel::Serializer
  attributes :id, :categories, :keywords, :future_studies
  belongs_to :user
end
