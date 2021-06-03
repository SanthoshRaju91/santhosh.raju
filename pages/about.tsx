import React from 'react'
import Image from 'next/image'
import {SocialLinks} from '../components/SocialLinks'

const skills = [
  'Javscript',
  'HTML & CSS',
  'Python',
  'React.js',
  'Ember.js',
  'Node.js',
  'MERN Stack',
  'Nest.js',
  'Devops',
  'Ansible',
  'Kubernetes',
  'Apache Airflow',
  'GraphQL',
]

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__container--general">
          <h3>Hi, I'm Santhosh Raju</h3>
          <div className="introduction">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
              volutpat at congue augue tellus. Mattis accumsan venenatis lacus,
              vitae hendrerit leo. Ut tempus integer viverra id lacus. Elementum
              tristique aliquam purus, vitae, pretium sit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
              volutpat at congue augue tellus. Mattis accumsan venenatis lacus,
              vitae hendrerit leo. Ut tempus integer viverra id lacus. Elementum
              tristique aliquam purus, vitae, pretium sit.
            </p>
            <div className="connect">
              <h5>Connect via </h5>
              <div className="links">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <div className="about__container--profile-image">
          <div className="image-container">
            <img src="/site-assets/Me.png" alt="Me" />
            <div className="bg-box"></div>
          </div>
        </div>
      </div>

      <div className="about__skills">
        <h5>Skills</h5>
        <div className="about__skills--container">
          <ul>
            {skills.map((skill: string) => (
              <li key={skill}>
                <Image src="/radio.svg" alt="Radio" width="24" height="24" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about__work-exp">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          tellus gravida varius pharetra. Enim, suspendisse nisi, volutpat
          sollicitudin faucibus suscipit dolor. Semper fermentum in purus leo
          turpis augue et sapien. Cras sapien morbi nunc, dolor morbi
          consectetur lectus. Risus, nulla senectus varius dictum. Vitae justo
          in diam tellus nam enim in. Egestas venenatis diam at quis nulla
          sagittis. Dui a sit nunc dolor commodo tincidunt. Cras aliquet
          volutpat sem sed. Iaculis gravida magna odio imperdiet felis, a. Felis
          massa erat egestas aliquam sagittis mattis orci, suspendisse.
          Fermentum sed ut orci, consectetur consequat lacus eros, in ridiculus.
          Interdum at sed non hendrerit scelerisque phasellus risus. Rhoncus
          enim nisl elementum urna pharetra, tristique ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          tellus gravida varius pharetra. Enim, suspendisse nisi, volutpat
          sollicitudin faucibus suscipit dolor. Semper fermentum in purus leo
          turpis augue et sapien. Cras sapien morbi nunc, dolor morbi
          consectetur lectus. Risus, nulla senectus varius dictum. Vitae justo
          in diam tellus nam enim in. Egestas venenatis diam at quis nulla
          sagittis. Dui a sit nunc dolor commodo tincidunt. Cras aliquet
          volutpat sem sed. Iaculis gravida magna odio imperdiet felis, a. Felis
          massa erat egestas aliquam sagittis mattis orci, suspendisse.
          Fermentum sed ut orci, consectetur consequat lacus eros, in ridiculus.
          Interdum at sed non hendrerit scelerisque phasellus risus. Rhoncus
          enim nisl elementum urna pharetra, tristique ut.
        </p>
      </div>
    </div>
  )
}

export default About
