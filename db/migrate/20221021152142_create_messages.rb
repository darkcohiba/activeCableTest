class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :sender_id
      t.integer :recipient_id
      t.text :content
      t.timestamps
    end
  end
end

# saloni mehta
# create_table :messages do |t|
#   t.belongs_to :user, null: false, foreign_key: true
#   t.belongs_to :chatroom, null: false, foreign_key: true
#   t.string :message_body

#   t.timestamps