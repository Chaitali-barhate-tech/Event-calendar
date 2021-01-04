import Event from '../../models/event.model';

let getEventById = (req, res) => {
    Event.findById({
        _id: req.params.id
    }, (err, result) => {
        if (err) {
            res.status(422).json("Cannot find event")
        } else {
            res.json(result);
        }
    });

}

export default getEventById;