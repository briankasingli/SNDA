# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150729002449) do

  create_table "ndas", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "nda"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "ndas", ["user_id"], name: "index_ndas_on_user_id"

  create_table "signed_documents", force: :cascade do |t|
    t.integer  "nda_id"
    t.string   "nda"
    t.string   "signature"
    t.string   "full_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "signed_documents", ["nda_id"], name: "index_signed_documents_on_nda_id"

  create_table "users", force: :cascade do |t|
    t.string   "full_name"
    t.string   "username"
    t.string   "password"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
