require 'rails_helper'

RSpec.describe City, type: :model do

  it 'has a valid factory' do
    expect(build(:city)).to be_valid
  end

  it 'is invalid without a name' do
    expect(build(:city, name: nil)).not_to be_valid
  end

end
