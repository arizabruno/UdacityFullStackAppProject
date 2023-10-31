import express from "express";
import {filterImageFromURL, deleteLocalFiles} from "../util/util.js";
import fs from 'fs';

export const router = express.Router();

router.get("/filteredimage", async (req, res) => {

    let  {image_url} = req.query;

    if(!image_url) {
        const invalidUrl = "Invalid Image URL";
        console.error(invalidUrl);
        res.status(422).json(invalidUrl);
    }

    const filteredImage = await filterImageFromURL(image_url)
    .then((path) => {
        console.log("Filtered image path:", path);
        return path;
    })
    .catch((error) => {
        console.error("Error processing image:", error);
    });

    if(!filteredImage) {
        const errorFilteringImage = "Image not filtered";
        console.error(errorFilteringImage);
        res.status(422).json(errorFilteringImage);
    }


    await fs.exists(filteredImage, (exists) => {
        if(!exists) {
            res.status(404).json("Image does not exist")
        }
        fs.readFile(filteredImage, (err, content) => {
            res.status(200).end(content);
        })
    });

});