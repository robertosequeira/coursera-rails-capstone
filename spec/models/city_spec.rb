require 'rails_helper'

RSpec.describe City, type: :model do
  subject { City.new }

  context 'valid' do
    it 'name' do
      subject.name = 'City Name'
      expect(subject).to be_valid
    end
  end

  context 'invalid' do
    it 'name' do
      expect(subject).not_to be_valid
    end
  end

end
