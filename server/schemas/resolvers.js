const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
      me: async (parent, args, context) => {
        console.log(context.user)
        if(context.user) {
            return User.findOne({ _id: context.user._id })
        }
        throw new AuthenticationError('You need to be logged in!')
      },
    },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);

        return { token, user}
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('Wrong email/password!');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        
        const token = signToken(user);
        return { token, user };
      },
      saveJob: async (parent, { input }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedJobs: input } },
            { new: true }
        )
        console.log('successfully saved the job')

        return updatedUser;
        }
        throw new AuthenticationError ('You need to be logged in.');
      },
      removeJob: async (parent, { _id } , context) => {
        if (context.user) {
          
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedJobs: { _id : _id }} },
            { new: true }
          )
          console.log('successfully removed the job')
          return updatedUser;
        }
        throw new AuthenticationError ('You need to be logged in.');
      },
    }
}

module.exports = resolvers;