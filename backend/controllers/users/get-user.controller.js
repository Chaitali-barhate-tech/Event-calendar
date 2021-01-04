import User from '../../models/user.model';

let getUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        res.json(user);
    });
}

export default getUser;