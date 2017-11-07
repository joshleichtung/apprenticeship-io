require 'rails_helper'

RSpec.describe Apprentice, type: :model do
  subject {
    described_class.new(
      first_name: "Coline",
      apprenticeship_company: "Uber",
      email: "coline@apprenticeship.io"
    )
  }

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end

  it "is invalid without a first name" do
    subject.first_name = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without an apprenticeship company" do
    subject.apprenticeship_company = nil
    expect(subject).not_to be_valid
  end

  it "is invalid without an email" do
    subject.email = nil
    expect(subject).not_to be_valid
  end
end
