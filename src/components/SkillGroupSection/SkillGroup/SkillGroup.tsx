import React from "react";
import "./SkillGroup.css";

type SkillGroupProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: string[];
};

function SkillGroup({ icon: Icon, title, skills }: SkillGroupProps) {
  return (
    <div className='skills__skill'>
      <div className='skill__header'>
        <div className='skill__icon-wrapper'>
          <Icon className='icon skill__icon' />
        </div>
        <h3 className='skill__title'>{title}</h3>
      </div>
      <div className='skill__content'>
        {skills.map((skill, index) => (
          <div key={index} className='content__skill-item'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
