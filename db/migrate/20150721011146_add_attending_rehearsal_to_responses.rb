class AddAttendingRehearsalToResponses < ActiveRecord::Migration
  def change
    add_column :responses, :attending_rehearsal, :boolean
  end
end
