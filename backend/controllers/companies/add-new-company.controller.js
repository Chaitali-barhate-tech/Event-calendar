import Company from '../../models/company.model';

let AddNewCompany = (req, res) => {
    req.body.companyType = JSON.parse(req.body.companyType)
    let filename = (req.files.upload).path.match(/[^\\/:*?"<>|\r\n]+$/g);
    req.body.companyLogo = filename[0];

    let company = new Company(req.body);

    company.save()
        .then(company => {
            res.status(200).json({
                'company': 'Added Successfully'
            });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}

export default AddNewCompany;