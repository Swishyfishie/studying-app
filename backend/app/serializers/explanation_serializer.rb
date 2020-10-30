class ExplanationSerializer < ActiveModel::Serializer
  attributes :categories, :keywords, :future_studies
  belongs_to :user
end
