import React, {Fragment, useState, useEffect} from 'react';

const AboutContainer = () => {

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
  </Fragment>
  );
}

export default AboutContainer;