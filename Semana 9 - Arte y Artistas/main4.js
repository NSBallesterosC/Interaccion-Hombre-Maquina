import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

function crearEscena(canvasId, colorObjeto) {
const canvas = document.getElementById(canvasId);

// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camara
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
camera.position.z = 2.7;
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Luz
scene.add(new THREE.AmbientLight(0xffffff, 1));

// Estrella
const shape = new THREE.Shape();

const outerRadius = 1;
const innerRadius = 0.4;
const spikes = 5;

for (let i = 0; i < spikes * 2; i++) {
  const angle = (i / (spikes * 2)) * Math.PI * 2;
  const radius = i % 2 === 0 ? outerRadius : innerRadius;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  if (i === 0) {
    shape.moveTo(x, y);
  } else {
    shape.lineTo(x, y);
  }
}

// Geometria
const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 0.3,
  bevelEnabled: false
});

// Material
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  emissive: 0xffff00,

});

const estrella = new THREE.Mesh(geometry, material);
scene.add(estrella);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

//Click para cambiar el colorsito de la estrella
canvas.addEventListener('click', (e) => {

  const x = (e.offsetX / canvas.clientWidth) * 2 - 1;
  const y = -(e.offsetY / canvas.clientHeight) * 2 + 1;

  raycaster.setFromCamera({ x, y }, camera);

  if (raycaster.intersectObject(estrella).length > 0) {

    const color = new THREE.Color(Math.random(), Math.random(), Math.random());

    estrella.material.color = color;
    estrella.material.emissive = color;
  }
});

// Animacion
function animate() {
  requestAnimationFrame(animate);

  estrella.rotation.y += 0.01;
  estrella.rotation.x += 0.005;

  renderer.render(scene, camera);
}

animate();
}

crearEscena("scene4", 0xffff00); 