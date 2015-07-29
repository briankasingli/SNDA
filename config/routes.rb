Rails.application.routes.draw do


  resources :ndas, only: [:update]
  resources :signed_documents, only: [:show, :create, :destroy]

  root 'static_pages#index'
  get '/admin', to: 'static_pages#admin', as: :admin
  get '/ndas/:id', to: 'ndas#show', as: :show

end
