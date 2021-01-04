import Event from '../../models/event.model';

let searchSuggestions = (req, res) => {
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
                let suggestions = [];
                for(let i=0; i<result.length; i++) {
                    suggestions.push(result[i].eventName);
                }
                res.json(suggestions);
            });
    }
}

export default searchSuggestions;