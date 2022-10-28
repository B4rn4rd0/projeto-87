
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_y = 1;
 block_x = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(getImage, function(Img) {
    blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:block_y,
	left:block_x
	});
	canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		newImage('rr1.png');
		console.log("r")
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		newImage('gr.png');
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		block_x =350;
		newImage('yr.png')
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		block_x = 600;
		newImage('pr.png')
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		block_x = 700;
		newImage('br.png')
	// enviar ranger índigo
	}
	
}

