Rails.application.routes.draw do

  root to: 'app#index'

  scope :api, defaults: {format: :json} do
    resources :cities, except: [:new, :edit ]
    resources :states, only: [:index, :show]
  end

end
