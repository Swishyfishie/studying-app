class ExplanationSerializer < ActiveModel::Serializer
  attributes :id, :description, :tag_list
  belongs_to :user
end
