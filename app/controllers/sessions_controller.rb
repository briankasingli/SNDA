class SessionsController < ApplicationController
  
  def new
  	redirect_to admin_path if current_user
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.password == params[:session][:password]
      log_in(user)
      redirect_to admin_path
    else
      flash[:form_error] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
   	session.clear
   	redirect_to login_path
  end
end
