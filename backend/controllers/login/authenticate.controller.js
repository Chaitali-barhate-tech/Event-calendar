import User from '../../models/user.model';


let authUser = (req, res) => {
    User.findOne({
            email: req.body.email,
            password: req.body.password
        },
        (err, result) => {
            if (err) {
                res.send('error');
            }
            else if (result) {
                res.send(result);
            }
            else {
                res.send(false);
            }
        });
}

export default authUser;