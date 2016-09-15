# == Route Map
#
#     Prefix Verb URI Pattern           Controller#Action
# home_index GET  /home/index(.:format) home#index
#

Rails.application.routes.draw do
  root 'home#index'

  namespace :api, defaults: { format: :json } do
    resources :lists, except: [:new, :edit]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
