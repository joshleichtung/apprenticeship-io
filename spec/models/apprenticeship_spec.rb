require 'rails_helper'

RSpec.describe Apprenticeship, type: :model do
  subject { described_class.new(
      company_name: "LinkedIn", 
      city: "San Francisco",
      state: "CA",
      url: "example.com"
  ) }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is not valid without a company name" do
    subject.company_name = nil
    expect(subject).not_to be_valid
    subject.company_name = "LinkedIn"
    expect(subject).to be_valid
  end

  it "is not valid without a location" do 
    subject.city = nil
    subject.state = nil
    expect(subject).not_to be_valid
    subject.city = "San Francisco"
    expect(subject).to be_valid
    subject.city = nil
    subject.state = "CA"
    expect(subject).to be_valid
    subject.city = "San Francisco"
    expect(subject).to be_valid
  end

  it "is not valid without a url"do
    subject.url = nil
    expect(subject).not_to be_valid
  end
end
