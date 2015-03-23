require 'sinatra'
require 'sinatra/activerecord'
require './models/response'

get '/' do
  haml :index, locals: { response: @rsvp }
end

post '/rsvp' do
  rsvp = Response.new(params[:response])
  if rsvp.save
    redirect '/?responded=true#rsvp'
  else
    haml :index
  end
end
