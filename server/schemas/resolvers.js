const { Book, User } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return await Book.find({}).populate('books').populate({
                path: 'books',
                populate: 
            })

        }
    },
    Mutation: {
        addBook: async (parent, { authors, description, bookId, image, link, title }) => {
            return await Book.create({ authors, description, bookId, image, link, title })
        },

    }
}