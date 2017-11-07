require 'rails_helper'

RSpec.describe MailingListSubscriber, type: :model do
  it "is valid with valid attributes" do
    expect(MailingListSubscriber.new(email: "mail@example.com")).to be_valid
  end

  it "is invalid without an email" do
    expect(MailingListSubscriber.new(email: nil)).not_to be_valid
  end
end
