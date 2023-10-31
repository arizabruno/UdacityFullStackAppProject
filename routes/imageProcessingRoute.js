import express from "express";
import {filterImageFromURL, deleteLocalFiles} from "../util/util.js";
import axios from "axios";

export const router = express.Router();

router.get("/filteredimage", async (req, res) => {

    let errorMsg = null;

    let  {image_url} = req.query;

    if(!image_url) {
        errorMsg = "Invalid Image URL";
        console.error(errorMsg);
        res.status(422).json(errorMsg);
    }

    const imageData = await axios.get(image_url, { responseType: 'arraybuffer' })
    .then(response => Buffer.from(response.data))
    .catch(error => {
        errorMsg = "Error retrieving image from URL";
        console.error(errorMsg, error);
        res.status(422).json(errorMsg)
    });

    const filteredImage = await filterImageFromURL(imageData)
    .then((path) => {
        console.log("Filtered image path:", path);
        return path;
    })
    .catch((error) => {
        errorMsg = "Error processing image:";
        console.error(errorMsg, error);
        res.status(422).json(errorMsg)
    });

    if(!filteredImage) {
        errorMsg = "Image not filtered";
        console.error(errorMsg);
        res.status(422).json(errorMsg);
    }

    res.sendFile(filteredImage);

    res.on('finish', async () => {
        await deleteLocalFiles([filteredImage])
    })

});