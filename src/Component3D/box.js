import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function Box(props) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, props.img);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.42);

  useFrame((state, delta) => {
    // Ajuste dos ângulos de rotação com base na velocidade
    meshRef.current.rotation.x += rotationSpeed * delta;
    meshRef.current.rotation.y += rotationSpeed * delta;
   meshRef.current.rotation.z += rotationSpeed * delta;
  });
 

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 3.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 1, 0.5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default Box;
