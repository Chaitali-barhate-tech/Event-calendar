import Event from '../../models/event.model';

let getEvents = (req, res) => {
    if (req.query.search) {
        Event.aggregate([{
                $match: {
                    eventName: {
                        $regex: req.query.search,
                        '$options': 'i'
                    }
                }
            }],
            function (err, result) {
                res.json(result);
            });
    } else if (req.query.type) {
        Event.find({
            eventType: req.query.type
        }, (err, events) => {
            if (err) {
                console.log(err);
            } else {
                res.json(events);
            }
        });
    } else {
        Event.find((err, events) => {
            if (err) {
                console.log(err);
            } else {
                events.sort((a, b) => {
                    const startA = new Date(a.startDate);
                    const startB = new Date(b.startDate);
                    if (startA < startB) {
                        return -1;
                    }
                    if (startA > startB) {
                        return 1;
                    }
                    return 0;
                });
                res.json(events);
            }
        });
    }
}

export default getEvents;