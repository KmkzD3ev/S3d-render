import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Imagens = (props) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, props.img);
  const [active, setActive] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.49); // Velocidade inicial de rotação

  useFrame((state, delta) => {
    // Ajuste dos ângulos de rotação com base na velocidade
    meshRef.current.rotation.x += rotationSpeed * delta;
    meshRef.current.rotation.y += rotationSpeed * delta;
    meshRef.current.rotation.z += rotationSpeed * delta;
  });

  return (
    <mesh 
      ref={meshRef}
      position={props.position}
      onClick={(e) => setActive(!active)}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
    >
      <ringGeometry args={[1, 3, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default Imagens;




//<torusGeometry args={[1, 0.4, 16, 100]} />

//<ringGeometry args={[1, 3, 32]} />

//  <coneGeometry args={[1, 2, 32]} />

//<sphereGeometry args={[1, 32, 32]} />

//<cylinderGeometry args={[1, 1, 2, 32]} />

//<dodecahedronGeometry args={[1, 0]} />

//<tetrahedronGeometry args={[1, 0]} />

//<octahedronGeometry args={[1, 0]} />

//<planeGeometry args={[1, 1]} />




