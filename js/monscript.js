var camera, scene, renderer;
var geometry, material, mesh;
var geometry2, material2, sphere;

var flag = 0;

function init() {

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);

  camera.position.z = 1000;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshBasicMaterial({
    color: 0xEFD000,
    wireframe: false
  });

  mesh = new THREE.Mesh(geometry, material);
  
  scene.add(mesh);

  geometry2 = new THREE.SphereGeometry( 1000, 32, 32 );
  material2 = new THREE.MeshBasicMaterial( {color: 0x017EFD, wireframe: true} );
  sphere = new THREE.Mesh( geometry2, material2 );
  
  scene.add( sphere );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  renderer.render(scene, camera);

}

function animat() {

  requestAnimationFrame(()=>{});

  sphere.rotation.y += 0.001;

  mesh.rotation.z += 0.005;
  mesh.rotation.y += 0.003;
  mesh.rotation.x += 0.001;

 /* console.log (sphere);
  console.log (renderer);
*/
  renderer.render(scene, camera);


}

setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

function onTimerTick() {
    animat();
}