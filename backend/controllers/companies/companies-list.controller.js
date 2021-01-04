import Company from '../../models/company.model';

let companiesList = (req, res) => {

    Company.find((err, companies) => {
        if (err) {
            console.log(err);
        } else {
            res.json(companies);
        }
    })
}

export default companiesList;