Rails.application.routes.draw do

  scope :api, defaults: {format: :json} do
    resources :cities, only: [:index, :show]
    resources :states, only: [:index, :show]
  end

  root to: 'home#index'
end
