import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const gltfLoader = new gltfLoader();
gltfLoader.load('../models/airplane/scene.gltf', (gltfScene) => {
    scene.add(gltfScene.scene);
});