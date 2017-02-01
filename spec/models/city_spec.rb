require 'rails_helper'

RSpec.describe City, type: :model do

  it 'has a valid factory' do
    expect(build(:city)).to be_valid
  end

  it 'creates a city' do
    city = create(:city)
    expect(city).to be_persisted
  end

  it 'is invalid without a name' do
    expect(build(:city, name: nil)).not_to be_valid
  end

end
