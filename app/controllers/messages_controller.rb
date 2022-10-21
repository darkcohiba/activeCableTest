class MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages
    end

    # saloni mehta
    # def create
    #     message = Message.new(messages_params)
    #     if message.save
    #       chatroom = message.chatroom
    #       broadcast chatroom
    #     end
    #     render json: message
    # end


    


end
