import mongoose, { STATES } from 'mongoose';
import { strict } from 'assert';

const schema = mongoose.Schema;

let eventSchema = new schema({
    eventName: {
        type: String
    },
    contactEmail: {
        type: String
    },
    companyName: {
        type: String
    },
    eventImage: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    eventType: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    eventDesc: {
        type: String
    },
    user: {
        type: String
    }
})

export default mongoose.model('Event', eventSchema, 'events');