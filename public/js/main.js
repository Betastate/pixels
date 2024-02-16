let mapData;
let textOutput;

window.addEventListener("load", () => {
    textOutput = document.getElementById("text")

    drawFunction();
    init();
})

function init() {
    fetch('./maps/map.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            mapData = response;
            canvas.addEventListener("mousemove", (e) => {
                // console.log(e.clientX, e.clientY);
                console.log(mapData[e.clientY][e.clientX])
                textOutput.innerHTML = mapData[e.clientY][e.clientX];
            })
        })
}
