import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

const canvas = document.querySelector('#scene1');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/300, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, 300);

// Cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);