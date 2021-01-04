import Company from '../../models/company.model';
import Event from '../../models/event.model';

let companyDetails = (req, res) => {
    let companyInfo = {
        company: {},
        events: {}
    };
    Company.findById({
        _id: req.params.id
    }, (err, company) => {
        if (err) {
            res.status(422).json("Cannot find event");
        } else {
            companyInfo.company = company;

            Event.find({
                companyName: company.companyName
            }, (err, events) => {
                if (err) {
                    res.status(422).json("Cannot find event")
                } else {
                    companyInfo.events = events
                    res.json(companyInfo);
                }
            })
        }
    });
}

export default companyDetails;