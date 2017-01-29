class StatesController < ApplicationController
  before_action :set_state, only: [:show]

  def index
    @states = State.all
  end

  def show; end

  private

  def set_state
    @state = State.find(params[:id])
  end

  def state_params
    params.require(:state).permit(:name)
  end
end
