import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { SphereGeometry, MeshStandardMaterial } from 'three'; // Importa a geometria e o material corretos do Three.js

function Sphere(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.y += delta)); // Altera a rotação da esfera

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <SphereGeometry args={[1, 32, 32]} attach="geometry" /> {/* Cria a geometria da esfera */}
      <meshStandardMaterial color={hovered ? 'lightblue' : 'blue'} /> {/* Material da esfera */}
    </mesh>
  );
}

export default Sphere;
