var getPixels = require("get-pixels")
const fs = require('node:fs');

getPixels("./public/img/map.png", function (err, pixels) {
    if (err) {
        console.log("Bad image path")
        return;
    }
    const alphaData = []
    for (let i = 3; i < pixels.data.length; i += 4) {
        const i2 = Math.floor(i / 4);

        const xPos = i2 % pixels.shape[0];
        const yPos = Math.floor(i2 / pixels.shape[0])
        if (!alphaData[yPos]) {
            alphaData[yPos] = new Array(pixels.shape[0]);
        }
        alphaData[yPos][xPos] = pixels.data[i];
    }


    fs.writeFile('./public/maps/map.json', JSON.stringify(alphaData), err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
            console.log(`Successfully written file map.json`)
        }
    });

})

