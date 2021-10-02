import * as THREE from './three.module.js';

let camera, scene, renderer, geometry, mesh;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color( color );
    scene.fog = new THREE.Fog(color, near, far);

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const light = new THREE.PointLight()

    const material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        shininess: 10,
        whiframe: true
    })
    material.shininess = 50;

    const geometry = new THREE.CubeGeometry(200, 200, 200);
/*  const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
*/        
/*scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f120f);

    // Add a cube to the scene
    geometry = new THREE.BoxGeometry(3,1,3);
    //geometry = new THREE.CubeGeometry(2,2,2);
    //geometry = new THREE.CylinderGeometry(1.5, 1.5, 2, 32)
    //geometry = new THREE.SphereGeometry(1.5, 32, 32); // width, height, depth
    //geometry = new THREE.DodecahedronGeometry(1.5, 0);
    //geometry = new THREE.OctahedronGeometry(1.5, 0)
    //geometry = new THREE.RingGeometry( 1, 5, 32 );
    //geometry = new THREE.TetrahedronGeometry(1.5, 0)
    //geometry = new THREE.TorusGeometry( 3, 1, 8, 100 );
    //geometry = new THREE.TorusKnotGeometry( 3, 1, 100, 16 );
    material = new THREE.MeshPhongMaterial({ color: 0xf1c40f, wireframe: false });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    // Set up lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 20, 0); // x, y, z
    scene.add(directionalLight);

    // Camera
    const width = 10;
    const height = width * (window.innerHeight / window.innerWidth);
    camera = new THREE.OrthographicCamera(
      width / -2, // left
      width / 2, // right
      height / 2, // top
      height / -2, // bottom
      1, // near
      100 // far
    );

    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);*/
}

init();


