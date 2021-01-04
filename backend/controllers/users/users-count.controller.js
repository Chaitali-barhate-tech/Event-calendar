import User from '../../models/user.model';

let usersCount = (req, res) => {
    User.countDocuments((err, count) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(count);
        }
    })
}

export default usersCount;