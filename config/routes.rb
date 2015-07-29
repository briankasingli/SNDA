Rails.application.routes.draw do

  resources :signed_documents, only: [:show, :create, :destroy]

  root 'static_pages#index'
  get '/admin', to: 'static_pages#admin', as: :admin
end
