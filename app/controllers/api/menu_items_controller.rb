class Api::MenuItemsController < ApplicationController

  def index
    # debugger
    if params[:category] == "burgers"
      @menu_items = MenuItem.where({category: "burgers"})
      render :index
    elsif params[:category] == "salad"
      @menu_items = MenuItem.where({category: "salad"})
      render :index
    elsif params[:category] == "starters"
      @menu_items = MenuItem.where({category: "starters"})
      render :index
    elsif params[:category] == "fries"
      @menu_items = MenuItem.where({category: "fries"})
      render :index
    elsif params[:category] == "un-burger"
      @menu_items = MenuItem.where({category: "un-burger"})
      render :index
    elsif params[:category] == "beverage"
      @menu_items = MenuItem.where({category: "beverage"})
      render :index
    elsif params[:category] == "milkshake"
      @menu_items = MenuItem.where({category: "milkshake"})
      render :index
    else 
      # debugger
      @menu_items = MenuItem.all
      render :index
    end 
  end


  def show
    # debugger
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
