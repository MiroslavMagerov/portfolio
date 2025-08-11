import { Code } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__icon-div'>
        <Code size={28} className='icon footer__icon' />
      </div>
      <p className='footer__text'>
        Construido con <span className='text__key-word'>React</span>. Iconos de{" "}
        <span className='text__key-word'>Lucide</span>. &copy; 2025 Miroslav
        Magerov
      </p>
    </footer>
  );
}

export default Footer;
