import { useRef ,useState} from 'react';
import { useFrame } from '@react-three/fiber';

function Cylinder(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    // Atualize as rotações nos três eixos simultaneamente
    meshRef.current.rotation.x += delta; // Rotação no eixo x
    meshRef.current.rotation.y += delta; // Rotação no eixo y
    meshRef.current.rotation.z += delta; // Rotação no eixo z
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'blue' : 'black'}/>
    </mesh>
  );
}

export default Cylinder;