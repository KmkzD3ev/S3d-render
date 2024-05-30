import React, {  useState,useEffect ,useRef,useLayoutEffect}from 'react';
import { gsap } from 'gsap'
import './Gsaplogic.css'


import { ScrollTrigger } from 'gsap/ScrollTrigger'
import relogioPretoImg from '../assets/relogio-preto.svg'
import relogioRoseImg from '../assets/a3.png'
import relogioUltraImg from '../assets/a4.png'
import relogio2 from '../assets/relogio2.svg'
import img1 from '../assets/a1.png'
import img2 from '../assets/a2.png'
import img3 from '../assets/imagem final 1.png'
import  img4 from '../assets/imagem final 2.png'



function Gsaplogic(){
  const el = useRef();
  const tl = useRef();


 
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".relogio", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".items",
        //markers: true,
        start: "top 420px",
        end: "bottom 700px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf(".relogio")
    }
  }, [])


  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:".models-item",
          scrub: true,
          // markers: true,
          start: "top 800px",
          end: "bottom 900px"
        }
      })
      .fromTo("#model-1", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo("#model-2", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo("#model-3", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
    }, el)


    return () => {
      gsap.killTweensOf(".models-item")
    }

  }, [])


  return(
    <div className="container">


      <h1 className='title-serv'>Serviços Para linha de Passeio</h1>

      <section className="items">
        <div className="items-content">
          <img className="relogio" src={img1} alt="Relogio AppleWatch" />
        </div>
      </section>

      <section className="models-container">
        <h2 className="title">Os melhores serviços vc enconttra Aqui</h2>

        <div className="models-content" ref={el}>
          <div className="models-item" id="model-1">
            <img src={img2} alt="Relogio Preto" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Serviços de Qualidade</h4>
            <p className="models-description">Revisoes primarias a partir de : <strong>R$ 399</strong></p>
          </div>

          <div className="models-item" id="model-2">
            <img src={relogioRoseImg} alt="Relogio Rose" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Aqui vc encontra os Melhores 
            preços do Mercado</h4>
            <p className="models-description">Troca de oleo a partir de :<strong>R$ 159,90</strong></p>
          </div>

          <div className="models-item" id="model-3">
            <img src={relogioUltraImg} alt="Relogio Ultra" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Profissionais Mais capacitados</h4>
            <p className="models-description">Agende o seu horario </p>
          </div>
        </div>

      </section>

      <div className="area-model">
        <h1>ITEM 3</h1>
        <img src={img3}/>
      </div>
      
      <div className="area-model">
        <h1>ITEM 4</h1>
        <img src={img4}/>
      </div>
    </div>

  );
}

export default Gsaplogic;