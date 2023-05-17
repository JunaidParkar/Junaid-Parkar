import './css/Home.css'
import bird1 from '../assets/bird1.png'
import bird2 from '../assets/bird2.png'
import { createCV } from '../cv/createCV';

function Home() {
    const box3_paragraph = `Interested in learning more about my skills and experience? Download my resume to see how I can help you achieve your goals. Simply click the button below to get started`;

    return (
        <>
            <div className='home' id='home'>
                <div className="box box1">
                    <div className="sec">
                        <div className="sec1 logo">
                            Jp
                        </div>
                        <div className="sec1 para">Combining innovation, creativity, and expertise to deliver cutting-edge digital solutions that exceed your expectations.</div>
                        <div className="sec1 bird"><img src={bird1} /></div>
                        <div className="sec1 box3-bird"><img src={bird2} /></div>
                        <div className="sec1 box3-para">{box3_paragraph}</div>
                        <div className="sec1 download">
                            <p>
                                <b>Turning your dreams into
                                    reality</b>
                            </p>
                            <button onClick={(e) => createCV(e)} >Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="box box2">
                    <h1 className='heading'>Junaid Parkar</h1>
                </div>
                <div className="box box3">
                    <div className="sec">
                        <div className="sec1 nav">
                            <ul>
                                <li className='active'><span></span><a href="#home">Home</a></li>
                                <li><span></span><a href="#about">About</a></li>
                                <li><span></span><a href="#project">Project</a></li>
                                <li><span></span><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="sec1 bird"><img src={bird2} /></div>
                        <div className="sec1">{box3_paragraph}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
