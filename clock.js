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
function computeClockHandRotationInTurns(){
  const ahora = new Date();
  return{
    secondTurns: ahora.getSeconds() / 60,
    minuteTurns: ahora.getMinutes() / 60,
    hourTurns: ahora.getHours() / 12,
  }
}

function updateClockHandRotations(){

  const{
    secondTurns,
    minuteTurns,
    hourTurns
  } = computeClockHandRotationInTurns();
  
  setRotationInTurns(second, secondTurns);
  setRotationInTurns(minute, minuteTurns);
  setRotationInTurns(hour, hourTurns);
}

setInterval(updateClockHandRotations, 1000);