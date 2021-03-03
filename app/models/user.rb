class User < ApplicationRecord
  validates :email, :session_token, :password_digest, :name, :phone, :address_id, presence:true
  validates :session_token, :email, uniqueness:true
  validates :password, length: { minimum: 6, allow_nil:true }

  attr_reader :password
  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
        user
    else
        nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64 
  end

end
