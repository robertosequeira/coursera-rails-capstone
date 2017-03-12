class InquiriesController < ApplicationController
  before_action :set_inquiry, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  after_action :verify_authorized
  after_action :verify_policy_scoped, only: [:index]

  wrap_parameters :inquiry, include: %w( text )

  def index
    authorize Inquiry
    @inquiries = policy_scope(Inquiry.all)
  end

  def show
    authorize @inquiry
    inquiries = policy_scope(Inquiry.where(:id => @inquiry.id))
    @inquiry = InquiryPolicy.merge(inquiries).first
  end

  def create
    authorize Inquiry
    @inquiry = Inquiry.new(inquiry_params)
    @inquiry.user = current_user

    Inquiry.transaction do
      if @inquiry.save
        role = current_user.add_role(Role::CUSTOMER, @inquiry)
        role.save!
        @inquiry.user_roles << role.role_name
        render :show, status: :created, location: @inquiry
      else
        render json: {errors: @inquiry.errors.messages}, status: :unprocessable_entity
      end
    end
  end

  def update
    authorize @inquiry

    if @inquiry.update(inquiry_params)
      head :no_content
    else
      render json: @inquiry.errors.messages, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @inquiry
    @inquiry.destroy
    head :no_content
  end

  private

  def set_inquiry
    @inquiry = Inquiry.find(params[:id])
  end

  def inquiry_params
    params.require(:inquiry).permit(:text)
  end
end
