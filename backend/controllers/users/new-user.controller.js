import User from '../../models/user.model';
import { validationResult } from 'express-validator';

let newUser = (req, res, next) => {
    let user = new User(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        })
    }
    user.save()
        .then(user => {
            res.status(200).json({
                'user': 'Added Successfully'
            });
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                // Duplicate username
                return res.status(422).send('User already exist!');
            }
            res.status(400).send('Failed to create new record');
        });
}

export default newUser;