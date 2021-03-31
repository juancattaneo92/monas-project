json.addresses do 
    json.set! @address.id do 
        json.extract! @address, :id, :street, :city, :state, :apt_num, :zip_code, :user_id
    end
end