require 'rails_helper'

RSpec.describe State, type: :model do

  it 'has a valid factory' do
    expect(build(:state)).to be_valid
  end

  it 'creates a state' do
    expect(create(:state)).to be_persisted
  end

  it 'is invalid without a name' do
    expect(build(:state, name: nil)).not_to be_valid
  end

end
