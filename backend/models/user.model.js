import mongoose, { STATES } from 'mongoose';

const schema = mongoose.Schema;

let userSchema = new schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    usertype: {
        type: String
    }
})

export default mongoose.model('User', userSchema, 'user_list');
