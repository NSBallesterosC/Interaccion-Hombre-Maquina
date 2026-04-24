import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

function crearEscena(canvasId, colorObjeto) {
    const canvas = document.getElementById(canvasId);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    // LUZ (para que se vea más bonito)
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    // GRUPO PERSONAJE
    const personaje = new THREE.Group();

    // 🎨 Materiales
    const materialCuerpo = new THREE.MeshPhongMaterial({ color: colorObjeto });
    const materialCara = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const materialOjos = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // 🟡 CUERPO (más redondeado)
    const cuerpo = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.4, 0.8, 8, 16),
        materialCuerpo
    );
    personaje.add(cuerpo);

    // ⚪ CARA (ovalada)
    const cara = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 16, 16),
        materialCara
    );
    cara.scale.set(1, 1.2, 0.5);
    cara.position.set(0, 0.3, 0.35);
    personaje.add(cara);

    // 👀 OJOS
    const ojo1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 8, 8),
        materialOjos
    );
    ojo1.position.set(-0.08, 0.3, 0.6);

    const ojo2 = ojo1.clone();
    ojo2.position.x = 0.08;

    personaje.add(ojo1, ojo2);

    // 💪 BRAZOS
    const brazoGeo = new THREE.CapsuleGeometry(0.1, 0.4, 4, 8);

    const brazoIzq = new THREE.Mesh(brazoGeo, materialCuerpo);
    brazoIzq.position.set(-0.55, 0.2, 0);
    brazoIzq.rotation.z = Math.PI / 4;

    const brazoDer = brazoIzq.clone();
    brazoDer.position.x = 0.55;
    brazoDer.rotation.z = -Math.PI / 4;

    personaje.add(brazoIzq, brazoDer);

    // 🦵 PIERNAS
    const piernaGeo = new THREE.CapsuleGeometry(0.15, 0.3, 4, 8);

    const piernaIzq = new THREE.Mesh(piernaGeo, materialCuerpo);
    piernaIzq.position.set(-0.2, -0.7, 0);

    const piernaDer = piernaIzq.clone();
    piernaDer.position.x = 0.2;

    personaje.add(piernaIzq, piernaDer);

    scene.add(personaje);
    camera.position.z = 3;

    // 🎞️ ANIMACIÓN (más natural)
    function animate() {
        requestAnimationFrame(animate);

        personaje.rotation.y += 0.01;

        // pequeño rebote
        personaje.position.y = Math.sin(Date.now() * 0.003) * 0.1;

        renderer.render(scene, camera);
    }

    animate();
}

// LLAMADA
crearEscena("canvas1", 0xff3cac); // rosado tipo Fall Guys