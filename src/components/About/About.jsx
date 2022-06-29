import React, {Fragment, useState, useEffect} from 'react';
import Img1 from '../../assets/img/img-1.png';
import Img2 from '../../assets/img/img-2.png';
import Img3 from '../../assets/img/img-3.png';
import Img4 from '../../assets/img/img-4.png';
import Card1 from '../../assets/img/card-img-1.png';
import Card2 from '../../assets/img/card-img-2.png';
import Card3 from '../../assets/img/card-img-3.png';
import Card4 from '../../assets/img/card-img-4.png';
import Card5 from '../../assets/img/card-img-5.png';
import Card6 from '../../assets/img/card-img-6.png';
import Card7 from '../../assets/img/card-img-7.png';
import SecondCard1 from '../../assets/img/second-card-img-1.png';
import SecondCard2 from '../../assets/img/second-card-img-2.png';
import SecondCard3 from '../../assets/img/second-card-img-3.png';

const About = () => {

  return (
  <Fragment>
    <div className='about-container'>
      <section className='about'>
        <div>
          <p>ESTO ES VALTECH</p>
          <h1>Sobre nosotros</h1>
          <h2>Crear experiencias que mejoren la vida humana y hagan crecer el negocio de nuestros clientes</h2>
        </div>
      </section>
    </div>
    <section className='section-paragraphs'>
      <div>
        <h2>#somosvaltech</h2>
        <h3>Una agencia digital global enfocada en la transformación de negocios</h3>
        <p>Probablemente ya nos conoces mejor de lo que crees. Si compras en L'Oreal, MAC Cosmetics o Levi's,vuelas con Aerolíneas Argentinas, easyJet o Lufthansa o si conduces un Volkswagen, Toyota, AUDI o BMW,entonces ya has experimentado nuestro trabajo, de primera mano.</p>
        <p>Desde apoyar el desarrollo infantil con Danone Early Life Nutrition hasta trabajar para mejorar la vida de las personas que viven con diabetes o discapacidad a través de nuestro trabajo con Novo Nordisk y el Departamento de Transporte del Reino Unido, nuestro enfoque siempre ha sido primero en las personas.</p>
      </div>
      <div>
        <p>Ya sea una de nuestras soluciones B2B para Henkel, Westcon o Dot Foods o una nueva experiencia de cliente para Dolby, D'Addario o Profoto ... juntos, diseñamos, construimos y entregamos soluciones digitales transformadoras para las marcas más conocidas del mundo.</p>
        <p>Sea lo que sea lo que sea que te haya traído a nosotros, ya sea trabajo, juego o algo intermedio, como una agencia ganadora de múltiples premios, construimos experiencias intuitivas, sin fricciones y conectadas que mejoran la vida humana y hacen crecer los negocios de nuestros clientes.</p>
      </div>
      <div>
        <h2>Una Agencia para Todos</h2>
        <h3>De todos los rincones del mundo.</h3>
        <p>La complejidad, la incertidumbre y el rápido cambio tecnológico han transformado el panorama empresarial. El rendimiento histórico es un indicador poco fiable del éxito futuro y la forma en que nos conectamos entre nosotros es importante. La forma en que aprendemos importa. En Valtech, compartimos una pasión por la exploración y un entendimiento de que no podemos ir solos. En todos los equipos, oficinas y disciplinas: nuestro entorno, sistemas y prácticas están conectados para un aprendizaje constante, agilidad y resiliencia. Somos mucho más inteligentes juntos</p>
      </div>
      <div>
        <h2>Nuestra gente</h2>
        <h3>La diversidad es el motor de la innovación.</h3>
        <p>Siendo una empresa global al servicio de clientes globales, creemos que nuestros equipos deben reflejar la diversidad de los negocios de nuestros clientes, así como la sociedad que nos rodea. Creemos que diversos equipos en una cultura inclusiva se desafían entre sí, lo que conduce a soluciones más innovadoras y de mejor ajuste. También creemos que diversos equipos mejorarán el rendimiento del negocio y crearán oportunidades de crecimiento profesional y personal para cada individuo en nuestra organización. Leer más sobre la estrategia de D&I de Valtech</p>
      </div>
    </section>
    <section className='section-img-cards'>
      <div>
        <div>
          <img src={Img1} alt='img-1'/>
          <h2>Nuestros valores</h2>
          <h3>Share - Dare - Care</h3>
          <p><strong>/ Share</strong> Compartir perspectivas únicas trae ideas revolucionarias: invertimos en la construcción de equipos diversos e inclusivos y en una cultura de apoyo.</p>
          <p><strong>/ Dare</strong> Nos atrevemos a ir a territorios desconocidos. El fracaso es parte del trabajo. Nos atrevemos a hablar y ser totalmente honestos.</p>
          <p><strong>/ Care</strong> Nos preocupamos por la calidad de las cosas que hacemos. Queremos hacer del mundo un lugar mejor a través del trabajo que hacemos.</p>
        </div>
        <div>
          <img src={Img2} alt='img-2'/>
          <h2>Nuestras fortalezas</h2>
          <h3>Cómo marcamos la diferencia</h3>
          <p><strong>/ Servicios de Marketing:</strong> Ejecución y optimización de la participación del cliente.</p>
          <p><strong>/ Plataformas digitales:</strong> Diseño y construcción de plataformas para Internet en todas partes.</p>
          <p><strong>/ Experiencias conectadas:</strong> Transformación del potencial CX mediante la creación de experiencias conectadas.</p>
          <p><strong>/ Transformación del negocio:</strong> Orientar y apoyar la transformación de nuestros clientes.</p>
        </div>
      </div>
      <div>
        <div>
          <img src={Img3} alt='img-3'/>
          <h2>Innovación</h2>
          <h3>No es sólo lo que hacemos, es lo que somos</h3>
          <p>Hemos unido a personas apasionadas por industrias, tecnologías y objetivos empresariales específicos en un equipo de innovación que desafía y defiende ideas de fábrica. Después de todo, ¿de qué sirve ser una agencia internacional con una amplia red de expertos si no puedes aprovechar esos recursos para innovar en un mundo mejor?</p>
        </div>
        <div>
          <img src={Img4} alt='img-4'/>
          <h2>Tech Girl</h2>
          <h3>Inspirando a la próxima generación</h3>
          <p>Creemos que somos lo que hacemos. Es por eso que creamos Tech Girl, un programa global diseñado para enseñar a las niñas a codear. Desde que comenzamos Tech Girl hemos enseñado a cientos de niñas nuevas habilidades y las hemos introducido en un mundo de oportunidades inspiradoras de carrera tecnológica.</p>
        </div>
      </div>
    </section>
    <section>
      <div className='title-section'>
        <h3>LO QUE HACEMOS</h3>
        <h2>Nuestros Servicios</h2>
      </div>
      <div className='section-cards'>
        <div className='card-container'>
          <div className='card'>
            <img src={Card1} alt='card-1' />
            <div>
              <h2>Estrategia CX</h2>
              <p>descubrir</p>
            </div>
          </div>
          <div className='card'>
            <img src={Card2} alt='card-2' />
            <div>
              <h2>Ecommerce y Plataformas digitales</h2>
              <p>contruir</p>
            </div>
          </div>
          <div className='card'>
            <img src={Card3} alt='card-3' />
            <div>
              <h2>Contenido y Campañas digitales</h2>
              <p>impulsar</p>
            </div>
          </div>
          <div className='card'>
            <img src={Card4} alt='card-4' />
            <div>
              <h2>Experiencias Conectadas</h2>
              <p>conectar</p>
            </div>
          </div>
          <div className='card'>
            <img src={Card5} alt='card-5' />
            <div>
              <h2>Data Science</h2>
              <p>ofrecer</p>
            </div>
          </div>
          <div className='card'>
            <img src={Card6} alt='card-6' />
            <div>
              <h2>Tecnologías Emergentes</h2>
              <p>innovar</p>
            </div>
          </div>
          <div className='card'>
            <img src={Card7} alt='card-7' />
            <div>
              <h2>Transformation Consulting</h2>
              <p>Transformar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='prefooter-section'>
      <h4>Casos e Insights recientes</h4>
      <div>
        <div className='prefooter-card'>
          <div>
            <img src={SecondCard1} alt='prefooter-img-1'/>
          </div>
          <div>
            <h5>Aerolineas Argentinas</h5>
          </div>
        </div>
        <div className='prefooter-card'>
          <div>
            <img src={SecondCard2} alt='prefooter-img-2'/>
          </div>
          <div>
            <h5>Digital Business in Uncertain Market Conditions</h5>
          </div>
        </div>
        <div className='prefooter-card'>
          <div>
            <img src={SecondCard3} alt='prefooter-img-3'/>
          </div>
          <div>
            <h5>Sitecore Content Hub - Media Processing Automation - Part 3</h5>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
  );
}

export default About;