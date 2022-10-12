import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm
        <img src={LogoTitle} alt='developer'  />
        madeus
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