const Message = require('../modal/Message');
const Conversation = require('../modal/Conversation')

module.exports = {

    async newMessage(request, response) {
        const newMessage = new Message(request.body);
        console.log(request.body, newMessage)
        try {
            await newMessage.save();
            await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
            response.status(200).json("Message has been sent successfully");
        } catch (error) {
            response.status(500).json(error);
        }
        
    },
    
    async getMessage(request, response) {
        try {
            const messages = await Message.find({ conversationId: request.params.id });
            response.status(200).json(messages);
        } catch (error) {
            response.status(500).json(error);
        }
        
    }
}