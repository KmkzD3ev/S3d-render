
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Carro3D = () => {
  const gltf = useLoader(GLTFLoader, './carro3d/scene.gltf');

  return <primitive object={gltf.scene} dispose={gltf.dispose} />;
};

export default Carro3D;