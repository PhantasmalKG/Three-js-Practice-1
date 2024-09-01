import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({antialias: true} ); //Renders the 3D elements onto the canvas  of the html
const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h); //Screen size that will be rendered
document.body.appendChild(renderer.domElement); // The canvas element

const fov = 75; //Field of view (in degrees; hence, 75 degrees)
const aspect = w/h; //aspect ratio
const near = 0.1; // near sighted range
const far = 10; //far sighted range
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); //View of the scene
camera.position.z = 2; //Position of the camera further away from the scene
const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(.75, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});

console.log(scene);
console.log(camera);
console.log(renderer);

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const wiredMesh = new THREE.Mesh(geo, wireMat);
scene.add(wiredMesh);

const hemlight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemlight);


function animate(t = 0){
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0); - Grows bigger and smaller
    mesh.rotation.x = t * 0.00034;
    renderer.render(scene, camera);
}



animate();

