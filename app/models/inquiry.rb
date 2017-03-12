class Inquiry < ActiveRecord::Base
  include Protectable

  belongs_to :user, :inverse_of => :inquiries

  validates :user, :text, presence: true

end
