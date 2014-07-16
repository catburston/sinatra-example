require 'sinatra'
require 'date'
require 'json'

#time = DateTime.now
get '/' do
  erb :index
end

post '/target_url/' do
  puts "You sent #{params.inspect}"
  params[:message]
end


get $.'/target_url' do

end