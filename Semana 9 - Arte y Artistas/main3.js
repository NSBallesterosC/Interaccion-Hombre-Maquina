import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

const canvas = document.querySelector('#scene3');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/300, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, 300);

// Dona
const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

function animate() {
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);