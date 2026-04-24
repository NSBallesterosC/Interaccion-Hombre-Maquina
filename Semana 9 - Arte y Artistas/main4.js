import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

const canvas = document.querySelector('#scene4');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/300, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, 300);

// Cubo moviéndose
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0xffff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let direction = 0.02;

function animate() {
  cube.position.x += direction;

  if(cube.position.x > 2 || cube.position.x < -2){
    direction *= -1;
  }

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);