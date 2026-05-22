window.addEventListener("load", function () {

  function crearEscenaPlanta(idContenedor, esFondo) {
    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) {
      console.log("No existe el contenedor: " + idContenedor);
      return;
    }

    // ESCENA
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // CAMARA
    const camera = new THREE.PerspectiveCamera(
      45,
      contenedor.clientWidth / contenedor.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 9;

    // RENDER
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });

    renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    contenedor.appendChild(renderer.domElement);

    // LUCES
    const luz = new THREE.DirectionalLight(0xffffff, 1);
    luz.position.set(3, 5, 5);
    scene.add(luz);

    const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(luzAmbiente);

    // GRUPO PRINCIPAL
    const planta = new THREE.Group();
    scene.add(planta);

    // MATERIALES
    const materialHoja = new THREE.MeshPhongMaterial({
      color: 0x4fa313,
      side: THREE.DoubleSide
    });

    const materialBrillo = new THREE.MeshBasicMaterial({
      color: 0x8bdc3c,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });

    const materialTallo = new THREE.MeshPhongMaterial({
      color: 0x246f08
    });

    const materialLinea = new THREE.LineBasicMaterial({
      color: 0x111111
    });

    // CREAR TALLO
    function crearTallo(x1, y1, x2, y2, grosor) {
      const curva = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x1, y1, 0),
        new THREE.Vector3((x1 + x2) / 2, (y1 + y2) / 2 + 0.25, 0),
        new THREE.Vector3(x2, y2, 0)
      ]);

      const geometria = new THREE.TubeGeometry(curva, 40, grosor, 12, false);
      const tallo = new THREE.Mesh(geometria, materialTallo);
      planta.add(tallo);

      const lineaGeo = new THREE.BufferGeometry().setFromPoints(curva.getPoints(50));
      const linea = new THREE.Line(lineaGeo, materialLinea);
      linea.position.z = 0.04;
      planta.add(linea);
    }

    function crearVena(grupo, x1, y1, x2, y2) {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y1, 0.08),
        new THREE.Vector3(x2, y2, 0.08)
      ]);

      const linea = new THREE.Line(geo, materialLinea);
      grupo.add(linea);
    }

    // CREAR HOJA
    function crearHoja(x, y, escala, rotacion) {
      const grupo = new THREE.Group();
      const shape = new THREE.Shape();

      shape.moveTo(0, 0);

      shape.bezierCurveTo(-0.25, 0.15, -0.55, 0.25, -0.85, 0.18);
      shape.bezierCurveTo(-0.78, 0.42, -1.10, 0.46, -1.30, 0.68);
      shape.bezierCurveTo(-1.00, 0.72, -0.92, 0.92, -1.15, 1.12);
      shape.bezierCurveTo(-0.80, 1.03, -0.74, 1.28, -0.90, 1.56);
      shape.bezierCurveTo(-0.58, 1.35, -0.42, 1.58, -0.32, 1.88);
      shape.bezierCurveTo(-0.15, 1.58, -0.05, 1.42, 0, 2.15);

      shape.bezierCurveTo(0.05, 1.42, 0.15, 1.58, 0.32, 1.88);
      shape.bezierCurveTo(0.42, 1.58, 0.58, 1.35, 0.90, 1.56);
      shape.bezierCurveTo(0.74, 1.28, 0.80, 1.03, 1.15, 1.12);
      shape.bezierCurveTo(0.92, 0.92, 1.00, 0.72, 1.30, 0.68);
      shape.bezierCurveTo(1.10, 0.46, 0.78, 0.42, 0.85, 0.18);
      shape.bezierCurveTo(0.55, 0.25, 0.25, 0.15, 0, 0);

      const geometria = new THREE.ShapeGeometry(shape);
      const hoja = new THREE.Mesh(geometria, materialHoja);
      grupo.add(hoja);

      const puntosBorde = shape.getPoints(100);
      const puntos3D = puntosBorde.map(function (p) {
        return new THREE.Vector3(p.x, p.y, 0.05);
      });

      const bordeGeo = new THREE.BufferGeometry().setFromPoints(puntos3D);
      const borde = new THREE.LineLoop(bordeGeo, materialLinea);
      grupo.add(borde);

      const venaCentral = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.05, 0.07),
        new THREE.Vector3(0, 2.0, 0.07)
      ]);

      grupo.add(new THREE.Line(venaCentral, materialLinea));

      crearVena(grupo, 0, 0.45, -0.65, 0.75);
      crearVena(grupo, 0, 0.65, 0.65, 0.9);
      crearVena(grupo, 0, 0.95, -0.55, 1.25);
      crearVena(grupo, 0, 1.18, 0.55, 1.42);
      crearVena(grupo, 0, 1.45, -0.35, 1.75);

      const brillo = new THREE.Mesh(
        new THREE.CircleGeometry(0.27, 30),
        materialBrillo
      );

      brillo.scale.set(1.4, 0.45, 1);
      brillo.position.set(-0.30, 1.25, 0.08);
      brillo.rotation.z = 0.5;
      grupo.add(brillo);

      grupo.position.set(x, y, 0);
      grupo.scale.set(escala, escala, escala);
      grupo.rotation.z = rotacion;

      planta.add(grupo);
    }

    // TALLOS
    crearTallo(0, -3.5, 0, -1.0, 0.08);
    crearTallo(0, -1.1, -1.8, 0.1, 0.055);
    crearTallo(0, -1.1, 1.8, 0.1, 0.055);
    crearTallo(0, -1.0, -0.35, 1.65, 0.06);

    // HOJAS
    crearHoja(-0.35, 1.55, 1.05, -0.15);
    crearHoja(-1.60, 0.25, 0.95, Math.PI / 2);
    crearHoja(1.60, 0.25, 0.95, -Math.PI / 2);

    // Ajustes diferentes para cada parte
    if (esFondo) {
      planta.position.y = -0.45;
      planta.scale.set(1.4, 1.4, 1.4);
    } else {
      planta.position.y = -0.35;
      planta.scale.set(0.85, 0.85, 0.85);
    }

    function animarPlanta() {
      requestAnimationFrame(animarPlanta);

      planta.rotation.y = Math.sin(Date.now() * 0.001) * 0.08;

      renderer.render(scene, camera);
    }

    animarPlanta();

    window.addEventListener("resize", function () {
      const ancho = contenedor.clientWidth;
      const alto = contenedor.clientHeight;

      camera.aspect = ancho / alto;
      camera.updateProjectionMatrix();

      renderer.setSize(ancho, alto);
    });
  }

  // Escena pequeña del banner
  crearEscenaPlanta("escena-planta", false);

  // Escena grande debajo del carrusel
  crearEscenaPlanta("escena-fondo", true);

});