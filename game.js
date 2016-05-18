var renderer = PIXI.autoDetectRenderer(400,400, {BackgroundColor: 0x3344ee});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("cs413.png");

var sprite = new PIXI.Sprite(texture);
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite);
/*function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
  event.preventDefault();
};
*/
/*function move_forward()
{
  requestAnimationFrame(move_forward);
  sprite.position.y -=1;
  renderer.render(stage);
}*/
function animate()
{
  requestAnimationFrame(animate);
  sprite.rotation +=1;
  renderer.render(stage);
}
/*if(keyboard(38).isDown)
(
    move_forward();
)*/
animate();
