class Api::MenuItemsController < ApplicationController

  def index
    @menu_items = MenuItem.all
  end

  def show
    @menu_item = MenuItem.find(params[:id])
    render :show
  end
  
  def create
    @menu_item = MenuItem.create(menu_item_params)
    if @address.save
      render :show
    else
      render json: @menu_item.errors.full_messages, status: 404
      render :show
    end
  end 

  def update 
    @menu_item = MenuItem.find_by(id: params[:id])
    if(@menu_item.update(menu_item_params))
      render :show
    else 
      render json: @menu_item.errors.full_messages, status: 422
      render :show
    end 
  end 
  
  def destroy
    @menu_item = MenuItem.find(params[:id])
    @menu_item.destroy
    render :show
  end

  private
  def menu_item_params
    params.require(:menu_item).permit(:id, :name, :description, :price, :ingredients, :size, :category)
  end

end
