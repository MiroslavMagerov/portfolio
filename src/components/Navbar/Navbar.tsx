import { Code, Download } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='navbar__div'>
        <div className='navbar__main'>
          <Code className='main__code-icon icon' />
          <h3 className='main__title'>Mi Portfolio</h3>
        </div>

        <ul className='navbar__list'>
          <li className='list__list-item'>Sobre mí</li>
          <li className='list__list-item'>Proyectos</li>
          <li className='list__list-item'>Estudios</li>
          <li className='list__list-item'>Contanto</li>
        </ul>
        <div className='navbar__cv-download'>
          <a className='cv-download__button'>
            <Download className='icon button__download-icon' size={15} />
            CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
