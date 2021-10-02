import * as THREE from './three.module.js';
import { OrbitControls } from "./OrbitControls.js";

let camera, scene, renderer,  material, geometry, mesh, controls;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x161616);
    
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 3000)
    camera.position.z = 500;

    geometry = new THREE.BoxGeometry(1000,1000,1000);
    
    
    const imagePrefix = 'img/cocoa_';
    const directions  = ["ft", "bk", "up", "dn", "rt", "lf"];
    const imageSuffix = ".jpg";
    const materialArray = [];
    for (var i = 0; i < 6; i++)
      materialArray.push( new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
        side: THREE.BackSide
    }));
    const material = new THREE.MeshFaceMaterial( materialArray );

    
    mesh = new THREE.Mesh( geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);
    controls.minDistance = 500;
    controls.maxDistance = 1800;

    window.addEventListener( 'resize', onWindowResize );
    render();
    
}
function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
	//controls.handleResize();

}

function render() {
    requestAnimationFrame( render );
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render( scene, camera );
}
init();
