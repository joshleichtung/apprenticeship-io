# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171130233700) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apprentices", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "linkedin_image_url"
    t.string "current_title"
    t.string "current_company"
    t.string "apprenticeship_company"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "linkedin_token"
    t.datetime "linkedin_token_expiration"
    t.string "linkedin_url"
    t.string "location"
    t.string "description"
    t.string "uid"
    t.boolean "hall_of_famer?", default: false
    t.index ["uid"], name: "index_apprentices_on_uid"
  end

  create_table "apprenticeships", force: :cascade do |t|
    t.string "url"
    t.string "company_name"
    t.string "city"
    t.string "state"
    t.string "description"
    t.string "duration"
    t.date "start_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mailing_list_subscribers", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
