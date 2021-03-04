class Api::SessionsController < ApplicationController
    def create
        # debugger
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render "api/users/show.json.jbuilder"
        else
            render json: ["Invalid email or password"], status: 404
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: {}
        else
            render json: ["Needs to Log in first"], status: 404
        end
    end
end
