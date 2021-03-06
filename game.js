var renderer = PIXI.autoDetectRenderer(400,400, {BackgroundColor: 0x3344ee});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
var texture = PIXI.Texture.fromImage("cs413.png");
var mordor = PIXI.Texture.fromImage("mordor.png");
var player = new PIXI.Sprite(texture);
player.anchor.x = 0.5;
player.anchor.y = 0.5;

player.position.x = 200;
player.position.y = 200;


stage.addChild(player);
document.addEventListener('keydown', onKeyDown);

animate();
function animate()
{
  renderer.render(stage);
  requestAnimationFrame(animate);
}
function onKeyDown(key)
{
  if(key.keyCode ===87 || key.keyCode === 38)
  {
    //checks to make sure you arent at the edge of the world
    if(player.position.y != 0)
    {
      player.position.y -=20;

    }
  }
    if (key.keyCode === 83 || key.keyCode === 40)
    {
        //checks to make sure you arent at the edge of the world
        if(player.position.y != 400)
        {
            player.position.y += 20;
        }

    }
    //65 and 37 are A and the left arrow in ascii
    if (key.keyCode === 65 || key.keyCode === 37)
    {
        //checks to make sure you arent at the edge of the world
        if (player.position.x != 0)
        {//moves player
            player.position.x -= 20;
        }
    }

    // D Key is 68
    // Right arrow is 39
    if (key.keyCode === 68 || key.keyCode === 39)
    {
        //checks to make sure you arent at the edge of the world
        if (player.position.x != 400)
        {
            // Don't move to the right if the player is at the right side of the stage
            player.position.x += 20;
        }
    }//end of keydown
}
