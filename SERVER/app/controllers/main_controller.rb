class MainController < ActionController::Base
  @@logged_users = Array.new(500)
  $adminemail = "magestican.visualkei@gmail.com"

  def login
	@@logged_users.push(params[:token])
	output = {'result' => 'success' }.to_json
	render :json => output
  end
  

  def start
    MainController.new
  end
  
  
  #i used this system just to save time and not use a database in the server since i dont know much about ruby or rails..sorry :(
  
  def get_questions
	JSON.parse (File.open('db/questions.json').read )
  end
  
  def get_categories
	JSON.parse ( File.open('db/categories.json').read )
  end
  
  def update_categories
	if @@logged_users.include?(params[:token]) then
		File.open("db/categories.json", 'w') do |f|
			f.write(params[:categories])
		end
	end
  end
  
  def update_questions
	if @@logged_users.include?(params[:token]) then
		File.open("db/questions.json", 'w') do |f|
			f.write(params[:questions])
		end
	end
  end
  
  
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
