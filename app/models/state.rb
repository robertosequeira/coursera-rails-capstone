class State
  include Mongoid::Document
  include Mongoid::Timestamps

  validates_presence_of :name

  field :name, type: String
end
