const { Book, User } = require('../models');

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
        addBook: async (parent, { authors, description, bookId, image, link, title }) => {
            return await Book.create({ authors, description, bookId, image, link, title })
        },

    }
}