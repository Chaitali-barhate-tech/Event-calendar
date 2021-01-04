import User from '../../models/user.model';

let users = (req, res) => {
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);
    var query = {};
    if (pageNo < 0 || pageNo === 0) {
        response = {
            "error": true,
            "message": "invalid page number, should start with 1"
        };
        return res.json(response)
    }
    query.skip = size * (pageNo - 1);
    query.limit = size;

    User.find({}, {}, query, (err, users) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
}

export default users;