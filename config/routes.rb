Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  resources :messages
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Login / Logout Routes
    post '/login', to: 'session#login'
    delete '/logout', to: 'session#logout'
    get "/me", to: "users#showme"


    # testing
    get '/hello', to: 'application#hello_world'


  # Defines the root path route ("/")
  # root "articles#index"
end
