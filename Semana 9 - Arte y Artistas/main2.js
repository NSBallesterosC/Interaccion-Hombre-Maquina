import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

function crearEscena(canvasId, colorObjeto) {
  const canvas = document.getElementById(canvasId);

// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


// Camara
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
camera.position.z = 3;
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);


const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);

// cuadritos de colores
const size = 256;
const canvasTex = document.createElement('canvas');
canvasTex.width = size;
canvasTex.height = size;
const ctx = canvasTex.getContext('2d');

for (let x = 0; x < size; x += 16) {
  for (let y = 0; y < size; y += 16) {
    const hue = Math.random() * 360;
    ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;
    ctx.fillRect(x, y, 14, 14);
  }
}

const texture = new THREE.CanvasTexture(canvasTex);

//Bola de disco
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshStandardMaterial({
  map: texture,
  metalness: 0.2,
});

const bolaDisco = new THREE.Mesh(geometry, material);
scene.add(bolaDisco);

// Animacion
function animate() {
  requestAnimationFrame(animate);

  bolaDisco.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
}

crearEscena("scene2");