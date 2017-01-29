class CitiesController < ApiController
  before_action :set_city, only: [:show]

  def index
    @cities = City.all
  end

  def show; end

  private

    def set_city
      @city = City.find(params[:id])
    end

    def city_params
      params.require(:city).permit(:name)
    end
end
