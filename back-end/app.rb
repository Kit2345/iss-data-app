# frozen_string_literal: true

# myapp.rb
require 'sinatra'
require_relative 'open_notify'

# Allow our templates in views/ to end in `.html.erb`
Tilt.register Tilt::ERBTemplate, 'html.erb'

set :layout, 'views/layout.html.erb'

get '/' do
  erb :index
end

get '/position' do
  iss_now = OpenNotify.iss_now

  erb :position, locals: { data: iss_now }
end

get '/iss_position.json' do
  iss_now = OpenNotify.iss_now

  content_type :json
  iss_now.to_json
end

get '/astros' do
  astros = OpenNotify.astros  
  erb :astros, locals: { data: astros }
end

get '/astros.json' do
  astros = OpenNotify.astros

  content_type :json
  astros.to_json
end



