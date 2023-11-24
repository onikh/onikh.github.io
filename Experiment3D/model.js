import * as THREE from "https://unpkg.com/three@0.126.0/build/three.module.js"
import { GLTFLoader } from "https://unpkg.com/three@0.126.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.0/examples/jsm/controls/OrbitControls.js"




const canvas = document.getElementById("canvas");
const scene = new THREE.Scene();

var object = new THREE.Object3D()

const loader = new GLTFLoader();
loader.load("untitled.glb", function(glb){
    console.log(glb);
    glb.scene.scale.set(0.3,0.3,0.3);
    object.add(glb.scene);
    scene.add(object);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded");
}, function(error){
    console.log("error");
});

//const update = () => {
//    if(globalGltf){
	//rotate global gltf model here
//    }
//}




//const light = new THREE.DirectionalLight(0xffffff, 1);
//light.position.set(2,2,5);

const light = new THREE.AmbientLight(0xffffff);

scene.add(light);



const sizes = {
    width: document.getElementById("navBar").offsetWidth,
    height: window.innerHeight - document.getElementById("navBar").offsetHeight - document.getElementById("bottomBar").offsetHeight
};

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100);
camera.position.set(2,1,2);



//scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setClearColor(0xffffff, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;

var controls = new OrbitControls(camera,canvas);
controls.autoRotate = true;

renderer.render(scene, camera);



//object.add(glb.scene);
//scene.add(object)



function animate(){
    requestAnimationFrame(animate);
    object.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    var height = window.innerHeight - document.getElementById("navBar").offsetHeight - document.getElementById("bottomBar").offsetHeight;
    var width = document.getElementById("navBar").offsetWidth;

    camera.aspect = (width) / (height);
    camera.updateProjectionMatrix();

    renderer.setSize( width , height );

}
		       
