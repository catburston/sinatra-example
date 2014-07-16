require 'sinatra'
require 'pry'
require 'pstore'
require 'json'
require 'yaml/store'

store = YAML::Store.new('data.yaml')

get '/' do
	store.transaction do
		@tasks=store[:tasks]
	end
	erb :data_beta
end

post '/message' do
	store.transaction do
		store[:tasks] ||= []
		store[:tasks] << params[:message]
	end
	redirect to('/')
end


post '/dl' do
	store.transaction do
		myd = params[:checkbox].to_i
		store[:tasks].delete_at(myd)
	end
	redirect to('/')
end

get '/api/items' do
	# ['test','hello'].to_json
	tasks=[]
	store.transaction do
		tasks=store[:tasks]
	end
	tasks=['Hello','World','Hi']
	tasks.to_json
end

post '/api/remove' do
	store.transaction do
		myd = params[:checkbox].to_i
		store[:tasks].delete_at(myd)
	end
end