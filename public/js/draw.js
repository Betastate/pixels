const drawFunction = () => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");
    const image = new Image();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext("2d");
    })


    image.onLoad = () => {
        ctx.drawImage(image, 100, 100, 100, 100);
    }
    image.src = "./img/map.png";

    const draw = () => {
        window.requestAnimationFrame(draw);
        ctx.drawImage(image, 0, 0, 1024, 1024);
    }
    draw();

    //Text output

}

