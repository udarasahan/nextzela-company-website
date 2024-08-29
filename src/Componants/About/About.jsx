import assets from '../../assets/assets';
import growth_data from '../../assets/growth_data';
import './About.css';

const About = () => {
  return (
    <div className='about'>
        <p className="topic">EXCELLENCE, INTEGRITY, RECOGNITION</p>
        <div className='about-content'>
            <div className='about-left'>
                <img src={assets.aboutImage} alt="" />
            </div>
            <div className="about-right">
                <h1>Who are we.</h1>
                <div className="about-right-content">
                <p>At Nextzela, we transform your boldest ideas into dynamic digital experiences through 
                    high-fidelity prototypes, mobile and web development, and immersive game creation. 
                    Our expertise ensures that your concepts come to life in a way that captivates and 
                    engages your audience.</p>
                <p>We are more than just a development team; we are your strategic partner. By using an 
                    agile, feedback-driven approach, we actively collaborate with you to continuously 
                    refine your product, ensuring it aligns perfectly with your customers needs. We’re 
                    committed to delivering innovative solutions that empower your business to thrive.</p>
                </div>
            </div>
        </div>
        <div className="growth">
            <p className="topic">Experts growth</p>
            <div className="growth-upper">    
                <h1>Our Company Growth</h1>
                <p>Through relentless dedication and innovation, our company has</p>
            </div>
            <div className='growth-lower'>
                {growth_data.map((data,index)=> {
                    return <div key={index} className="growth-content">
                        <img src={data.g_image} alt="" />
                        <h1>{data.g_number}+</h1>
                        <p>{data.g_state}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default About