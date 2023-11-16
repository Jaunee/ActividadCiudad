function CrearCalle(X, Z) {
    const geometry = new THREE.BoxGeometry(1, 0.1, 1);
    var texture = new THREE.TextureLoader().load("Calles/piso.png");
    var material = new THREE.MeshBasicMaterial({ map: texture });
    if (X != 0 && X != k - 1 && Z != 0 && Z != k - 1) {
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/calle.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/carrera.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/interseccion.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      //////
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/casiinterseccion1.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/casiinterseccion3.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/casiinterseccion3.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/casiinterseccion4.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      ////////
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/curva1.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/curva2.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/curva3.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/curva4.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      ///////
      if (MatrixB[X - 1][Z] == 1 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/cerrada1.jpeg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 1 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/cerrada3.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 1 && MatrixB[X][Z + 1] == 0) {
        texture = new THREE.ImageUtils.loadTexture("Calles/cerrada2.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
      if (MatrixB[X - 1][Z] == 0 && MatrixB[X + 1][Z] == 0 && MatrixB[X][Z - 1] == 0 && MatrixB[X][Z + 1] == 1) {
        texture = new THREE.ImageUtils.loadTexture("Calles/cerrada4.jpg");
        material = new THREE.MeshBasicMaterial({map: texture});
      }
    }
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = X;
    cube.position.z = Z;
    scene.add(cube);
  }