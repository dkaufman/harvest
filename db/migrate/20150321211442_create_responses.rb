class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.string :name
      t.string :email
      t.boolean :attending, default: true
      t.text   :additional_information
    end
  end
end
