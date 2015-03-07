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
    output = {'result' => open('db/questions.json').read }
	render :json => output
  end
  
  def get_categories
	output = {'result' => open('db/categories.json').read }
	render :json => output
  end
  
  def update_categories
	if @@logged_users.include?(params[:token]) then
		open("db/categories.json", 'w') do |f|
			f.write(params[:categories])
			output = {'result' => open('db/categories.json').read }
			render :json => output
		end
	end
  end
  
  def update_questions
	if @@logged_users.include?(params[:token]) then
		open("db/questions.json", 'w') do |f|
			f.write(params[:questions])
			output = {'result' => open('db/questions.json').read }
			render :json => output
		end
	end
  end
  
  
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
