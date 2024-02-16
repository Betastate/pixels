let mapData;

window.addEventListener("load", () => {

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
            })
        })
}
