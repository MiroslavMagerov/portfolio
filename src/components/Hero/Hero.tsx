import { Calendar, Github, Mail, MapPin } from "lucide-react";
import optimusImg from "../../assets/img/optimus.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className='section__hero'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          Hola, soy Miroslav <br />
          Desarollador
        </h1>
        <p className='hero__description'>
          Desarrollador Full Stack especializado en videojuegos con Unity,
          aplicaciones web modernas con React y arquitecturas backend
          escalables.
        </p>
        <div className='hero__buttons'>
          <a className='hero__button button-contact'>
            <Mail size={15} className='icon' />
            <span className='button__text'>Contactar</span>
          </a>
          <a className='hero__button button-github'>
            <Github size={15} className='icon' />
            <span className='button__text'>Ver GitHub</span>
          </a>
        </div>
        <div className='hero__info-extra'>
          <div className='info-extra__item'>
            <MapPin size={15} /> Barcelona, España, 🇪🇸
          </div>
          <div className='info-extra__item'>
            <Calendar size={15} />
            Disponible para proyectos
          </div>
        </div>
      </div>
      <div className='hero__image'>
        <img
          className='hero__personal-image'
          src={optimusImg}
          alt='Foto de perfil'
        />
        <div className='icon image__icon image__icon--star'></div>
        <div className='icon image__icon image__icon--code'></div>
      </div>
    </section>
  );
}

export default Hero;
