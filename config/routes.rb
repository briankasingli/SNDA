Rails.application.routes.draw do

  resources :ndas, only: [:update]
  resources :signed_documents, only: [:show, :create, :destroy]

  root 'static_pages#index'
  get '/admin', to: 'static_pages#admin', as: :admin
  get    '/login', to: 'sessions#new'
  post   '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
