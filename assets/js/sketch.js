var canvas;
var img;
var canvasWidth = 710;
var canvasHeight = 400;

function preload()
{
    img = loadImage("assets/img/cat.jpg");

    $('#apply-texture-button').on('click', function(e) {
        img = loadImage($('#cube-texture').val());
    });
}

function setup()
{
    canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    canvas.parent('sketch-wrap');
}

function draw()
{
    background(0);

    var locY = (mouseY / height - 0.5) * (-2);
    var locX = (mouseX / width - 0.5) * 2;

    ambientLight(100, 80, 80);
    pointLight(200, 200, 200, locX, locY, 0);

    var x_speed = $('#x-speed').val();
    var y_speed = $('#y-speed').val();
    var z_speed = $('#z-speed').val();

    push();
    rotateX(frameCount * x_speed);
    rotateY(frameCount * y_speed);
    rotateZ(frameCount * z_speed);
    texture(img);
    box(150);
    pop();
}