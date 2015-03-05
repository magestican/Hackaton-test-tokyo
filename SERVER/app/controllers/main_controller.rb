class MainController < ActionController::Base
  @@logged_users = Array.new

  def login
	@@loggedUsers.push(params.[:token])
  end
  

  def start
	respond_to do |format|
		format.html { render :text => File.open('Public/templates/pages/index.html').read }
	end
  end
  
  def getdatabase
	respond_to do |format|
		format.json { render :text => File.open('db/database.json').read }
	end
  end
  
  def updatedatabase
	if @@logged_users.include?(params.[:token]) then
		File.open("db/database.json", 'w') do |f|
			f.write(content)
		end
	end
	
  end
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
