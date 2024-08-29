import assets from '../../assets/assets';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <video autoPlay muted loop id='background-video'>
            <source className='background-video' src={assets.backgroundVideo} type='video/mp4' />
        </video>
        <div className="hero-content">
                <div className="hero-left">
                    <p className='main-header'>Build faster, together with <span>Nextzela</span></p>
                    <p className='second-header'>Empowering dreams, Inspiring success...</p>
                    <div className="get-started">
                        <p>Get Started</p>
                        <img src={assets.arrowRight} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={assets.circleImage} alt="" />
                </div>
        </div>
    </div>
  )
}
