import React from "react";
import "./SkillGroup.css";

type SkillGroupProps = {
  icon: React.ComponentType;
  title: string;
  skills: string[];
};

function SkillGroup({ icon: Icon, title, skills }: SkillGroupProps) {
  return (
    <div className='skills__skill'>
      <div className='skill__header'>
        <Icon />
        <h3 className='skill__title'>{title}</h3>
      </div>
      <div className='skill__content'>
        <ul className='content__list'>
          {skills.map((skill, index) => (
            <li key={index} className='list__skill-item'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillGroup;
