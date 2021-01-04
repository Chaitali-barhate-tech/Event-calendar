import Event from '../../models/event.model';

let CreateNewEvent = (req, res) => {
    let filename = (req.files.eventImage).path.match(/[^\\/:*?"<>|\r\n]+$/g);
    req.body.eventImage = filename[0];

    let event = new Event(req.body);

    event.save()
        .then(event => {
            res.status(200).json({
                'event': 'Added Successfully'
            });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
}

export default CreateNewEvent;