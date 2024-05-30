import React, {  useState,useEffect ,useRef,useLayoutEffect}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import 'swiper/css';
import './App.css';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF,Text  } from '@react-three/drei'; 
import Gsaplogic from './Component3D/Gsaplogic';
import Imagens from './Component3D/Imagens';
import { useFrame } from '@react-three/fiber';
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'





function App() {
  const [rotateModel, setRotateModel] = useState(false);

  
  const el = useRef();
  const tl = useRef();
  const [cameraControlsActive, setCameraControlsActive] = useState(false);
  const [model, setModel] = useState(null);
  



  const toggleCameraControls = () => {
    setCameraControlsActive(!cameraControlsActive);
  };


  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/turbo3d.glb', (gltf) => {
      console.log('Arquivo GLB carregado:', gltf);
      setModel(gltf.scene);
    }, undefined, (error) => {
      console.error('Erro ao carregar o modelo GLB:', error);
    });
    
  }, []);


  useEffect(() => {
    const animateModel = () => {
      if (model) {
        model.rotation.x += 0.00;
        model.rotation.y += 0.004;
        model.rotation.z += 0.00;
        requestAnimationFrame(animateModel);
      }
    };
    animateModel();
  }, [model]);

  




  return (
    <div className="App">


<header className="testa">
        <div>HX-48 Oficina e Preparações</div>
        <div className="nav-links">
          <ScrollLink to="section1" smooth={true} duration={500}>sobre</ScrollLink>
          <ScrollLink to="section2" smooth={true} duration={500}>serviços</ScrollLink>
          <ScrollLink to="section3" smooth={true} duration={500}>contatos</ScrollLink>
        </div>
      </header>

    

      

      <div className='container-canvas'>

        
      <Element name="section1" className="section">
       
      <tex  className="column-text"  >
      Desde 2004, a Oficina HX-48 tem sido uma referência em serviços automotivos de alta qualidade. Fundada por entusiastas apaixonados por carros, nossa jornada de duas décadas foi marcada por inovação, comprometimento e excelência em cada projeto que empreendemos.<br/>

Ao longo dos anos, nos tornamos conhecidos por nossa expertise em diversas áreas, incluindo manutenção preventiva, reparos complexos, personalizações estéticas e modificações de desempenho.

<br/> Nosso compromisso com a qualidade e a satisfação do cliente nos permitiu construir relacionamentos sólidos e duradouros com nossa comunidade de entusiastas de automóveis.

Além de nossos serviços de manutenção e reparo, nos destacamos em preparações de alto desempenho.
<br/>
 Seja para aumentar a potência de um carro esportivo, ajustar o desempenho de um veículo de rua ou otimizar a eficiência de um carro de corrida, nossa equipe de especialistas está preparada para enfrentar qualquer desafio.

Acreditamos em manter nossos clientes informados e envolvidos em cada etapa do processo. Nossa abordagem transparente e consultiva garante que suas necessidades e desejos sejam atendidos da melhor maneira possível.

À medida que celebramos duas décadas de dedicação e sucesso, continuamos comprometidos em fornecer serviços automotivos excepcionais que atendam e superem as expectativas. Agradecemos a todos os nossos clientes, parceiros e colaboradores por fazerem parte desta incrível jornada.

Venha fazer parte da história da Oficina HX-48 e experimente a diferença que 20 anos de excelência automotiva podem fazer em seu veículo!

Nossos serviços incluem:

<p>- Instalação e ajuste de sistemas de turbo</p>

<p>- Ajustes de câmbio para melhorar desempenho e eficiência</p>

<p>- Programação de injeção eletrônica para maximizar a potência e eficiência do motor</p>

<p>- Modificações de suspensão para uma dirigibilidade mais esportiva </p>

<p>- Personalização estética para dar ao seu carro uma aparência única</p>

Com uma equipe de mecânicos altamente qualificados e equipamentos de última geração, garantimos resultados excepcionais em todos os serviços que oferecemos. 
Não importa se você está procurando aumentar a potência do seu carro, melhorar sua dirigibilidade ou simplesmente mantê-lo em perfeitas condições, estamos aqui para ajudar.

Visite-nos hoje mesmo e descubra como podemos transformar o seu veículo em uma máquina de alto desempenho!

</tex>
</Element>

      <Canvas className="ob3D-container"  style={{ width: '2800px', height: '2000px' }}  
        onMouseEnter={() => setCameraControlsActive(true)}
        onMouseLeave={() => setCameraControlsActive(false)}> 
  <ambientLight intensity={Math.PI / 2} />
  <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
  <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
  {cameraControlsActive && <OrbitControls />}
  {model && <primitive object={model} position={[0.10, -7.0, -4]} rotation={[0, Math.PI / 2, 0]}  scale={[0.7, 0.7, 0.7]} />}

</Canvas>

</div>


<Element name="section2" className="section">
        
        <Gsaplogic/>
      </Element>


 
      <Element name="section3" className="section">
     
        <h1 className='text-init'>CONTATOS</h1>
      </Element>
  

    </div>

    
    
  );
}

export default App;







































































