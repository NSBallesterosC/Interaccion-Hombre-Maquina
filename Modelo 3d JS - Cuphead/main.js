import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

//Cuadricula
const gridHelper = new THREE.GridHelper( 50, 50 );
scene.add( gridHelper );

//Fondo y Luces 
const loader = new THREE.TextureLoader();
loader.load(
  "https://png.pngtree.com/background/20220720/original/pngtree-beautiful-blue-water-and-sky-background-picture-image_1674711.jpg",
  function(fondo){
    scene.background = fondo;
  }
);

//Luz de ambiente
const LuzAmbiente = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( LuzAmbiente );

//Luz del sol
const LuzSol = new THREE.DirectionalLight( 0xffffff, 1 );
LuzSol.position.set( 10, 15, 7 );
scene.add( LuzSol );
    
//Material
const material = new THREE.MeshToonMaterial();

//Suelo, Plataformas y Rampa

// Suelo General
const geometriaPiso1 = new THREE.BoxGeometry( 30, 1, 30 );
const materialPiso1 = material.clone();
materialPiso1.color.set( 0xee4c8c );
const piso1 = new THREE.Mesh( geometriaPiso1, materialPiso1 );
scene.add( piso1 );

// Plataforma azulA LA PARTE DE ABAJO
const geometriaPlataformaA = new THREE.BoxGeometry( 15, 1, 7 );
const materialPlataformaA = material.clone();
materialPlataformaA.color.set( 0x3060cf );
const plataformaA = new THREE.Mesh( geometriaPlataformaA, materialPlataformaA );
plataformaA.position.y =2;
plataformaA.position.z = 0.5;
scene.add( plataformaA );

//RAMPA Y PLATAFORMAS DE LA PARTE DE ARRIBA

//Rampa1
const rampa1Geometria = new THREE.BoxGeometry( 5, 1, 10.5 );
const rampa1Material = material.clone();
rampa1Material.color.set( 0xFAA18F );
const rampa1 = new THREE.Mesh( rampa1Geometria, rampa1Material );
rampa1.rotation.x = -Math.PI / -6;
rampa1.rotation.y = -Math.PI / -1.12;
rampa1.rotation.z = -Math.PI / 10;
rampa1.position.set(4.2, 2.34, -0.9);

scene.add(rampa1);

//Plataforma Azul1
const geometriaPlataforma1 = new THREE.BoxGeometry( 6, 0.5, 10 );
const materialPlataforma1 = material.clone();
materialPlataforma1.color.set( 0x3060cf );
const plataforma1 = new THREE.Mesh( geometriaPlataforma1, materialPlataforma1 );
plataforma1.position.y = 5;
plataforma1.position.x = 7.6; 
plataforma1.position.z = -10;
plataforma1.rotation.x = 3.1;
plataforma1.rotation.y = 3.6;

scene.add( plataforma1 );


//Rampa2
const rampa2Geometria = new THREE.BoxGeometry( 5, 1, 10.5 );
const rampa2Material = material.clone();
rampa2Material.color.set( 0xFAA18F );
const rampa2 = new THREE.Mesh( rampa2Geometria, rampa2Material );
rampa2.rotation.x = -Math.PI / -6;
rampa2.rotation.y = Math.PI / -1.12;
rampa2.rotation.z = Math.PI / 10;
rampa2.position.set(-4.2, 2.34, -0.9);
scene.add(rampa2);


//Plataforma Azul2 
const geometriaPlataforma2 = new THREE.BoxGeometry( 6, 0.5, 10 );
const materialPlataforma2 = material.clone();
materialPlataforma2.color.set( 0x3060cf );
const plataforma2 = new THREE.Mesh( geometriaPlataforma2, materialPlataforma2 );
plataforma2.position.y = 5;
plataforma2.position.x = -7.6;
plataforma2.position.z = -10;
plataforma2.rotation.x = 3.1;
plataforma2.rotation.y = -3.6;
scene.add( plataforma2 );

//Plataforma Rosa3
const geometriaPlataforma3 = new THREE.BoxGeometry( 24.5, 10, 10 );
const materialPlataforma3 = material.clone();
materialPlataforma3.color.set( 0x3060cf );
const plataforma3 = new THREE.Mesh( geometriaPlataforma3, materialPlataforma3 );
plataforma3.position.y = 0.2;
plataforma3.position.x = 0;
plataforma3.position.z = -15;
scene.add( plataforma3 );

//Rampa Parte de abajo
const rampa3Geometria = new THREE.BoxGeometry( 15, 1, 8 );
const rampa3Material = material.clone();
rampa3Material.color.set( 0xFAA18F );
const rampa3 = new THREE.Mesh( rampa3Geometria, rampa3Material );
rampa3.rotation.x = Math.PI / 6;
rampa3.position.set(0, 0.2, 7);
scene.add(rampa3);


//Cerca amarilla


//ARCO ARCO IRIS

//Arco 1
const arco1 = new THREE.Mesh
(
    new THREE.TorusGeometry(10, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

arco1.rotation.z = Math.PI / 4;
arco1.position.set(0, -3, -12);
scene.add(arco1);

//Arco 2
const arco2 = new THREE.Mesh
(
    new THREE.TorusGeometry(10.4, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xff9900 })
);

arco2.rotation.z = Math.PI / 4;
arco2.position.set(0, -3, -12);
scene.add(arco2);

//Arco 3
const arco3 = new THREE.Mesh
(
    new THREE.TorusGeometry(10.8, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
arco3.rotation.z = Math.PI / 4;
arco3.position.set(0, -3, -12);
scene.add(arco3);

//Arco 4
const arco4 = new THREE.Mesh
(
    new THREE.TorusGeometry(11.2, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
arco4.rotation.z = Math.PI / 4;
arco4.position.set(0, -3, -12);
scene.add(arco4);



//CAÑONES

//CAÑON 1 (EL MAS LARGO)
// 🟠 Cilindro 1 (abajo)
const cilindro1 = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1.material.color.set(0xff9900);

// misma posición X y Z de la plataforma
cilindro1.position.set(0, 6, -12);
scene.add(cilindro1);


// ⚪ Cilindro 2 (medio)
const cilindro2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2.material.color.set(0xaaaaaa);

cilindro2.position.set(0, 6.9, -12);
scene.add(cilindro2);


// 🟣 Cilindro 3 (arriba)
const cilindro3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3.5, 32 ),
    material.clone()
);
cilindro3.material.color.set(0x8000ff);

cilindro3.position.set(0, 8.4, -12);
scene.add(cilindro3);


//ESFERA

const esfera1 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xFF1AAA })
);
esfera1.position.set(0, 11.1, -11.8);
scene.add(esfera1);

//CILINDRO ESFERA
// 🔴 CILINDRO (centro)
const cilindroCentro = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50,),
    new THREE.MeshBasicMaterial({ color: 0xC90C80 })
);

// lo rotamos para que apunte hacia adelante
cilindroCentro.rotation.x = Math.PI / 3;

// misma posición que la esfera
cilindroCentro.position.set(0, 11.9, -11);
scene.add(cilindroCentro);



// CILINDRO (dentro)
const cilindroDentro = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.6, 0.8, 2.5, 50,),
    new THREE.MeshBasicMaterial({ color: 0x43042B })
);

// lo rotamos para que apunte hacia adelante
cilindroDentro.rotation.x = Math.PI / 2.7;

// misma posición que la esfera
cilindroDentro.position.set(0, 12, -11);
scene.add(cilindroDentro);



// ⚪ BORDE TRASERO
const bordeAtras = new THREE.Mesh(
    new THREE.TorusGeometry( 0.6, 0.2, 20, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
);

// misma rotación que el cilindro
bordeAtras.rotation.x = Math.PI / 1.2;

// lo movemos un poquito hacia atrás
bordeAtras.position.set(0, 12.6, -9.7);

scene.add(bordeAtras);





//CAÑON 2
// 🟠 Cilindro 1 (abajo)
const cilindro1B = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1B.material.color.set(0xff9900);

// misma posición X y Z de la plataforma
cilindro1B.position.set(4, 5, -13.9);
scene.add(cilindro1B);


// ⚪ Cilindro 2 (medio)
const cilindro2B = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2B.material.color.set(0xaaaaaa);

cilindro2B.position.set(4, 5.9, -14);
scene.add(cilindro2B);


// 🟣 Cilindro 3 (arriba)
const cilindro3B = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3B.material.color.set(0x8000ff);

cilindro3B.position.set(4, 7.4, -14);
scene.add(cilindro3B);

//ESFERA
const esfera2 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xFF1AAA })
);

// misma X del cañón (4)
// bajamos en Y respecto al cañón 1
esfera2.position.set(4, 10, -13.8);

scene.add(esfera2);
 
//CILINDRO CENTRO
const cilindroCentro2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xC90C80 })
);

cilindroCentro2.rotation.x = Math.PI / 3;

cilindroCentro2.position.set(4, 10.8, -13);

scene.add(cilindroCentro2);

//CILINDRO INTERNO
const cilindroDentro2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.6, 0.8, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0x43042B })
);

cilindroDentro2.rotation.x = Math.PI / 2.7;

cilindroDentro2.position.set(4, 10.9, -13);

scene.add(cilindroDentro2);


//BORDE

const bordeAtras2 = new THREE.Mesh(
    new THREE.TorusGeometry( 0.6, 0.2, 20, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
);

bordeAtras2.rotation.x = Math.PI / 1.2;

bordeAtras2.position.set(4, 11.5, -11.7);

scene.add(bordeAtras2);



//CAÑON 3
// 🟠 Cilindro 1 (abajo)
const cilindro1C = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1C.material.color.set(0xff9900);

cilindro1C.position.set(-4, 5, -13.9); // ← espejo
scene.add(cilindro1C);


// ⚪ Cilindro 2 (medio)
const cilindro2C = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2C.material.color.set(0xaaaaaa);

cilindro2C.position.set(-4, 5.9, -14); // ← espejo
scene.add(cilindro2C);


// 🟣 Cilindro 3 (arriba)
const cilindro3C = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3C.material.color.set(0x8000ff);

cilindro3C.position.set(-4, 7.4, -14); // ← espejo
scene.add(cilindro3C);

//ESFERA
const esfera3 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xFF1AAA })
);

esfera3.position.set(-4, 10, -13.8);

scene.add(esfera3);

//CILINDRO CENTRO
const cilindroCentro3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xC90C80 })
);

cilindroCentro3.rotation.x = Math.PI / 3;

cilindroCentro3.position.set(-4, 10.8, -13);

scene.add(cilindroCentro3);

//CILINDRO INTERNO
const cilindroDentro3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.6, 0.8, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0x43042B })
);

cilindroDentro3.rotation.x = Math.PI / 2.7;

cilindroDentro3.position.set(-4, 10.9, -13);

scene.add(cilindroDentro3);

//BORDE

const bordeAtras3 = new THREE.Mesh(
    new THREE.TorusGeometry( 0.6, 0.2, 20, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
);

bordeAtras3.rotation.x = Math.PI / 1.2;

bordeAtras3.position.set(-4, 11.5, -11.7);

scene.add(bordeAtras3); 





//CAÑON 4

// 🟠 Cilindro 1 (abajo)
const cilindro1D = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1D.material.color.set(0xff9900);

// misma posición X y Z de la plataforma
cilindro1D.position.set(8, 3, -13.9);
scene.add(cilindro1D);


// ⚪ Cilindro 2 (medio)
const cilindro2D = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2D.material.color.set(0xaaaaaa);

cilindro2D.position.set(8, 5, -14);
scene.add(cilindro2D);


// 🟣 Cilindro 3 (arriba)
const cilindro3D = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3D.material.color.set(0x8000ff);

cilindro3D.position.set(8, 5, -14);
scene.add(cilindro3D);


//ESFERA
const esfera4 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xFF1AAA })
);

esfera4.position.set(8, 7.5, -13.8);

scene.add(esfera4);

//CILINDRO CENTRO
const cilindroCentro4 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xC90C80 })
);

cilindroCentro4.rotation.x = Math.PI / 3;

cilindroCentro4.position.set(8, 8.3, -13);

scene.add(cilindroCentro4);

//CILINDRO INTERNO
const cilindroDentro4 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.6, 0.8, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0x43042B })
);

cilindroDentro4.rotation.x = Math.PI / 2.7;

cilindroDentro4.position.set(8, 8.4, -13);

scene.add(cilindroDentro4);

//BORDE
const bordeAtras4 = new THREE.Mesh(
    new THREE.TorusGeometry( 0.6, 0.2, 20, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
);

bordeAtras4.rotation.x = Math.PI / 1.2;

bordeAtras4.position.set(8, 9, -11.7);

scene.add(bordeAtras4);


//CAÑON 5

// 🟠 Cilindro 1 (abajo)
const cilindro1E = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1E.material.color.set(0xff9900);

cilindro1E.position.set(-8, 3, -13.9); // ← espejo
scene.add(cilindro1E);


// ⚪ Cilindro 2 (medio)
const cilindro2E = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2E.material.color.set(0xaaaaaa);

cilindro2E.position.set(-8, 5, -14); // ← espejo
scene.add(cilindro2E);


// 🟣 Cilindro 3 (arriba)
const cilindro3E = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3E.material.color.set(0x8000ff);

cilindro3E.position.set(-8, 5, -14); // ← espejo
scene.add(cilindro3E);

//ESFERA
const esfera4E = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xFF1AAA })
);

esfera4E.position.set(-8, 7.5, -13.8);

scene.add(esfera4E);

//CILINDRO CENTRO
const cilindroCentro4E = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xC90C80 })
);

cilindroCentro4E.rotation.x = Math.PI / 3;

cilindroCentro4E.position.set(-8, 8.3, -13);

scene.add(cilindroCentro4E);


//CILINDRO INTERNO
const cilindroDentro4E = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.6, 0.8, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0x43042B })
);

cilindroDentro4E.rotation.x = Math.PI / 2.7;

cilindroDentro4E.position.set(-8, 8.4, -13);

scene.add(cilindroDentro4E);


//BORDE 
const bordeAtras4E = new THREE.Mesh(
    new THREE.TorusGeometry( 0.6, 0.2, 20, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
);

bordeAtras4E.rotation.x = Math.PI / 1.2;

bordeAtras4E.position.set(-8, 9, -11.7);

scene.add(bordeAtras4E);














// --- CÁMARA Y CONTROLES ---
camera.position.set( 0, 10, 15 );
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// --- ANIMACIÓN ---
function animate( time ) 
{
	renderer.render( scene, camera );
}