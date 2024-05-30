import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const NovaImg = (props) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, props.img);
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime());
    meshRef.current.rotation.y = Math.sin(clock.getElapsedTime());
    //meshRef.current.rotation.z = Math.sin(clock.getElapsedTime());
  });

  return (
    <mesh 
      ref={meshRef}
      onClick={(e) => setActive(!active)}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
    >
    

    <cylinderGeometry args={[1, 1, 2, 1]} />



      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default NovaImg;



//<torusGeometry args={[1, 0.4, 16, 100]} />

//<ringGeometry args={[1, 3, 32]} />

//  <coneGeometry args={[1, 2, 32]} />

//<sphereGeometry args={[1, 32, 32]} />

//<cylinderGeometry args={[1, 1, 2, 32]} />


