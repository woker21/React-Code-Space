import Head from 'next/head';
import Menu from './componentes/menu';
import Footer from './componentes/footer';
import Lottie from "lottie-react";
import AniPhone from '../images/phone.json';
import styles from '../styles/Inicio.module.css';
import Phone2 from '../images/phone2.json';
import Card from './componentes/card';
import Card2 from './componentes/Card2';



export default function Home() {



  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <title>SysWoker - Home</title>
      </Head>
      <Menu />
      {/*Fin de Head y Menu*/}
      <section className={styles.containerSeccion}>

        <div className={styles.contenido}>
          <div>

            <h1>Diseñamos tus ideas y <br /> tus Negocios</h1>

            <h3>un servicio totalmente <span>PERSONALIZADO</span>
              <br />
              donde planificaremos la marca de tu <br /> Emprendimiento
            </h3>
            <button className={styles.cssbuttons_io_button}>
              Contactanos
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
              </div>
            </button>
          </div>


          <div className={styles.adorno}>
            <div>

            </div>

          </div>

        </div>

        <div className={styles.lotiPhone}>

          <Lottie className={styles.phone1} animationData={AniPhone} loop={true} />

          <div className={styles.detras}>
            <div className={styles.detras1}>

            </div>
          </div>

        </div>

      </section>

      <div className={styles.quienesSomos}>

        <div className={styles.phone}>
          <Lottie className={styles.phone2} animationData={Phone2} loop={true} />
        </div>

        <div className={styles.somos}>

          <div className={styles.titulo1}>
            <h1>Quienes Somos</h1>
            <h4>En Syswoker te ofrecemos:</h4>
          </div>

          <div className={styles.opciones}>

            <div className={styles.solucion}>
            <div className={styles.soluciones}><h2>Soluciones que aportaran <br /> al crecimiento de <br /> tu Negocio</h2></div>
            <div className={styles.soluciones}><h2>Atencion personalizada <br /> para todos nuestros <br /> Clientes</h2></div>
            </div>

            <div className={styles.solucion}>
            <div className={styles.soluciones}> <h2>Consejos en el area de <br /> Marketing Digital</h2></div>
            <div className={styles.soluciones}><h2>Opciones para potenciar tu <br /> Negocio en el area Digital</h2></div>
            </div>

          </div>



        </div>

      </div>

      <div className={styles.servicios}>
          
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
      </div>



      <Footer />
    </>
  )
}
