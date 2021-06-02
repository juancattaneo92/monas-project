Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only:[:new, :create, :destroy]
    resources :users, only:[:show, :create, :update]
    resources :addresses, only: [:show, :create, :update, :destroy]
    resources :menu_items, only: [:index, :show]
    resources :cart_items, only:[:create, :destroy, :index, :show] do 
      resources :menu_items, only:[:show, :index]
    end 

    get 'menu-items/:category', :to => 'menu_items#index'
  end 
end
