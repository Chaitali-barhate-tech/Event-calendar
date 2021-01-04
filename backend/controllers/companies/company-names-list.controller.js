import Company from '../../models/company.model';

let companyNamesList = (req, res) => {

    Company.find({}, 'companyName', (err, companies) => {
        if (err) {
            console.log(err);
        } else {
            res.json(companies);
        }
    });
}

export default companyNamesList;