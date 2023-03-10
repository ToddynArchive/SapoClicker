const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 150;
let y = 150;
let z = 150;
let size = 100;

let angleX = 0;
let angleY = 0;
let angleZ = 0;

function drawCube() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ffffff';

  const vertices = [
    {x: x - size/2, y: y - size/2, z: z - size/2},
    {x: x + size/2, y: y - size/2, z: z - size/2},
    {x: x + size/2, y: y + size/2, z: z - size/2},
    {x: x - size/2, y: y + size/2, z: z - size/2},
    {x: x - size/2, y: y - size/2, z: z + size/2},
    {x: x + size/2, y: y - size/2, z: z + size/2},
    {x: x + size/2, y: y + size/2, z: z + size/2},
    {x: x - size/2, y: y + size/2, z: z + size/2},
  ];

  for (let i = 0; i < vertices.length; i++) {
    const y = vertices[i].y;
    const z = vertices[i].z;
    vertices[i].y = y * Math.cos(angleX) - z * Math.sin(angleX);
    vertices[i].z = z * Math.cos(angleX) + y * Math.sin(angleX);
  }

  for (let i = 0; i < vertices.length; i++) {
    const x = vertices[i].x;
    const z = vertices[i].z;
    vertices[i].x = x * Math.cos(angleY) - z * Math.sin(angleY);
    vertices[i].z = z * Math.cos(angleY) + x * Math.sin(angleY);
  }

  for (let i = 0; i < vertices.length; i++) {
    const x = vertices[i].x;
    const y = vertices[i].y;
    vertices[i].x = x * Math.cos(angleZ) - y * Math.sin(angleZ);
    vertices[i].y = y * Math.cos(angleZ) + x * Math.sin(angleZ);
  }

  ctx.beginPath();
  ctx.moveTo(vertices[0].x, vertices[0].y);
  ctx.lineTo(vertices[1].x, vertices[1].y);
  ctx.lineTo(vertices[2].x, vertices[2].y);
  ctx.lineTo(vertices[3].x, vertices[3].y);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(vertices[4].x, vertices[4].y);
  ctx.lineTo(vertices[5].x, vertices[5].y);
 ctx.lineTo(vertices[6].x, vertices[6].y);
ctx.lineTo(vertices[7].x, vertices[7].y);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(vertices[0].x, vertices[0].y);
ctx.lineTo(vertices[4].x, vertices[4].y);
ctx.lineTo(vertices[7].x, vertices[7].y);
ctx.lineTo(vertices[3].x, vertices[3].y);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(vertices[1].x, vertices[1].y);
ctx.lineTo(vertices[5].x, vertices[5].y);
ctx.lineTo(vertices[6].x, vertices[6].y);
ctx.lineTo(vertices[2].x, vertices[2].y);
ctx.closePath();
ctx.fill();
}

function moveCube(dx, dy, dz) {
x += dx;
y += dy;
z += dz;
}

function rotateCube(angleX, angleY, angleZ) {
angleX += angleX;
angleY += angleY;
angleZ += angleZ;
}

window.addEventListener('keydown', function(event) {
switch (event.key) {
case 'ArrowLeft':
moveCube(-10, 0, 0);
break;
case 'ArrowRight':
moveCube(10, 0, 0);
break;
case 'ArrowUp':
moveCube(0, -10, 0);
break;
case 'ArrowDown':
moveCube(0, 10, 0);
break;
case 'q':
rotateCube(-0.1, 0, 0);
break;
case 'e':
rotateCube(0.1, 0, 0);
break;
case 'w':
rotateCube(0, -0.1, 0);
break;
case 's':
rotateCube(0, 0.1, 0);
break;
case 'a':
rotateCube(0, 0, -0.1);
break;
case 'd':
rotateCube(0, 0, 0.1);
break;
}
});
setInterval(drawCube, 30);
