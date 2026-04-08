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
const light1 = new THREE.DirectionalLight( 0xFAFAFA, 5 );
scene.add( light1 );
light1.position.set(-180, 70, 1 );
const helper1 = new THREE.DirectionalLightHelper( light1, 1 );
scene.add( helper1 );
    
//Material
const material = new THREE.MeshToonMaterial();

//Suelo, Plataformas y Rampa

// Suelo General
const geometriaPiso1 = new THREE.BoxGeometry( 30, 1, 30 );
const materialPiso1 = material.clone();
materialPiso1.color.set( 0x5A7685);
const piso1 = new THREE.Mesh( geometriaPiso1, materialPiso1 );
scene.add( piso1 );

// Plataforma azulA LA PARTE DE ABAJO
const geometriaPlataformaA = new THREE.BoxGeometry( 15, 1, 7 );
const materialPlataformaA = material.clone();
materialPlataformaA.color.set( 0x0198f8

 );
const plataformaA = new THREE.Mesh( geometriaPlataformaA, materialPlataformaA );
plataformaA.position.y =2;
plataformaA.position.z = 0.5;
scene.add( plataformaA );

//RAMPA Y PLATAFORMAS DE LA PARTE DE ARRIBA

//Rampa1
const rampa1Geometria = new THREE.BoxGeometry( 5, 1, 10.5 );
const rampa1Material = material.clone();
rampa1Material.color.set( 0x00bbfd

 );
const rampa1 = new THREE.Mesh( rampa1Geometria, rampa1Material );
rampa1.rotation.x = -Math.PI / -6;
rampa1.rotation.y = -Math.PI / -1.12;
rampa1.rotation.z = -Math.PI / 10;
rampa1.position.set(4.2, 2.34, -0.9);

scene.add(rampa1);

//Plataforma Azul1
const geometriaPlataforma1 = new THREE.BoxGeometry( 6, 0.5, 10 );
const materialPlataforma1 = material.clone();
materialPlataforma1.color.set( 0x0198f8 );
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
rampa2Material.color.set( 0x00bbfd

 );
const rampa2 = new THREE.Mesh( rampa2Geometria, rampa2Material );
rampa2.rotation.x = -Math.PI / -6;
rampa2.rotation.y = Math.PI / -1.12;
rampa2.rotation.z = Math.PI / 10;
rampa2.position.set(-4.2, 2.34, -0.9);
scene.add(rampa2);


//Plataforma Azul2 
const geometriaPlataforma2 = new THREE.BoxGeometry( 6, 0.5, 10 );
const materialPlataforma2 = material.clone();
materialPlataforma2.color.set( 0x0198f8);
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
materialPlataforma3.color.set( 0xD4249F );
const plataforma3 = new THREE.Mesh( geometriaPlataforma3, materialPlataforma3 );
plataforma3.position.y = 0.2;
plataforma3.position.x = 0;
plataforma3.position.z = -15;
scene.add( plataforma3 );

//Rampa Parte de abajo
const rampa3Geometria = new THREE.BoxGeometry( 15, 1, 8 );
const rampa3Material = material.clone();
rampa3Material.color.set( 0xFb645db );
const rampa3 = new THREE.Mesh( rampa3Geometria, rampa3Material );
rampa3.rotation.x = Math.PI / 6;
rampa3.position.set(0, 0.2, 7);
scene.add(rampa3);


//Cerca amarilla
//Cilindro vertical 1
const cilindroRampa = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);

cilindroRampa.material.color.set(0x0ff9b3b);
cilindroRampa.position.set(-7, 1.6, 7);
scene.add(cilindroRampa);

//Cilindro vertical 2
const cilindroRampa2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);

cilindroRampa2.material.color.set(0xff9b3b);
cilindroRampa2.position.set(-7, 3, 3.5);
scene.add(cilindroRampa2);

//Cilindro vertical 3
const cilindroRampa3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);

cilindroRampa3.material.color.set(0xff9b3b);
cilindroRampa3.position.set(-5.5, 3, 1);
scene.add(cilindroRampa3);

//Cilindro vertical 4
const cilindroRampa4 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);

cilindroRampa4.material.color.set(0x0ff9b3b);
cilindroRampa4.position.set(-7.6, 5.6, -4);
scene.add(cilindroRampa4);

//Cilindro vertical 5
const cilindroRampa5 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);

cilindroRampa5.material.color.set(0xff9b3b);
cilindroRampa5.position.set(-11, 5.6, -10.5);
scene.add(cilindroRampa5);

//Cilindro vertical 6
const cilindroRampa6 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);

cilindroRampa6.material.color.set(0xff9b3b);
cilindroRampa6.position.set(-11, 5.6, -13.5);
scene.add(cilindroRampa6);

//CercaCilindroHorizontal

//Cilindro Horizontal 1
const cilindroHorizontal1 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.3, 0.3, 4.2, 32 ),
    material.clone()
);

cilindroHorizontal1.material.color.set(0xff9b3b);
cilindroHorizontal1.rotation.x = Math.PI / -3;
cilindroHorizontal1.position.set(-7, 2.5, 5);
scene.add(cilindroHorizontal1);

//Cilindro Horizontal 2
const cilindroHorizontal2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.3, 0.3, 4, 32 ),
    material.clone()
);

cilindroHorizontal2.material.color.set(0xff9b3b);
cilindroHorizontal2.rotation.x = Math.PI / -3;
cilindroHorizontal2.position.set(-7, 3.3, 5);
scene.add(cilindroHorizontal2);

//Cilindro Horizontal 3
const cilindroHorizontal3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.4, 0.4, 3, 32 ),
    material.clone()
);

cilindroHorizontal3.material.color.set(0xff9b3b);
cilindroHorizontal3.rotation.x = Math.PI / 2;
cilindroHorizontal3.rotation.z = Math.PI / 7;
cilindroHorizontal3.position.set(-6, 3, 2);
scene.add(cilindroHorizontal3);

//Cilindro Horizontal 4
const cilindroHorizontal4 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.4, 0.4, 3, 32 ),
    material.clone()
);

cilindroHorizontal4.material.color.set(0x0ff9b3b);
cilindroHorizontal4.rotation.x = Math.PI / 2;
cilindroHorizontal4.rotation.z = Math.PI / 7;
cilindroHorizontal4.position.set(-6, 4, 2);
scene.add(cilindroHorizontal4);

//Espejo

//Cilindro vertical 7
const cilindroRampa7 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);
cilindroRampa7.material.color.set(0xff9b3b);
cilindroRampa7.position.set(7, 1.6, 7);
scene.add(cilindroRampa7);

//Cilindro vertical 8
const cilindroRampa8 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);
cilindroRampa8.material.color.set(0xff9b3b);
cilindroRampa8.position.set(7, 3, 3.5);
scene.add(cilindroRampa8);

//Cilindro vertical 9
const cilindroRampa9 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);
cilindroRampa9.material.color.set(0xff9b3b);
cilindroRampa9.position.set(5.5, 3, 1);
scene.add(cilindroRampa9);

//Cilindro vertical 10
const cilindroRampa10 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);
cilindroRampa10.material.color.set(0xff9b3b);
cilindroRampa10.position.set(7.6, 5.6, -4);
scene.add(cilindroRampa10);

//Cilindro vertical 11
const cilindroRampa11 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);
cilindroRampa11.material.color.set(0xff9b3b);
cilindroRampa11.position.set(11, 5.6, -10.5);
scene.add(cilindroRampa11);

//Cilindro vertical 12
const cilindroRampa12 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.5, 0.5, 3, 32 ),
    material.clone()
);
cilindroRampa12.material.color.set(0xff9b3b);
cilindroRampa12.position.set(11, 5.6, -13.5);
scene.add(cilindroRampa12);

//Cilindro Horizontal 5
const cilindroHorizontal5 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.3, 0.3, 4.2, 32 ),
    material.clone()
);
cilindroHorizontal5.material.color.set(0xff9b3b);
cilindroHorizontal5.rotation.x = Math.PI / -3;
cilindroHorizontal5.position.set(7, 2.5, 5);
scene.add(cilindroHorizontal5);

//Cilindro Horizontal 6
const cilindroHorizontal6 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.3, 0.3, 4, 32 ),
    material.clone()
);
cilindroHorizontal6.material.color.set(0xff9b3b);
cilindroHorizontal6.rotation.x = Math.PI / -3;
cilindroHorizontal6.position.set(7, 3.3, 5);
scene.add(cilindroHorizontal6);

//Cilindro Horizontal 7
const cilindroHorizontal7 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.4, 0.4, 3, 32 ),
    material.clone()
);

cilindroHorizontal7.material.color.set(0xff9b3b);
cilindroHorizontal7.rotation.x = Math.PI / 2;
cilindroHorizontal7.rotation.z = Math.PI / -7;
cilindroHorizontal7.position.set(6, 3, 2);
scene.add(cilindroHorizontal7);

//Cilindro Horizontal 8
const cilindroHorizontal8 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.4, 0.4, 3, 32 ),
    material.clone()
);

cilindroHorizontal8.material.color.set(0xff9b3b);
cilindroHorizontal8.rotation.x = Math.PI / 2;
cilindroHorizontal8.rotation.z = Math.PI / -7;
cilindroHorizontal8.position.set(6, 4, 2);
scene.add(cilindroHorizontal8);




//ARCO ARCO IRIS

//Arco 1
const arco1 = new THREE.Mesh
(
    new THREE.TorusGeometry(10, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0x00befe})
);

arco1.rotation.z = Math.PI / 4;
arco1.position.set(0, -3, -12);
scene.add(arco1);

//Arco 2
const arco2 = new THREE.Mesh
(
    new THREE.TorusGeometry(10.4, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xFFE600 })
);

arco2.rotation.z = Math.PI / 4;
arco2.position.set(0, -3, -12);
scene.add(arco2);

//Arco 3
const arco3 = new THREE.Mesh
(
    new THREE.TorusGeometry(10.8, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xfc9600 })
);
arco3.rotation.z = Math.PI / 4;
arco3.position.set(0, -3, -12);
scene.add(arco3);

//Arco 4
const arco4 = new THREE.Mesh
(
    new THREE.TorusGeometry(11.2, 0.4, 16, 50, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0xff57e4 })
);
arco4.rotation.z = Math.PI / 4;
arco4.position.set(0, -3, -12);
scene.add(arco4);





//CAÑONES

//CAÑON 1
// Cilindro 1 (abajo)
const cilindro1 = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1.material.color.set(0xff9900);
cilindro1.position.set(0, 6, -12);
scene.add(cilindro1);


//Cilindro 2 (medio)
const cilindro2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2.material.color.set(0xaaaaaa);

cilindro2.position.set(0, 6.9, -12);
scene.add(cilindro2);


//Cilindro 3 (arriba)
const cilindro3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3.5, 32 ),
    material.clone()
);
cilindro3.material.color.set(0xa92077);

cilindro3.position.set(0, 8.4, -12);
scene.add(cilindro3);


//ESFERA

const esfera1 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xf82c7e})
);
esfera1.position.set(0, 11.1, -11.8);
scene.add(esfera1);

//CILINDRO ESFERA
//CILINDRO (centro)
const cilindroCentro = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50,),
    new THREE.MeshBasicMaterial({ color: 0xea236d})
);
cilindroCentro.rotation.x = Math.PI / 3;
cilindroCentro.position.set(0, 11.9, -11);
scene.add(cilindroCentro);



// CILINDRO (dentro)
const cilindroDentro = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.6, 0.8, 2.5, 50,),
    new THREE.MeshBasicMaterial({ color: 0x43042B })
);
cilindroDentro.rotation.x = Math.PI / 2.7;
cilindroDentro.position.set(0, 12, -11);
scene.add(cilindroDentro);


const bordeAtras = new THREE.Mesh(
    new THREE.TorusGeometry( 0.6, 0.2, 20, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xaaaaaa })
);

bordeAtras.rotation.x = Math.PI / 1.2;
bordeAtras.position.set(0, 12.6, -9.7);
scene.add(bordeAtras);





//CAÑON 2
//Cilindro 1 (abajo)
const cilindro1B = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1B.material.color.set(0xff9900);
cilindro1B.position.set(4, 5, -13.9);
scene.add(cilindro1B);


//Cilindro 2 (medio)
const cilindro2B = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2B.material.color.set(0xaaaaaa);

cilindro2B.position.set(4, 5.9, -14);
scene.add(cilindro2B);


//Cilindro 3 (arriba)
const cilindro3B = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3B.material.color.set(0xa92077);

cilindro3B.position.set(4, 7.4, -14);
scene.add(cilindro3B);

//ESFERA
const esfera2 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xf82c7e })
);

esfera2.position.set(4, 10, -13.8);

scene.add(esfera2);
 
//CILINDRO CENTRO
const cilindroCentro2 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xea236d })
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
//Cilindro 1 (abajo)
const cilindro1C = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1C.material.color.set(0xff9900);

cilindro1C.position.set(-4, 5, -13.9); 
scene.add(cilindro1C);


//Cilindro 2 (medio)
const cilindro2C = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2C.material.color.set(0xaaaaaa);

cilindro2C.position.set(-4, 5.9, -14); 
scene.add(cilindro2C);


//Cilindro 3 (arriba)
const cilindro3C = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3C.material.color.set(0xa92077);

cilindro3C.position.set(-4, 7.4, -14); 
scene.add(cilindro3C);

//ESFERA
const esfera3 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xf82c7e })
);

esfera3.position.set(-4, 10, -13.8);

scene.add(esfera3);

//CILINDRO CENTRO
const cilindroCentro3 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xea236d })
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

//Cilindro 1 (abajo)
const cilindro1D = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1D.material.color.set(0xff9900);

cilindro1D.position.set(8, 3, -13.9);
scene.add(cilindro1D);


// Cilindro 2 (medio)
const cilindro2D = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2D.material.color.set(0xaaaaaa);

cilindro2D.position.set(8, 5, -14);
scene.add(cilindro2D);


//Cilindro 3 (arriba)
const cilindro3D = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3D.material.color.set(0xa92077);

cilindro3D.position.set(8, 5, -14);
scene.add(cilindro3D);


//ESFERA
const esfera4 = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xf82c7e })
);

esfera4.position.set(8, 7.5, -13.8);

scene.add(esfera4);

//CILINDRO CENTRO
const cilindroCentro4 = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xea236d })
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

//Cilindro 1 (abajo)
const cilindro1E = new THREE.Mesh(
    new THREE.CylinderGeometry( 2, 2, 1.5, 32 ),
    material.clone()
);
cilindro1E.material.color.set(0xff9900);

cilindro1E.position.set(-8, 3, -13.9); 
scene.add(cilindro1E);


//Cilindro 2 (medio)
const cilindro2E = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.6, 1.6, 0.8, 32 ),
    material.clone()
);
cilindro2E.material.color.set(0xaaaaaa);

cilindro2E.position.set(-8, 5, -14); 
scene.add(cilindro2E);


//Cilindro 3 (arriba)
const cilindro3E = new THREE.Mesh(
    new THREE.CylinderGeometry( 1.2, 1.2, 3, 32 ),
    material.clone()
);
cilindro3E.material.color.set(0xa92077);

cilindro3E.position.set(-8, 5, -14); 
scene.add(cilindro3E);

//ESFERA
const esfera4E = new THREE.Mesh(
    new THREE.SphereGeometry( 1.3, 32, 32 ),
    new THREE.MeshBasicMaterial({ color: 0xf82c7e })
);

esfera4E.position.set(-8, 7.5, -13.8);

scene.add(esfera4E);

//CILINDRO CENTRO
const cilindroCentro4E = new THREE.Mesh(
    new THREE.CylinderGeometry( 0.7, 1, 2.5, 50 ),
    new THREE.MeshBasicMaterial({ color: 0xea236d })
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
camera.position.set( 0, 15, 20 );
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// --- ANIMACIÓN ---
function animate( time ) 
{
	renderer.render( scene, camera );
}