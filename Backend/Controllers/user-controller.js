const User = require('../modal/User');

module.exports = {

    async addUser(request, response)  {
        try {
            let exist = await User.findOne({ googleId: request.body.googleId });            
            if(exist) {
                response.status(200).json('user already exists');
                return;
            }
            const newUser = new User(request.body);
            await newUser.save();
            response.status(200).json(newUser);
        } catch (error) {
            response.status(500).json(error);
        }
    },
    
    async getUser(request, response) {
            try {
                    const users = await User.find({});
                    response.status(200).json(users);
                } catch (error) {
                        response.status(500).json(error);
                    }
    }
}