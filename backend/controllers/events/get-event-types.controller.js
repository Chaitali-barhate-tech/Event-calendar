import Event from '../../models/event.model';

let getEventTypes = (req, res) => {
    Event.aggregate([{
            $group: {
                _id: "$eventType",
                count: {
                    $sum: 1
                }
            }
        }],
        function (err, result) {
            if (err) {
                res.status(400).send('Error');

            } else {
                res.json(result);
            }
        });

}

export default getEventTypes;