import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const gltfLoader = new GLTFLoader();
gltfLoader.load('../models/airplane/scene.gltf', (gltfScene) => {
    gltfScene.scene.rotation.y = Math.PI / 8;
    gltfScene.scene.position.x = 0;
    gltfScene.scene.position.y = 0;
    gltfScene.scene.scale.set(10, 10, 10);
    scene.add(gltfScene.scene);
});