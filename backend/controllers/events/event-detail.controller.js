import Event from '../../models/event.model';

let getEventDetails = (req, res) => {
    Event.findOne({eventName: req.body.eventName}, (err, result) => {
        if(err) {
            res.status(422).json("Cannot find event")
        } else {
            res.json(result);
        }
    });
    
}

export default getEventDetails;