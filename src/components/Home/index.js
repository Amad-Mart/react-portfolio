import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a','m','a','d','e','u','s']
  const jobArray = ['f','u','l','l',' ', 's','t','a','c','k',' ','d','e','v','e','l','o','e','p','e','r','.']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm
        <img src={LogoTitle} alt='developer'  />
        <AnimatedLetters letterClass={letterClass}
          strArray = {nameArray}
          idx={15}
        />
        <br/>
        Full Stack Developer
        </h1>
        <h2>Frontend Focused</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>    
  );
}

export default Home