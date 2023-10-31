import fs from "fs";
import Jimp from "jimp";
import axios from 'axios';

export async function filterImageFromURL(inputURL) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(inputURL, { responseType: 'arraybuffer' });
            console.log('Content Type:', response.headers['content-type']);

            if (!response.headers['content-type'].startsWith('image/')) {
                reject(new Error('URL did not return an image'));
                return;
            }
            const photo = await Jimp.read(Buffer.from(response.data));

            const outpath = "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";
            await photo
                .resize(256, 256) 
                .quality(60)
                .greyscale() 
                .write(outpath, (img) => {
                    resolve(outpath);
                });
        } catch (error) {
            reject(error);
        }
    });
}


// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
 export async function deleteLocalFiles(files) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}
