Rails.application.routes.draw do

  root to: 'home#index'

  scope :api, defaults: {format: :json} do
    resources :cities, only: [:index, :show]
    resources :states, only: [:index, :show]
  end

  get 'spa', to: 'spa#index'

end
