import User from '../../models/user.model';

let editUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.usertype = req.body.usertype;
            
            user.save().then(user => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
    });
}

export default editUser;