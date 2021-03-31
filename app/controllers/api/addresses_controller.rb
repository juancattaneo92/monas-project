class Api::AddressesController < ApplicationController

  def show
    @address = Address.find(params[:id])
    render :show
  end
  
  def create
    @address = Address.create(address_params)
    if @address.save
      render :show
    else
      render json: @address.errors.full_messages, status: 404
      render :show
    end
  end 

  def update 
    @address = Address.find_by(id: params[:id])
    if(@address.update(address_params))
      render :show
    else 
      render json: @address.errors.full_messages, status: 422
      render :show
    end 
  end 
  
  def destroy
    @address = Address.find(params[:id])
    @address.destroy
    render :show
  end

  private
  def address_params
    params.require(:address).permit(:id, :street, :city, :state, :apt_num, :zip_code, :user_id)
  end

end
