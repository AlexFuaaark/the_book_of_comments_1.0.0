const mongoose = require('mongoose');
const {model, Schema} = require('mongoose');
mongoose.Schema.Types.String.set('trim', true);

const userSchema = new Schema ( {
    _id: mongoose.Schema.Types.ObjectId,
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    createdAt: {
        type: Date,
        trim: true,
    },
    rating: {
        type: Number,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    }

}
)
module.exports = model('Comment', userSchema);