function CrearEdificio(X, Z) {
  var texturas = ["Edificios/edificio1.jpg", "Edificios/edificio2.jpg", "Edificios/edificio3.jpg"];
  var Alt = Math.floor(Math.random() * 4) + 3;
  var geometry = new THREE.BoxGeometry(1, 0.1, 1);
  var texture = new THREE.TextureLoader().load("Calles/piso.png");
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = X;
  cube.position.z = Z;
  cube.position.y = 0;
  scene.add(cube);

  if (X != 0 && X != k - 1 && Z != 0 && Z != k - 1) {
    geometry = new THREE.BoxGeometry(1, Alt, 1);
    var texturas = new THREE.TextureLoader().load(texturas[Math.floor(Math.random() * texturas.length)]);
    material = new THREE.MeshBasicMaterial({map: texturas});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = X;
    cube.position.z = Z;
    cube.position.y = Alt / 2;
    scene.add(cube);
  
    const geometry2 = new THREE.BoxGeometry(1, 0.05, 1);
    const textura2 = new THREE.TextureLoader().load("Edificios/techo.jpg");
    const material2 = new THREE.MeshBasicMaterial({map: textura2,side: THREE.DoubleSide,});   
    var cube2 = new THREE.Mesh(geometry2, material2);
    scene.add(cube2);
    cube2.position.y = Alt / 2;
    cube.add(cube2);



  

      
  }
}