import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

function crearEscena(canvasId, colorObjeto) {
const canvas = document.getElementById(canvasId);

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camara
const camera = new THREE.PerspectiveCamera(66, 2, 0.1, 1000);
camera.position.z = 4;

camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();


const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.7));

const gato = new THREE.Group();

// materiales
const matGato = new THREE.MeshPhongMaterial({ color: 0xff9900 });
const matOjos = new THREE.MeshBasicMaterial({ color: 0x000000 });
const matNariz = new THREE.MeshBasicMaterial({ color: 0xff66aa });

// cabeza
const cabeza = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  matGato
);
gato.add(cabeza);

// orejas
const orejaGeo = new THREE.ConeGeometry(0.3, 0.6, 4);

const oreja1 = new THREE.Mesh(orejaGeo, matGato);
oreja1.position.set(-0.4, 0.8, 0);
oreja1.rotation.z = Math.PI / 8;

const oreja2 = oreja1.clone();
oreja2.position.x = 0.4;
oreja2.rotation.z = -Math.PI / 8;


gato.add(oreja1, oreja2);

// ojos
const ojo1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.1),
  matOjos
);
ojo1.position.set(-0.25, 0.2, 0.7);

const ojo2 = ojo1.clone();
ojo2.position.x = 0.25;

gato.add(ojo1, ojo2);

// nariz
const nariz = new THREE.Mesh(
  new THREE.SphereGeometry(0.08),
  matNariz
);
nariz.position.set(0, 0, 0.8);
gato.add(nariz);

// cuerpo
const cuerpo = new THREE.Mesh(
  new THREE.SphereGeometry(0.9, 32, 32),
  matGato
);
cuerpo.position.y = -1.2;
gato.add(cuerpo);

scene.add(gato);

// Animacion
function animate() {
  requestAnimationFrame(animate);

  gato.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
}
crearEscena("scene1", 0xff9900);
