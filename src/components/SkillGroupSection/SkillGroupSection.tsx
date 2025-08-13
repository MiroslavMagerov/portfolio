import { Gamepad2, Monitor, PencilRuler, Server } from "lucide-react";
import SkillGroup from "./SkillGroup/SkillGroup";
import "./SkillGroupSection.css";

function SkillGroupSection() {
  return (
    <section className='container__about'>
      <div className='about__header'>
        <h2 className='about__title'>Sobre mí</h2>
        <p className='about__description'>
          Apasionado por la tecnología y la creación de experiencias digitales
          innovadoras
        </p>
      </div>
      <div className='separator' />
      <div className='about__skills'>
        <SkillGroup
          icon={Gamepad2}
          title='Desarrollo de Videojuegos'
          skills={["Unity", "C#", "Blender", "Game Design"]}
        />
        <SkillGroup
          icon={Monitor}
          title='Frontend'
          skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]}
        />
        <SkillGroup
          icon={Server}
          title='Backend'
          skills={["Node.js", "Pyhton", "Postgress SQL", "MongoDB"]}
        />
        <SkillGroup
          icon={PencilRuler}
          title='Herramientas'
          skills={["Git", "Figma", "Rally", "Gitlab/Github"]}
        />
      </div>
    </section>
  );
}

export default SkillGroupSection;
