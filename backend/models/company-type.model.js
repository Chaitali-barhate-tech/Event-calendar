import mongoose from 'mongoose';

const schema = mongoose.Schema;

let companyType = new schema({
    type: {
        type: String
    }
})

export default mongoose.model('companyType', companyType, 'company_type');
