import React from 'react';
import ValtechLogo from '../../../assets/img/Valtech-logo.png';
import LinkedIn from '../../../assets/svg/linkedin-svgrepo-com.svg';
import Youtube from '../../../assets/svg/youtube-svgrepo-com.svg';
import Instagram from '../../../assets/svg/instagram-svgrepo-com.svg';
import Twitter from '../../../assets/svg/twitter-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer>
      <section className='prefooter'>
        <div className='footer-first'>
          <div className='footer-first-item'>
            <h2>Contáctanos</h2>
            <p>Let's reinvent the future</p>
          </div>
          <div className='footer-first-item'>
            <form action="submit">
              <div>
                <input type="name" placeholder='First Name'/>
                <input type="lastname" placeholder='Last Name'/>
              </div>
              <div>
                <select name="title" id="">
                  <option value="Job Title">Job Title</option>
                </select>
                <input type="email" placeholder='Job Email'/>
              </div>
              <div>
                <input type="company" placeholder='Company Name'/>
                <select name="industry" id="">
                  <option value="Industry">Industry</option>
                </select>
              </div>
              <select name="select" id="">
                <option value="Country">Country</option>
              </select>
              <select name="select" id="">
                <option value="help">How can we help?</option>
              </select>
              <div>
                <h3>Dejanos tus comentarios (opcional)</h3>
                <textarea name="description" id="" cols="30" rows="10" ></textarea>
              </div>
              <div>
                <input type="checkbox" /><p>I have read and accept the terms of the privacy statement</p>
              </div>
              <div>
                <input type="checkbox" /><p>I would like to receive relevant news and marketing communications from the Valtech Group. I am aware that I can unsubscribe at any time.</p>
              </div>
              <input type="submit" value='CONTACT US'/>
            </form>
          </div>
        </div>
      </section>
      <section className='footer'>
        <div className='footer-second'>
          <div>
            <a href='https://www.valtech.com/es-ar/acerca-de/' target='blank' className='footer-logo'><img src={ValtechLogo} alt='logo' style={{width: 140}}/></a>
            <div className='footer-links'>
              <p>home</p>
              <p>acerca de</p>
              <p>oficinas</p>
              <p>empleo</p>
            </div>
          </div>
          <div>
            <div className='footer-links'>
              <p>configuración de cookies</p>
              <p>declaración de privacidad</p>
            </div>
            <div className='social-media'>
              <a href='https://www.linkedin.com/company/valtech/' target='blank'><img src={LinkedIn} alt="linkedin" /></a>
              <a href="https://www.youtube.com/c/ValtechOfficial" target='blank'><img src={Youtube} alt="youtube" /></a>
              <a href="https://www.instagram.com/valtech_argentina/" target='blank'><img src={Instagram} alt="instagram" /></a>
              <a href="https://twitter.com/valtech" target='blank'><img src={Twitter} alt="twitter" /></a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;