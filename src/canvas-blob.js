//  https://stackoverflow.com/a/59013162

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;
const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// document.body.appendChild(canvas);

// let WWIDTH = window.innerWidth,
//     WHEIGHT = window.innerHeight;

canvas.id = "loginBlob";

window.addEventListener("resize", (e) => {
    // console.log(e);
    if(document.getElementById('loginBlob')){
        document.getElementById('loginBlob').width = window.innerWidth;
        document.getElementById('loginBlob').height = window.innerHeight;
    }
});

class Blob {
  constructor() {
    this.wobbleIncrement = 0;
    // use this to change the size of the blob
    this.radius = 1000;
    // think of this as detail level
    // number of conections in the `bezierSkin`
    this.segments = 13;
    this.step = HALF_PI / this.segments;
    this.anchors = [];
    this.radii = [];
    this.thetaOff = [];

    const bumpRadius = 100;
    const halfBumpRadius = bumpRadius / 2;

    for (let i = 0; i < this.segments + 2; i++) {
      this.anchors.push(0, 0);
      this.radii.push(Math.random() * bumpRadius - halfBumpRadius);
      this.thetaOff.push(Math.random() * 2 * Math.PI);
    }

    this.theta = 0;
    this.thetaRamp = 0;
    this.thetaRampDest = 12;
    this.rampDamp = 25;
  }
  update() {
    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += 0.03;

    this.anchors = [0, this.radius];
    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.radius + this.radii[i] * sine;
      const x = rad * Math.sin(this.step * i);
      const y = rad * Math.cos(this.step * i);
      this.anchors.push(x, y);
    }

    c.save();
    c.translate(-10, -10);
    c.scale(0.5, 0.5);
    c.fillStyle = "#26262b";
    c.beginPath();
    c.moveTo(0, 0);
    bezierSkin(this.anchors, false);
    
    c.lineTo(0, 0);
    c.fill();
    c.restore();
  }
}

var blob = new Blob();
var _time = 1.834;

function loop(timestamp) {
//   console.log( typeof(timestamp) , timestamp, "_time", _time);
  if(_time < timestamp)
    _time = timestamp;
  else if(typeof(timestamp) !== 'undefined')
    return;
  c.clearRect(0, 0, canvas.width, canvas.height);
  blob.update();
  window.requestAnimationFrame(loop);
}
// loop();

function unloop(){
//   window.cancelAnimationFrame(loop); //not really working
  loop(_time + 30);
  blob = new Blob();
}

// array of xy coords, closed boolean
function bezierSkin(bez, closed = true) {
  const avg = calcAvgs(bez);
  const leng = bez.length;

  if (closed) {
    c.moveTo(avg[0], avg[1]);
    for (let i = 2; i < leng; i += 2) {
      let n = i + 1;
      c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }
    c.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
  } else {
    c.moveTo(bez[0], bez[1]);
    c.lineTo(avg[0], avg[1]);
    for (let i = 2; i < leng - 2; i += 2) {
      let n = i + 1;
      c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }
    c.lineTo(bez[leng - 2], bez[leng - 1]);
  }
}

// create anchor points by averaging the control points
function calcAvgs(p) {
  const avg = [];
  const leng = p.length;
  let prev;

  for (let i = 2; i < leng; i++) {
    prev = i - 2;
    avg.push((p[prev] + p[i]) / 2);
  }
  // close
  avg.push((p[0] + p[leng - 2]) / 2, (p[1] + p[leng - 1]) / 2);
  return avg;
}
