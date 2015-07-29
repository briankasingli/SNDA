class User < ActiveRecord::Base
	has_many :documents
end
