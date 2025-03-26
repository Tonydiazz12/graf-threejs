import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material para el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);

const colorverde = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const colorazul = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const colorrojo = new THREE.MeshStandardMaterial({ color: 0xff0000});

const cube = new THREE.Mesh(geometry, colorverde);
const cube1 = new THREE.Mesh(geometry, colorazul);
const cube2 = new THREE.Mesh(geometry, colorrojo);

scene.add(cube);
scene.add(cube1);
scene.add(cube2);

cube.position.x = -2;
cube1.position.x = 0;
cube2.position.x = 2;

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    cube.rotation.x += 0.01; // Rotación en eje X
    cube.rotation.y += 0.01; // Rotación en eje Y

    cube1.rotation.x += 0.10; // Rotación en eje X
    cube1.rotation.y += 0.10; // Rotación en eje Y

    cube2.rotation.x += 0.50; // Rotación en eje X
    cube2.rotation.y += 0.50; // Rotación en eje Y
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);