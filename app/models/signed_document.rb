class SignedDocument < ActiveRecord::Base
  belongs_to :document
  before_save :capitalize_full_name

  private

	def capitalize_full_name
  	self.full_name = self.full_name.split.collect(&:capitalize).join(' ') if self.full_name && !self.full_name.blank?
	end
end
