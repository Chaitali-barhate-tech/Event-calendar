import fs from 'fs';
import fileType from 'file-type';

let getFile = (req, res) => {
    let filename = req.params.filename;
    let imagepath = "./uploads/" + filename
    let image = fs.readFileSync(imagepath);
    let mime = fileType(image).mime;

    res.writeHead(200, {
        'Content-Type': mime
    });

    res.end(image, 'binary');
}

export default getFile;