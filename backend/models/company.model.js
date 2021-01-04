import mongoose, {
    STATES
} from 'mongoose';

const schema = mongoose.Schema;

let companySchema = new schema({
    companyName: {
        type: String,
        unique: true
    },
    companyEmail: {
        type: String,
        unique: true
    },
    companyLogo: {
        type: String
    },
    companyType: {
        type: Array,
        default: []
    }
});

export default mongoose.model('Company', companySchema, 'company_list');
