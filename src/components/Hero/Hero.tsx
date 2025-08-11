import {
  Calendar,
  Code,
  Github,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import profilePic from "../../assets/img/Profile_pic.png";
import "./Hero.css";

function Hero() {
  return (
    <main className='section__hero'>
      <div className='hero__content'>
        <Sparkles className='icon hero__title-icon' />
        <h1 className='hero__title'>
          Hola, soy <em>Miroslav Desarollador</em>
        </h1>
        <p className='hero__description'>
          Desarrollador Full Stack especializado en aplicaciones web modernas
          con React, arquitecturas backend escalables, creación de videojuegos
          con Unity y conocimiento de automatización de Agentes de IA con n8n.
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
      <div className='images__container'>
        <img
          className='hero__personal-image'
          src={profilePic}
          alt='Foto de perfil'
        />
        <div className='icon image__icon image__icon--star'>
          <Star />
        </div>
        <div className='icon image__icon image__icon--code'>
          <Code />
        </div>
      </div>
    </main>
  );
}

export default Hero;
