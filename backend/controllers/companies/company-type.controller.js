import companyType from '../../models/company-type.model';

let CompanyTypeList = (req, res) => {
    companyType.find((err, companyType) => {
        if (err) {
            console.log(err);
        } else {
            res.json(companyType);
        }
    });
}

export default CompanyTypeList;