import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

function crearEscena(canvasId, colorObjeto) {
  const canvas = document.getElementById(canvasId);

  // Escena
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  // Camara
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
  camera.position.z = 4;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Luz
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  // Dona
  const geometry = new THREE.TorusGeometry(1, 0.35, 32, 100);
  const material = new THREE.MeshStandardMaterial({
    color: colorObjeto,     
    emissive: colorObjeto,  
  });

  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  // Animacion
  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

crearEscena("scene3", 0xff00ff); 
