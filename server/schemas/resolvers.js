const { User } = require('../models');

const resolvers = {
    Query: {
        getSingleUser: async (parent, args, context) => {
            if (context.user) {
                const userInfo = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userInfo;
            }
            throw newAuthError('You must be logged in to see this good good.')
        }
    },


    Mutation: {
        // we want to save a book
        saveBook: async (parent, { bookInfo }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: bookInfo } },
                    { new: true }
                )
                return updatedUser;
            }

        },
    },
}

module.exports = resolvers;