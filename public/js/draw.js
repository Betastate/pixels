const drawFunction = () => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const image = new Image();


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

