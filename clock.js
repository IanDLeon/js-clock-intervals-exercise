const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');

//second.style.transform = "rotate(0.25turn)";

function setRotationInTurns(domNode, turns){
  const transform = `rotate(${turns}turn)`;
  const style = domNode.style;
  style.webkitTransform = transform;
  style.mozTransform = transform;
  style.msTransform = transform;
  style.oTransform = transform;
  style.transform = transform;
}

setRotationInTurns(second, 0.25);
setRotationInTurns(minute, 0.5);
setRotationInTurns(hour, 0.75);