import Event from '../../models/event.model';

let getEventsbyCompany = (req, res) => {
    Event.aggregate(
        [{
            '$group': {
                _id: '$companyName',
                count: {
                    $sum: 1
                },
                events: {
                    $push: '$$ROOT'
                }
            }
        }],
        function(err, result) {
            if(err) {
                res.status(422).json("Error");
            } else {
                res.json(result);
            }
        }
    );
}

export default getEventsbyCompany;